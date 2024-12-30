import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { Navbar } from '@/components/layout/navbar';
import { HomePage } from '@/pages/home';
import { LoginPage } from '@/pages/login';
import { RegisterPage } from '@/pages/register';
import { QuotePage } from '@/pages/quote';
import { PlansPage } from '@/pages/plans';
import { TermsPage } from '@/pages/terms';
import { PaymentPage } from '@/pages/payment';
import { ConfirmationPage } from '@/pages/confirmation';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/quote" element={<QuotePage />} />
          <Route path="/plans" element={<PlansPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
