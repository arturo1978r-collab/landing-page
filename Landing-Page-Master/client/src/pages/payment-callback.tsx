import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Loader2, 
  CheckCircle2, 
  XCircle, 
  Clock,
  ArrowLeft
} from "lucide-react";
import { Link, useLocation } from "wouter";

type PaymentStatus = "loading" | "approved" | "declined" | "pending" | "error";

interface PaymentResult {
  status: string;
  downloadToken?: string;
  message?: string;
}

export default function PaymentCallback() {
  const [, setLocation] = useLocation();
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const MAX_RETRIES = 10;
    const RETRY_DELAY_MS = 3000;
    let timeoutId: NodeJS.Timeout | null = null;
    let isMounted = true;
    
    const verifyPayment = async (retryCount = 0): Promise<void> => {
      if (!isMounted) return;
      
      const urlParams = new URLSearchParams(window.location.search);
      const reference = urlParams.get('id') || urlParams.get('ref');
      
      if (!reference) {
        setPaymentStatus("error");
        setMessage("No se encontró la referencia de pago");
        return;
      }

      try {
        const response = await fetch(`/api/payment/verify?reference=${reference}`);
        const data: PaymentResult = await response.json();
        
        if (!isMounted) return;
        
        if (data.status === "APPROVED" && data.downloadToken) {
          setPaymentStatus("approved");
          timeoutId = setTimeout(() => {
            if (isMounted) setLocation(`/gracias?token=${data.downloadToken}`);
          }, 1500);
        } else if (data.status === "PENDING") {
          if (retryCount < MAX_RETRIES) {
            timeoutId = setTimeout(() => {
              verifyPayment(retryCount + 1);
            }, RETRY_DELAY_MS);
          } else {
            setPaymentStatus("pending");
            setMessage("Tu pago está siendo procesado. Recibirás un correo cuando esté listo, o intenta refrescar esta página en unos minutos.");
          }
        } else if (data.status === "DECLINED" || data.status === "REJECTED") {
          setPaymentStatus("declined");
          setMessage(data.message || "El pago no pudo ser procesado. Por favor intenta de nuevo.");
        } else if (data.status === "ERROR") {
          setPaymentStatus("error");
          setMessage(data.message || "Hubo un error al verificar tu pago. Por favor contacta soporte.");
        } else {
          if (retryCount < MAX_RETRIES) {
            timeoutId = setTimeout(() => {
              verifyPayment(retryCount + 1);
            }, RETRY_DELAY_MS);
          } else {
            setPaymentStatus("pending");
            setMessage("Tu pago está siendo procesado. Recibirás un correo cuando esté listo, o intenta refrescar esta página en unos minutos.");
          }
        }
      } catch (error) {
        if (!isMounted) return;
        if (retryCount < 5) {
          timeoutId = setTimeout(() => {
            verifyPayment(retryCount + 1);
          }, RETRY_DELAY_MS);
        } else {
          setPaymentStatus("error");
          setMessage("Error al conectar con el servidor. Por favor refresca la página.");
        }
      }
    };

    verifyPayment();
    
    return () => {
      isMounted = false;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [setLocation]);

  const renderContent = () => {
    switch (paymentStatus) {
      case "loading":
        return (
          <>
            <Loader2 className="w-16 h-16 mx-auto mb-6 animate-spin text-primary" />
            <h1 className="text-2xl font-bold mb-4">Verificando tu Pago</h1>
            <p className="text-muted-foreground">
              Por favor espera mientras confirmamos tu transacción...
            </p>
          </>
        );
      
      case "approved":
        return (
          <>
            <div className="relative inline-block mb-6">
              <div className="absolute -inset-4 bg-primary/20 rounded-full blur-xl" />
              <CheckCircle2 className="relative w-16 h-16 text-primary" />
            </div>
            <h1 className="text-2xl font-bold mb-4 text-primary">¡Pago Aprobado!</h1>
            <p className="text-muted-foreground mb-4">
              Tu pago ha sido procesado exitosamente.
            </p>
            <p className="text-sm text-muted-foreground">
              Redirigiendo a la página de descarga...
            </p>
          </>
        );
      
      case "pending":
        return (
          <>
            <Clock className="w-16 h-16 mx-auto mb-6 text-secondary" />
            <h1 className="text-2xl font-bold mb-4">Pago Pendiente</h1>
            <p className="text-muted-foreground mb-6">{message}</p>
            <Link href="/">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver al Inicio
              </Button>
            </Link>
          </>
        );
      
      case "declined":
        return (
          <>
            <XCircle className="w-16 h-16 mx-auto mb-6 text-destructive" />
            <h1 className="text-2xl font-bold mb-4">Pago Rechazado</h1>
            <p className="text-muted-foreground mb-6">{message}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/checkout">
                <Button>Intentar de Nuevo</Button>
              </Link>
              <Link href="/">
                <Button variant="outline">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Volver al Inicio
                </Button>
              </Link>
            </div>
          </>
        );
      
      default:
        return (
          <>
            <XCircle className="w-16 h-16 mx-auto mb-6 text-destructive" />
            <h1 className="text-2xl font-bold mb-4">Error</h1>
            <p className="text-muted-foreground mb-6">{message}</p>
            <Link href="/">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver al Inicio
              </Button>
            </Link>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/30 flex items-center justify-center py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto text-center">
          <Card className="p-8 bg-background">
            {renderContent()}
          </Card>
        </div>
      </div>
    </div>
  );
}
