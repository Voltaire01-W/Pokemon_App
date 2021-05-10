import React, {useState, useEffect} from 'react';
import Pokemon from './Pokemon';
import { useQuery } from '@apollo/react-hooks';
import GET_POKEMONS from '../graphql/get-pokemons';


const SearchBar = () => {
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
        variables: { first: 1000 },
    });
    const handleChange = event => {
        setSearch(event.target.value);
    };
    useEffect(() => {
        const results = pokemons.filter(pokemon =>
            pokemon.name.toLowerCase().includes(search.toLowerCase())
        );
        setSearchResults(results);
    }, [search, pokemons]);

    return (
            <div>
                <h1 className="container search-bar">
                    <input 
                    aria-label="search bar"
                    className="search-bar"
                    type="text" 
                    placeholder="Search Pokemon..."
                    value={search}
                    onChange={handleChange}/>
                </h1>
                <div className="container">
                    {searchResults.map(pokemon => (
                        <Pokemon key={pokemon.id} pokemon={pokemon} />
                    ))}
                </div>
            </div>
    )
}

export default SearchBar;