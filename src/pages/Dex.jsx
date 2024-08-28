import { useState } from 'react'
import { pokemonContext } from '../context/context'

import MOCK_DATA from './../mock'
import Dashboard from '../components/Dashboard'
import PokemonList from '../components/PokemonList'

export default function Dex() {
  const pokemon = MOCK_DATA
  const [selectedPokemon, setSelectedPokemon] = useState([])

  const onHandleAdd = (pokemon) => {
    if (selectedPokemon.length >= 6) {
      alert('6개 넘음')
    } else if (selectedPokemon.includes(pokemon)) {
      alert('이미 있음')
    } else {
      setSelectedPokemon([...selectedPokemon, pokemon])
    }
  }

  const onHandleRemove = (pokemon) => {
    const newPokemon = selectedPokemon.filter((prev) => prev.id !== pokemon.id)
    setSelectedPokemon(newPokemon)
  }

  return (
    <pokemonContext.Provider
      value={{
        selectedPokemon: selectedPokemon,
        onHandleRemove: onHandleRemove,
        onHandleAdd: onHandleAdd,
        pokemon: pokemon
      }}
    >
      <div className="Dex">
        <Dashboard />
        <PokemonList />
      </div>
    </pokemonContext.Provider>
  )
}
