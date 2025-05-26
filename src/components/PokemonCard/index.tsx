import Link from 'next/link';
import { Badge, Card, CardContent } from '../ui';
import { cn } from '@/libs/style';
import { capitalizeFirst, formatPokemonId } from '@/utils';
import Image from 'next/image';
import { typeColors, typeHoverColors, typeIdColors } from '@/constants';

const PokemonCard = ({ pokemon }) => {
  return (
    <Link href={`/pokemon/${pokemon.id}`}>
      <Card
        className={cn(
          'group',
          'relative',
          'cursor-pointer',
          'overflow-hidden',
          'border-0',
          'bg-white/95',
          'shadow-2xl',
          'backdrop-blur-sm',
          'transition-all',
          'duration-500',
          'hover:-translate-y-2',
          'hover:scale-105',
          'hover:shadow-purple-500/25',
        )}
      >
        <div
          className={cn(
            'absolute',
            'inset-0',
            'bg-gradient-to-br',
            'opacity-10',
            'transition-opacity',
            'duration-300',
            'group-hover:opacity-20',
            typeColors[pokemon.types[0]] || typeColors.normal,
          )}
        ></div>

        <CardContent className={cn('relative', 'p-6')}>
          <div className={cn('text-center')}>
            <div
              className={cn(
                'inline-block',
                'bg-gradient-to-r',
                'px-3',
                'py-1',
                'mb-4',
                'rounded-full',
                'shadow-lg',
                typeIdColors[pokemon.types[0]] || typeIdColors.normal,
              )}
            >
              <p className={cn('text-sm', 'font-bold', 'text-white')}>
                {formatPokemonId(pokemon.id)}
              </p>
            </div>

            <div
              className={cn(
                'relative',
                'mx-auto',
                'mb-6',
                'h-32',
                'w-32',
                'transition-transform',
                'duration-300',
                'group-hover:scale-110',
              )}
            >
              <div
                className={cn(
                  'absolute',
                  'inset-0',
                  'rounded-full',
                  'bg-gradient-to-r',
                  'from-blue-200/50',
                  'to-purple-200/50',
                  'blur-xl',
                  'transition-all',
                  'duration-300',
                  'group-hover:blur-2xl',
                )}
              ></div>
              <Image
                src={pokemon.image}
                alt={pokemon.name}
                fill
                className={cn('relative', 'z-10', 'object-contain', 'drop-shadow-2xl')}
                sizes="128px"
              />
            </div>

            <h3
              className={cn(
                'mb-4',
                'text-2xl',
                'font-black',
                'text-gray-800',
                'transition-colors',
                'duration-300',
                typeHoverColors[pokemon.types[0]] || typeHoverColors.normal,
              )}
            >
              {capitalizeFirst(pokemon.name)}
            </h3>

            <div className={cn('flex', 'flex-wrap', 'justify-center', 'gap-2')}>
              {pokemon.types.map(type => (
                <Badge
                  key={type}
                  className={cn(
                    'border-0',
                    'px-4',
                    'py-2',
                    'text-sm',
                    'font-bold',
                    'text-white',
                    'shadow-lg',
                    'transition-shadow',
                    'duration-300',
                    'hover:shadow-xl',
                    'bg-gradient-to-r',
                    typeColors[type] || typeColors.normal,
                  )}
                >
                  {capitalizeFirst(type)}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PokemonCard;
