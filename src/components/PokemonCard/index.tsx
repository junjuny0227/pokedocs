import { Badge, Card, CardContent } from '../ui';
import { capitalizeFirst, formatPokemonId } from '@/utils';

import Image from 'next/image';
import Link from 'next/link';
import { Pokemon } from '@/types';
import { cn } from '@/libs/style';

const typeColors: Record<string, string> = {
  normal: 'from-gray-300 to-gray-400',
  fire: 'from-red-400 to-orange-500',
  water: 'from-blue-400 to-cyan-500',
  electric: 'from-yellow-300 to-yellow-500',
  grass: 'from-green-400 to-emerald-500',
  ice: 'from-blue-200 to-cyan-300',
  fighting: 'from-red-600 to-red-700',
  poison: 'from-purple-400 to-purple-600',
  ground: 'from-yellow-600 to-amber-700',
  flying: 'from-indigo-300 to-blue-400',
  psychic: 'from-pink-400 to-purple-500',
  bug: 'from-green-300 to-lime-500',
  rock: 'from-yellow-700 to-amber-800',
  ghost: 'from-purple-600 to-indigo-700',
  dragon: 'from-indigo-600 to-purple-700',
  dark: 'from-gray-700 to-gray-900',
  steel: 'from-gray-400 to-slate-600',
  fairy: 'from-pink-300 to-rose-400',
};

const typeIdColors: Record<string, string> = {
  normal: 'from-gray-500 to-gray-600',
  fire: 'from-red-500 to-red-600',
  water: 'from-blue-500 to-blue-600',
  electric: 'from-yellow-500 to-yellow-600',
  grass: 'from-green-500 to-green-600',
  ice: 'from-cyan-400 to-cyan-500',
  fighting: 'from-red-700 to-red-800',
  poison: 'from-purple-500 to-purple-600',
  ground: 'from-amber-600 to-amber-700',
  flying: 'from-sky-400 to-sky-500',
  psychic: 'from-pink-500 to-pink-600',
  bug: 'from-lime-500 to-lime-600',
  rock: 'from-stone-600 to-stone-700',
  ghost: 'from-violet-600 to-violet-700',
  dragon: 'from-indigo-600 to-indigo-700',
  dark: 'from-slate-700 to-slate-800',
  steel: 'from-slate-500 to-slate-600',
  fairy: 'from-rose-400 to-rose-500',
};

const typeHoverColors: Record<string, string> = {
  normal: 'group-hover:text-gray-600',
  fire: 'group-hover:text-red-600',
  water: 'group-hover:text-blue-600',
  electric: 'group-hover:text-yellow-600',
  grass: 'group-hover:text-green-600',
  ice: 'group-hover:text-cyan-600',
  fighting: 'group-hover:text-red-700',
  poison: 'group-hover:text-purple-600',
  ground: 'group-hover:text-amber-700',
  flying: 'group-hover:text-sky-600',
  psychic: 'group-hover:text-pink-600',
  bug: 'group-hover:text-lime-600',
  rock: 'group-hover:text-stone-700',
  ghost: 'group-hover:text-violet-700',
  dragon: 'group-hover:text-indigo-700',
  dark: 'group-hover:text-slate-800',
  steel: 'group-hover:text-slate-600',
  fairy: 'group-hover:text-rose-500',
};

const PokemonCard = ({ pokemon }: { pokemon: Pokemon }) => {
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
