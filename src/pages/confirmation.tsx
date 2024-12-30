import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ConfirmationDetails } from '@/components/insurance/confirmation-details';
import { PromotionCard } from '@/components/insurance/promotion-card';
import { promotions } from '@/data/promotions';

export function ConfirmationPage() {
  const navigate = useNavigate();
  
  useEffect(() => {
    const quote = sessionStorage.getItem('insuranceQuote');
    if (!quote) {
      navigate('/quote');
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary">Thank You for Your Purchase!</h1>
          <p className="text-gray-600 mt-2">Your travel insurance policy has been confirmed</p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <ConfirmationDetails />
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Exclusive Offers for You
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {promotions.map((promo) => (
              <PromotionCard key={promo.id} promotion={promo} />
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Button
            size="lg"
            onClick={() => navigate('/')}
          >
            Return to Home
          </Button>
        </div>
      </div>
    </div>
  );
}