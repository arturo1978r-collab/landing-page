import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Landing from "@/pages/landing";
import Checkout from "@/pages/checkout";
import ThankYou from "@/pages/thank-you";
import PaymentCallback from "@/pages/payment-callback";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/gracias" component={ThankYou} />
      <Route path="/pago/callback" component={PaymentCallback} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
