import PokemonCard from './PokemonCard'

export default function PokemonList({ pokemon, onHandleAdd }) {
  // console.log(pokemon)
  return (
    <div className="PokemonList">
      {pokemon.map((data) => {
        return <PokemonCard key={data.id} data={data} onHandleClick={onHandleAdd} />
      })}
    </div>
  )
}
