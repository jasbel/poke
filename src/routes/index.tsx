import { $, component$, useSignal } from "@builder.io/qwik";
import { DocumentHead, Link, useNavigate } from "@builder.io/qwik-city";
import { PokemonImage } from "~/components/shared/pokemons/pokemon-image";

export default component$(() => {
  const pokeId = useSignal(1);
  const isBack = useSignal(false);
  const isView = useSignal(false);
  const nav = useNavigate()

  const changePokeId = $((value: number) => {
    if (pokeId.value + value <= 0) return;

    pokeId.value += value;
  });

  const goToPoke = $(() => {
    nav('/pokemon/'+pokeId.value)
  })

  return (
    <>
      <span class="text-2xl">Buscador simple</span>

      <span class="text-9xl">{pokeId.value}</span>

      {/* <Link href={`/pokemon/${pokeId.value}/`}> */}
      <div onClick$={() => goToPoke()}>

        <PokemonImage id={pokeId.value} backImage={isBack.value} isView={isView.value} />
      </div>
      
      {/* </Link> */}
      <div class="mt-2">
        <button class="btn btn-primary mr-2" onClick$={() => changePokeId(-1)}>
          Anterir
        </button>

        <button class="btn btn-primary mr-2" onClick$={() => (isBack.value = !isBack.value)}>
          Cambiar
        </button>
        <button class="btn btn-primary mr-2" onClick$={() => (isView.value = !isView.value)}>
          revelar
        </button>

        <button class="btn btn-primary" onClick$={() => changePokeId(1)}>
          Siguiente
        </button>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
