import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { PlanCard } from '@/components/insurance/plan-card';
import { insurancePlans } from '@/data/insurance-plans';

export function PlansPage() {
  const [selectedPlan, setSelectedPlan] = useState<string>('');
  const navigate = useNavigate();

  const handleContinue = () => {
    if (selectedPlan) {
      navigate('/terms');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Choose Your Coverage Plan</h1>
          <p className="text-gray-600 mt-2">Select the plan that best fits your needs</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {insurancePlans.map((plan) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              selected={selectedPlan === plan.id}
              onSelect={setSelectedPlan}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            size="lg"
            onClick={handleContinue}
            disabled={!selectedPlan}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}