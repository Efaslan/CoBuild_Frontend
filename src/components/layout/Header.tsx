import { Button } from '../ui/button.tsx';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar.tsx';
import { Badge } from '../ui/badge.tsx';
import { Bell, FolderKanban } from 'lucide-react';
import { currentUser } from '../../../mockData.ts';

interface HeaderProps {
  isAuthenticated: boolean;
  onNavigate: (page: string) => void;
}

export function Header({ isAuthenticated, onNavigate }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => onNavigate(isAuthenticated ? 'dashboard' : 'home')}
        >
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <FolderKanban className="h-5 w-5 text-primary-foreground" />
          </div>
          <h2 className="text-xl">CoBuild</h2>
        </div>

        {/* Navigation */}
        {isAuthenticated ? (
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative"
              onClick={() => onNavigate('dashboard')}
            >
              <Bell className="h-5 w-5" />
              <Badge 
                variant="destructive" 
                className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
              >
                3
              </Badge>
            </Button>
            
            <div 
              className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => onNavigate('profile')}
            >
              <Avatar className="h-8 w-8">
                <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
                <AvatarFallback>{currentUser.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <span className="hidden md:block">{currentUser.name}</span>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Button variant="ghost" onClick={() => onNavigate('login')}>
              Login
            </Button>
            <Button onClick={() => onNavigate('signup')}>
              Join Now
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
