import { useState } from 'react'
import MOCK_DATA from './../mock'
import Dashboard from '../components/Dashboard'
import PokemonList from '../components/PokemonList'

export default function Dex() {
  const pokemon = MOCK_DATA
  const [selectedPokemon, setSelectedPokemon] = useState([])

  // console.log(pokemon)

  const onHandleAdd = (pokemon) => {
    if (selectedPokemon.length >= 6) {
      alert('6개 넘음')
    } else if (selectedPokemon.includes(pokemon)) {
      alert('이미 있음')
    } else {
      setSelectedPokemon([...selectedPokemon, pokemon])
      // console.log(setSelectedPokemon)}
    }
  }

  const onHandleRemove = (pokemon) => {
    const newPokemon = selectedPokemon.filter((prev) => prev.id !== pokemon.id)
    setSelectedPokemon(newPokemon)
  }

  return (
    <div className="Dex">
      <Dashboard selectedPokemon={selectedPokemon} onHandleRemove={onHandleRemove} />
      <PokemonList pokemon={pokemon} onHandleAdd={onHandleAdd} />
    </div>
  )
}
