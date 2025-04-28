
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { LogIn, LogOut } from 'lucide-react';

export default function AuthButton() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  if (user) {
    return (
      <Button
        variant="ghost"
        onClick={() => signOut()}
        className="flex items-center gap-2"
      >
        <LogOut className="h-4 w-4" />
        Sign Out
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      onClick={() => navigate('/auth')}
      className="flex items-center gap-2"
    >
      <LogIn className="h-4 w-4" />
      Sign In
    </Button>
  );
}
