import React, { useEffect, useState } from "react"

function Pokemon({ name }) {
    const [pokemon, setPokemon] = useState(null)

    useEffect(() => {
        const fetchPokemonDetails = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
                const data = await response.json()
                setPokemon(data)
            } catch (error) {
                console.error("Fel vid hämtning av Pokémon-data:", error)
            }
        }

        fetchPokemonDetails()
    }, [name])

    if (!pokemon) {
        return <p>Laddar Pokémon-data...</p>
    }

    return (
        <div className="pokemonCard">
            <h2 className="pokemon-name">{pokemon.name.toUpperCase()}</h2>
            <img className="pokemon-image" src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>
                <strong>Typ/Typer:</strong> {pokemon.types.map((typeInfo) => typeInfo.type.name).join(", ")}
            </p>
            <p>
                <strong>Vikt:</strong> {pokemon.weight} hg
            </p>
            <p>
                <strong>Längd:</strong> {pokemon.height} dm
            </p>
        </div>
    )
}

export default Pokemon
