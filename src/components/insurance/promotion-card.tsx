import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Promotion } from '@/data/promotions';

interface PromotionCardProps {
  promotion: Promotion;
}

export function PromotionCard({ promotion }: PromotionCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <img
          src={promotion.imageUrl}
          alt={promotion.title}
          className="w-full h-full object-cover"
        />
        <Badge className="absolute top-2 right-2 bg-secondary">
          {promotion.discount}
        </Badge>
      </div>
      <CardHeader className="font-semibold">
        {promotion.title}
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          {promotion.description}
        </p>
        <Button className="w-full">Learn More</Button>
      </CardContent>
    </Card>
  );
}