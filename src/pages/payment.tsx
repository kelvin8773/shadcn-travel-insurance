import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { PaymentForm } from '@/components/insurance/payment-form';

export function PaymentPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Payment</h1>
          <p className="text-gray-600 mt-2">Complete your purchase securely</p>
        </div>

        <div className="mb-8">
          <PaymentForm />
        </div>

        <div className="flex justify-start">
          <Button
            variant="outline"
            onClick={() => navigate('/terms')}
          >
            Back
          </Button>
        </div>
      </div>
    </div>
  );
}