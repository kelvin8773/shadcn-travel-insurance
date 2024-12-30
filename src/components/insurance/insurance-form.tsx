import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DatePicker } from '@/components/ui/date-picker';
import { destinations } from '@/data/destinations';

export function InsuranceForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    destination: '',
    startDate: new Date(),
    endDate: new Date(),
    coverageType: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store form data in session storage for later use
    sessionStorage.setItem('insuranceQuote', JSON.stringify(formData));
    // Navigate to plans page
    navigate('/plans');
  };

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Get Travel Insurance Quote</CardTitle>
        <CardDescription>
          Protect your journey with our comprehensive travel insurance
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="destination">Destination</Label>
            <Select
              value={formData.destination}
              onValueChange={(value) => setFormData({ ...formData, destination: value })}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select your destination" />
              </SelectTrigger>
              <SelectContent>
                {destinations.map((dest) => (
                  <SelectItem key={dest.id} value={dest.id}>
                    <span className="flex items-center">
                      <span>{dest.country}</span>
                      <span className="ml-2 text-sm text-muted-foreground">({dest.region})</span>
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Start Date</Label>
              <DatePicker
                date={formData.startDate}
                setDate={(date) => setFormData({ ...formData, startDate: date })}
              />
            </div>
            <div className="space-y-2">
              <Label>End Date</Label>
              <DatePicker
                date={formData.endDate}
                setDate={(date) => setFormData({ ...formData, endDate: date })}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">Get Quote</Button>
        </CardFooter>
      </form>
    </Card>
  );
}