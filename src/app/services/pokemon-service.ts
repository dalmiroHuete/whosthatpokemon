import {Pokemon} from "@/app/utils/types/Pokemon";
import {BASE_POKE_IMAGE_URL} from "@/app/utils/constants/constants";

export const PokemonService = {
    fetchPokemonList : async (): Promise<Pokemon[]> => {
        const response = await fetch ('https://pokeapi.co/api/v2/pokemon?limit=21')

        if (!response.ok) {
            throw new Error('Error fetching pokemon list')
        }

        const data = await response.json()
        return data.results.map((pokemon: Pokemon, index: number) => {
            return { ...pokemon, image: `${BASE_POKE_IMAGE_URL}${index+1}.png` }
        })
    }
}


