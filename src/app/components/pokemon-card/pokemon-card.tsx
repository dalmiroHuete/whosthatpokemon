"use client";

import {Pokemon} from "@/app/utils/types/Pokemon";
import {Card, CardBody, Heading, Stack, CardFooter, Image, Button} from "@chakra-ui/react";
import {useState} from "react";

export interface PokemonCardProps {
    pokemon: Pokemon
}

const PokemonCard: React.FC<PokemonCardProps> = ({pokemon : {image, name}}) => {
    const [revealed, setRevealed] = useState(false)


    const revealName = () => {
        setRevealed(true)
    }

    return (
        <Card>
            <CardBody width={'300px'}>
                <Stack mt='6' spacing='3'>
                    <Image
                        src={image}
                        alt='Pokemon'
                        borderRadius='lg'
                        filter={revealed ? 'none' : 'brightness(0%)'}
                    />

                    <Heading size='md'>
                        {
                            revealed ? name : '???'
                        }
                    </Heading>
                </Stack>
            </CardBody>
            <CardFooter>
                 <Button onClick={revealName}>
                        Reveal POKEMON
                 </Button>
            </CardFooter>
        </Card>
    )
}

export default PokemonCard;

