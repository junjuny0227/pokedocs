import { cn } from '@/libs/style';

const Footer = () => {
  return (
    <footer
      className={cn(
        'mt-20',
        'flex',
        'flex-row',
        'items-center',
        'justify-center',
        'gap-4',
        'text-purple-300',
      )}
    >
      <div className={cn('h-2', 'w-2', 'animate-ping', 'rounded-full', 'bg-yellow-400')}></div>
      <p className={cn('text-lg', 'font-medium')}>Loading more magical creatures...</p>
      <div
        className={cn('h-2', 'w-2', 'animate-ping', 'rounded-full', 'bg-pink-400', 'delay-300')}
      ></div>
    </footer>
  );
};

export default Footer;
