import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { TermsContent } from '@/components/insurance/terms-content';

export function TermsPage() {
  const [accepted, setAccepted] = useState(false);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (accepted) {
      navigate('/payment');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Terms and Conditions</h1>
          <p className="text-gray-600 mt-2">Please review and accept our terms</p>
        </div>

        <div className="mb-8">
          <TermsContent
            accepted={accepted}
            onAcceptChange={(checked) => setAccepted(checked)}
          />
        </div>

        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={() => navigate('/plans')}
          >
            Back
          </Button>
          <Button
            onClick={handleContinue}
            disabled={!accepted}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}