import { Check } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { InsurancePlan } from '@/data/insurance-plans';

interface PlanCardProps {
  plan: InsurancePlan;
  selected?: boolean;
  onSelect: (planId: string) => void;
}

export function PlanCard({ plan, selected, onSelect }: PlanCardProps) {
  return (
    <Card className={`relative ${selected ? 'border-primary' : ''}`}>
      {plan.recommended && (
        <Badge className="absolute -top-2 -right-2 bg-secondary">
          Recommended
        </Badge>
      )}
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>{plan.name}</span>
          <span className="text-2xl">${plan.price}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-primary shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          variant={selected ? "default" : "outline"}
          className="w-full"
          onClick={() => onSelect(plan.id)}
        >
          {selected ? 'Selected' : 'Select Plan'}
        </Button>
      </CardFooter>
    </Card>
  );
}