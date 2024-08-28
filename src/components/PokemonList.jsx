// import { useContext } from 'react'
// import { pokemonContext } from '../context/context'

import { useSelector, useDispatch } from 'react-redux'
import PokemonCard from './PokemonCard'
import { addPokemon } from '../redux/slices/slice'

export default function PokemonList() {
  // const { onHandleAdd, pokemon } = useContext(pokemonContext)

  const selectedPokemon = useSelector((state) => state.pokemon.selectedPokemon)
  const dispatch = useDispatch()

  const onHandleAdd = (pokemon) => {
    dispatch(addPokemon(pokemon))
  }
  return (
    <div className="PokemonList">
      {pokemon.map((data) => {
        return <PokemonCard key={data.id} data={data} onHandleClick={onHandleAdd} />
      })}
    </div>
  )
}
