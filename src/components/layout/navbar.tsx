import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/lib/auth';
import { Plane } from 'lucide-react';

export function Navbar() {
  const { user, isAuthenticated, setUser } = useAuth();

  return (
    <nav className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Plane className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-primary">SafeTravel</span>
          </Link>
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <span className="text-sm text-gray-600">Welcome, {user?.name}</span>
                <Button
                  variant="outline"
                  onClick={() => setUser(null)}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost">Login</Button>
                </Link>
                <Link to="/register">
                  <Button>Register</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}