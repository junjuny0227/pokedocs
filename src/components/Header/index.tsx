import { cn } from '@/libs/style';
import { Sparkles, Star } from 'lucide-react';

const Header = () => {
  return (
    <header className={cn('flex', 'flex-col', 'items-center', 'justify-center', 'mb-16')}>
      <div
        className={cn(
          'mb-6',
          'inline-flex h-20 w-20',
          'items-center justify-center',
          'rounded-full',
          'bg-gradient-to-r from-yellow-400 to-orange-500',
          'shadow-2xl',
        )}
      >
        <Sparkles className="h-10 w-10 text-white" />
      </div>
      <h1
        className={cn(
          'mb-4',
          'text-6xl font-black',
          'bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300',
          'bg-clip-text text-transparent',
        )}
      >
        Pokédocs
      </h1>
      <p className={cn('text-xl', 'font-medium', 'text-purple-200', 'text-center')}>
        ✨ Check out Pokémon information at a glance. ✨
      </p>
      <div className={cn('mt-4', 'flex', 'items-center', 'justify-center', 'space-x-2')}>
        <Star className={cn('h-5', 'w-5', 'fill-current', 'text-yellow-400')} />
        <Star className={cn('h-5', 'w-5', 'fill-current', 'text-yellow-400')} />
        <Star className={cn('h-5', 'w-5', 'fill-current', 'text-yellow-400')} />
      </div>
    </header>
  );
};

export default Header;
