import React, { useState, useEffect } from "react"
import Pokemon from "./Pokemon"

function PokemonApplication() {
    const [pokemonList, setPokemonList] = useState([])
    const [selectedPokemon, setSelectedPokemon] = useState(null)

    useEffect(() => {
        const fetchPokemons = async () => {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
            const data = await response.json()
            setPokemonList(data.results)
        }

        fetchPokemons()
    }, [])

    return (
        <div className="container">
            <h1 className="app-header">Välj en Pokémon för att se dess data!</h1>

            <div className="dropdown-container">
                <select
                    className="pokemon-dropdown"
                    onChange={(e) => {
                        const selectedName = e.target.value;
                        if (selectedName) {
                            const selected = pokemonList.find((pokemon) => pokemon.name === selectedName)
                            setSelectedPokemon(selected)
                        } else {
                            setSelectedPokemon(null)
                        }
                    }}
                >
                    <option value="">-- Välj en Pokémon --</option>
                    {pokemonList.map((pokemon, index) => (
                        <option key={index} value={pokemon.name}>
                            {pokemon.name}
                        </option>
                    ))}
                </select>
            </div>

            {selectedPokemon && <Pokemon name={selectedPokemon.name} />}
        </div>
    )
}

export default PokemonApplication
