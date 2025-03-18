"use client";

import { FC } from "react";
import {Box, Center, Container, Grid, GridItem, Heading, Spinner, Text} from "@chakra-ui/react";
import {usePokemonQuery} from "@/app/api-hooks/queries/use-pokemon-query";
import PokemonCard from "@/app/components/pokemon-card/pokemon-card";

export type PokemonPageProps = object;

 const PokemonPage: FC<PokemonPageProps> = () => {
     const {data, isLoading, error} = usePokemonQuery()

     if(isLoading)
         return (
             <Spinner size={'xl'} />
         )

     if(error)
         return (
             <Grid placeItems={'center'}>
                 <Text color={'red'}>Error loading Pokemon List</Text>
             </Grid>
         )


    return (
        <Box bg='#cc0000' w='100%' p={4} color={'white'}>
            <Center h='100px' color='#ffde00'>
                <Heading> WHO'S THAT POKEMON</Heading>
            </Center>

            <Container bg='#3b4cca'>
                    <Grid
                        templateColumns='repeat(3, 1fr)'
                        justifyContent='center'
                        alignItems='center'
                        gap={10}
                    >
                        {
                            data?.map((pokemon, index) => (
                                <GridItem key={index}>
                                  <PokemonCard pokemon={pokemon} />
                                </GridItem>
                            ))
                        }
                    </Grid>
                </Container>
        </Box>
    );
};

 export default PokemonPage;
