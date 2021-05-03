import gql from 'graphql-tag';

const GET_POKEMONS = gql`
    query pokemons($first: Int!) {
        pokemons(first: $first) {
            id
            name
            image
            maxHP
            maxCP
            attacks {
                special {
                    name
                    damage
                }
            }
        }   
    }
`;

export {default as GET_POKEMONS} from '../graphql/get-pokemons'