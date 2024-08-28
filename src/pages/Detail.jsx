import { useNavigate, useSearchParams } from 'react-router-dom'
import MOCK_DATA from '../mock'

export default function Detail() {
  const pokemon = MOCK_DATA
  const navigate = useNavigate()
  const [params] = useSearchParams()

  const pokemonId = params.get('id')

  const selectedPokemon = pokemon.find((data) => data.id === Number(pokemonId))

  return (
    <div className="Detail">
      <img src={selectedPokemon.img_url} alt={selectedPokemon.korean_name} />
      <p>{selectedPokemon.korean_name}</p>
      <p>{selectedPokemon.types.join('', '')}</p>
      <p>{selectedPokemon.description}</p>

      <button onClick={() => navigate('/dex')}>돌아가기</button>
    </div>
  )
}
