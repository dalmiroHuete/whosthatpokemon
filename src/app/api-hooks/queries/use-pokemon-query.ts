import {useQuery} from "@tanstack/react-query";
import {PokemonService} from "@/app/services/pokemon-service";
import {Pokemon} from "@/app/utils/types/Pokemon";

export const usePokemonQuery = () => {
    return useQuery<Pokemon[]>({
        queryKey: ['pokemon'],
        queryFn: PokemonService.fetchPokemonList
    })
}
