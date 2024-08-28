import { useContext } from 'react'
import { pokemonContext } from '../context/context'

import PokemonCard from './PokemonCard'

export default function PokemonList() {
  const { onHandleAdd, pokemon } = useContext(pokemonContext)

  return (
    <div className="PokemonList">
      {pokemon.map((data) => {
        return <PokemonCard key={data.id} data={data} onHandleClick={onHandleAdd} />
      })}
    </div>
  )
}
