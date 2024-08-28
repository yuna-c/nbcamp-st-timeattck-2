import { useContext } from 'react'
import { pokemonContext } from '../context/context'

import PokemonCard from './PokemonCard'

export default function Dashboard() {
  const { selectedPokemon, onHandleRemove } = useContext(pokemonContext)

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
