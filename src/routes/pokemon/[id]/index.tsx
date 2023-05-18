import { component$ } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';
import { PokemonImage } from '~/components/shared/pokemons/pokemon-image';

interface Props {
  children?: any
}

export default component$((props:Props) => {

  const nav = useNavigate()

  return <div>id

    {props.children}
{JSON.stringify(nav, null, 3)}
    <PokemonImage id={1} isView />
  </div>
});