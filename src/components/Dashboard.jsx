// import { useContext } from 'react'
// import { pokemonContext } from '../context/context'

import { useSelector, useDispatch } from 'react-redux'
import PokemonCard from './PokemonCard'
import { removePokemon } from '../redux/slices/slice'

export default function Dashboard() {
  // const { selectedPokemon, onHandleRemove } = useContext(pokemonContext)
  const selectedPokemon = useSelector((state) => state.pokemon.selectedPokemon)
  const dispatch = useDispatch()

  const onHandleRemove = (pokemon) => {
    dispatch(removePokemon(pokemon.id))
  }
  return (
    <div className="Dashboard" style={{ borderBottom: '1px solid red', margin: '30px 0', padding: '30px 0' }}>
      {selectedPokemon.length === 0 ? (
        <p>선택 포켓몬 없으</p>
      ) : (
        <>
          {selectedPokemon.map((data) => (
            <PokemonCard key={data.id} data={data} onHandleClick={onHandleRemove} />
          ))}
        </>
      )}
    </div>
  )
}
