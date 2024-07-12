import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { PokemonData, FetchError } from "../types/type";

async function fetchData(): Promise<PokemonData> {
  const url = "https://pokeapi.co/api/v2/pokemon/arcanine";
  const response = await fetch(url);
  console.log(response)
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  console.log(data)
  const { abilities, height, weight } = data;
  return { abilities, height, weight };
}

export function usePokemonData(): UseQueryResult<PokemonData, FetchError> {
  return useQuery<PokemonData, FetchError>({
    queryKey: ["pokemonData"],
    queryFn: fetchData,
  });
}
