import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { 
  CheckCircle2, 
  Download, 
  BookOpen, 
  ArrowLeft,
  AlertCircle,
  Loader2,
  PartyPopper
} from "lucide-react";
import { Link } from "wouter";

interface DownloadInfo {
  valid: boolean;
  email?: string;
  name?: string;
  downloadUrl?: string;
  message?: string;
}

export default function ThankYou() {
  const [, setLocation] = useLocation();
  const [token, setToken] = useState<string | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tokenParam = urlParams.get('token');
    if (tokenParam) {
      setToken(tokenParam);
    }
  }, []);

  const { data, isLoading, isError } = useQuery<DownloadInfo>({
    queryKey: [`/api/download/verify?token=${token}`],
    enabled: !!token,
    retry: 3,
    retryDelay: 1000,
  });

  const handleDownload = async () => {
    if (!token || !data?.valid) return;
    
    setIsDownloading(true);
    try {
      window.location.href = `/api/download/${token}`;
    } catch (error) {
      console.error("Error downloading:", error);
    } finally {
      setTimeout(() => setIsDownloading(false), 2000);
    }
  };

  if (!token) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/30 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <Card className="p-8 bg-background">
              <AlertCircle className="w-16 h-16 mx-auto mb-4 text-destructive" />
              <h1 className="text-2xl font-bold mb-4">Acceso No Autorizado</h1>
              <p className="text-muted-foreground mb-6">
                No tienes un token de descarga válido. Si ya realizaste tu compra, 
                revisa tu correo electrónico o contacta con soporte.
              </p>
              <Link href="/">
                <Button variant="outline" className="w-full">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Volver al Inicio
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/30 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 mx-auto mb-4 animate-spin text-primary" />
          <p className="text-muted-foreground">Verificando tu compra...</p>
        </div>
      </div>
    );
  }

  if (isError || !data?.valid) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/30 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <Card className="p-8 bg-background">
              <AlertCircle className="w-16 h-16 mx-auto mb-4 text-destructive" />
              <h1 className="text-2xl font-bold mb-4">Token Inválido</h1>
              <p className="text-muted-foreground mb-6">
                {data?.message || "El enlace de descarga no es válido o ha expirado. Por favor contacta con soporte si crees que esto es un error."}
              </p>
              <Link href="/">
                <Button variant="outline" className="w-full">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Volver al Inicio
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/30 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto text-center">
          <div className="mb-8">
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl" />
              <div className="relative w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-12 h-12 text-primary" />
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-2 mb-4">
            <PartyPopper className="w-6 h-6 text-secondary" />
            <span className="text-secondary font-medium">Pago Confirmado</span>
            <PartyPopper className="w-6 h-6 text-secondary" />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            ¡Gracias por tu Compra!
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8">
            {data.name ? `¡Hola ${data.name}! ` : ""}
            Tu ebook está listo para descargar. Haz clic en el botón de abajo para obtener tu copia.
          </p>
          
          <Card className="p-8 bg-background mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-20 bg-primary/10 rounded-lg flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-lg">Aprende Inglés Desde Cero</h3>
                <p className="text-sm text-muted-foreground">Ebook en formato PDF</p>
              </div>
            </div>
            
            <Button 
              className="w-full mb-4" 
              size="lg"
              onClick={handleDownload}
              disabled={isDownloading}
              data-testid="button-download"
            >
              {isDownloading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Descargando...
                </>
              ) : (
                <>
                  <Download className="w-5 h-5 mr-2" />
                  Descargar Ebook
                </>
              )}
            </Button>
            
            <p className="text-sm text-muted-foreground">
              Tu descarga comenzará automáticamente
            </p>
          </Card>
          
          <div className="space-y-4 text-left bg-card p-6 rounded-lg">
            <h3 className="font-semibold text-center mb-4">Próximos Pasos</h3>
            <div className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-primary text-sm font-medium">1</span>
              </div>
              <p className="text-muted-foreground">
                Descarga tu ebook haciendo clic en el botón de arriba
              </p>
            </div>
            <div className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-primary text-sm font-medium">2</span>
              </div>
              <p className="text-muted-foreground">
                Guarda el PDF en un lugar seguro de tu dispositivo
              </p>
            </div>
            <div className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-primary text-sm font-medium">3</span>
              </div>
              <p className="text-muted-foreground">
                Empieza a aprender inglés a tu propio ritmo
              </p>
            </div>
          </div>
          
          <div className="mt-8">
            <Link href="/">
              <Button variant="ghost" className="text-muted-foreground">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver al Inicio
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
