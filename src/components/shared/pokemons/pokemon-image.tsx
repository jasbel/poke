import { component$, useSignal, useTask$, useTaskQrl } from "@builder.io/qwik";
interface Props {
  id: number;
  size?: number;
  backImage?: boolean;
  isView?: boolean;
}
export const PokemonImage = component$(({ id, size = 200, backImage, isView }: Props) => {
  const load = useSignal(false);

  useTask$(({ track }) => {
    track(() => id);
    load.value = true;
  });

  return (
    <div class="flex items-center justify-center" style={{ width: `${size}px`, height: `${size}px` }}>
      { load.value  &&

      <span>Cargando...</span>
      }
      <img
        src={`https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon${backImage ? "/back" : ""}/${id}.png?raw=true`}
        alt=""
        style={{ width: size + "px" }}
        onLoad$={() => (load.value = false)}
        class={[{
          'hidden': load.value,
          'brightness-0': !isView,
        }, 'transition-all']}
      />
    </div>
  );
});
