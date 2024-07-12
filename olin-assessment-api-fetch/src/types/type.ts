import { ReactNode } from "react";

export interface Ability {
  ability: {
    name: string;
  };
}

export interface PokemonData {
  abilities: Ability[];
  height: number;
  weight: number;
}

export interface FetchError {
  message: ReactNode;
  error: string;
}
