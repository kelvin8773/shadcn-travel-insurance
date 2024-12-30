import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, Plane, Clock, Heart } from 'lucide-react';

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary to-secondary py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="text-center">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
              Travel with Confidence
            </h1>
            <p className="mt-4 text-xl">
              Comprehensive travel insurance for your peace of mind
            </p>
            <div className="mt-8">
              <Link to="/quote">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <Shield className="mx-auto h-12 w-12 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">Comprehensive Coverage</h3>
              <p className="mt-2 text-gray-600">Protection for medical emergencies and trip cancellations</p>
            </div>
            <div className="text-center">
              <Plane className="mx-auto h-12 w-12 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">Global Coverage</h3>
              <p className="mt-2 text-gray-600">Travel anywhere with our worldwide protection</p>
            </div>
            <div className="text-center">
              <Clock className="mx-auto h-12 w-12 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">24/7 Support</h3>
              <p className="mt-2 text-gray-600">Round-the-clock assistance whenever you need it</p>
            </div>
            <div className="text-center">
              <Heart className="mx-auto h-12 w-12 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">Easy Claims</h3>
              <p className="mt-2 text-gray-600">Simple and fast claims process</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}