import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Logo() {
  return (
    <div className="flex items-center gap-2" aria-label="Bangtan Boutique Logo">
      <Heart className="h-6 w-6 text-primary fill-current" />
      <span className="font-bold text-lg font-headline">Bangtan Boutique</span>
    </div>
  );
}
