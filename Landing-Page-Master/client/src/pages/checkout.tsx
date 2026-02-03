import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { 
  BookOpen, 
  Shield, 
  CreditCard, 
  ArrowLeft,
  CheckCircle2,
  Loader2
} from "lucide-react";
import { Link } from "wouter";

const checkoutSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Ingresa un correo electrónico válido"),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

export default function Checkout() {
  const { toast } = useToast();
  const [isRedirecting, setIsRedirecting] = useState(false);

  const form = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const createPaymentMutation = useMutation({
    mutationFn: async (data: CheckoutFormData): Promise<{ redirectUrl: string }> => {
      const response = await apiRequest("POST", "/api/checkout", data);
      return await response.json();
    },
    onSuccess: (data) => {
      setIsRedirecting(true);
      window.location.href = data.redirectUrl;
    },
    onError: (error: Error) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Hubo un error al procesar tu solicitud. Por favor intenta de nuevo.",
      });
    },
  });

  const onSubmit = (data: CheckoutFormData) => {
    createPaymentMutation.mutate(data);
  };

  const isLoading = createPaymentMutation.isPending || isRedirecting;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/30 py-8 md:py-16">
      <div className="container mx-auto px-4">
        <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Volver a la página principal
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Finaliza tu Compra
              </h1>
              <p className="text-muted-foreground mb-8">
                Completa tus datos para recibir tu ebook instantáneamente
              </p>
              
              <Card className="p-6 bg-background">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre Completo</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Tu nombre" 
                              {...field} 
                              data-testid="input-name"
                              disabled={isLoading}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Correo Electrónico</FormLabel>
                          <FormControl>
                            <Input 
                              type="email"
                              placeholder="tu@email.com" 
                              {...field} 
                              data-testid="input-email"
                              disabled={isLoading}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full" 
                      size="lg"
                      disabled={isLoading}
                      data-testid="button-checkout-submit"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          {isRedirecting ? "Redirigiendo a Wompi..." : "Procesando..."}
                        </>
                      ) : (
                        <>
                          <CreditCard className="w-5 h-5 mr-2" />
                          Pagar $35.000 COP
                        </>
                      )}
                    </Button>
                    
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Shield className="w-4 h-4" />
                      <span>Pago seguro procesado por Wompi</span>
                    </div>
                  </form>
                </Form>
              </Card>
            </div>
            
            <div className="lg:pl-8">
              <Card className="p-6 bg-card sticky top-8">
                <h2 className="text-xl font-semibold mb-4">Resumen de tu Compra</h2>
                
                <div className="flex gap-4 mb-6 p-4 bg-primary/5 rounded-lg">
                  <div className="w-16 h-20 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Aprende Inglés Desde Cero</h3>
                    <p className="text-sm text-muted-foreground">Ebook en formato PDF</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  {[
                    "Descarga instantánea",
                    "Acceso de por vida",
                    "Ejercicios prácticos",
                    "Método para hispanohablantes"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>$35.000 COP</span>
                  </div>
                  <div className="flex justify-between items-center text-lg font-semibold">
                    <span>Total</span>
                    <span className="text-primary">$35.000 COP</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
