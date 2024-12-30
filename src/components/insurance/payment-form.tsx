import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export function PaymentForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success('Payment successful!');
    navigate('/confirmation');
    setLoading(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Details</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="cardName">Name on Card</Label>
            <Input id="cardName" placeholder="John Doe" required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="cardNumber">Card Number</Label>
            <Input id="cardNumber" placeholder="4111 1111 1111 1111" required />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="expiry">Expiry Date</Label>
              <Input id="expiry" placeholder="MM/YY" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cvc">CVC</Label>
              <Input id="cvc" placeholder="123" required />
            </div>
          </div>
          
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Processing...' : 'Pay Now'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}