import { Footer, Header, PokemonCard } from '@/components';
import { samplePokemon } from '@/constants';
import { cn } from '@/libs/style';

const MainPage = () => {
  return (
    <div
      className={cn(
        'min-h-screen',
        'px-4',
        'py-12',
        'bg-gradient-to-br',
        'from-indigo-900',
        'via-purple-900',
        'to-pink-800',
      )}
    >
      <Header />
      <div
        className={cn(
          'grid',
          'grid-cols-1',
          'gap-8',
          'sm:grid-cols-2',
          'md:grid-cols-3',
          'lg:grid-cols-4',
        )}
      >
        {samplePokemon.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
