import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';

interface TermsContentProps {
  accepted: boolean;
  onAcceptChange: (checked: boolean) => void;
}

export function TermsContent({ accepted, onAcceptChange }: TermsContentProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Terms and Conditions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="prose prose-sm max-w-none">
          <h3>1. Coverage Terms</h3>
          <p>This travel insurance policy provides coverage as described in your policy documents...</p>
          
          <h3>2. Exclusions</h3>
          <p>Please be aware that this policy does not cover pre-existing conditions...</p>
          
          <h3>3. Claims Process</h3>
          <p>In the event of a claim, please contact our 24/7 assistance team...</p>
          
          <h3>4. Policy Cancellation</h3>
          <p>You may cancel your policy within 14 days of purchase for a full refund...</p>
        </div>
        
        <div className="flex items-center space-x-2">
          <Checkbox
            id="terms"
            checked={accepted}
            onCheckedChange={onAcceptChange}
          />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I accept the terms and conditions
          </label>
        </div>
      </CardContent>
    </Card>
  );
}