import { Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function ConfirmationDetails() {
  const policyDetails = JSON.parse(sessionStorage.getItem('insuranceQuote') || '{}');
  const selectedPlan = sessionStorage.getItem('selectedPlan');

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Check className="h-6 w-6 text-primary" />
          Policy Confirmed
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-muted-foreground">Policy Number</p>
            <p className="font-medium">POL-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Coverage Plan</p>
            <p className="font-medium">{selectedPlan}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Destination</p>
            <p className="font-medium">{policyDetails.destination}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Travel Dates</p>
            <p className="font-medium">
              {new Date(policyDetails.startDate).toLocaleDateString()} - {new Date(policyDetails.endDate).toLocaleDateString()}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}