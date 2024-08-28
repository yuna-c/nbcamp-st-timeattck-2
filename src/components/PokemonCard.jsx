import { useNavigate } from 'react-router-dom'

export default function PokemonCard({ data, onHandleClick }) {
  const navigate = useNavigate()
  return (
    <div className="PokemonCard" style={{ cursor: 'pointer', border: '1px solid #ddd' }}>
      <div
        onClick={() => {
          onHandleClick(data)
        }}
      >
        <img src={data.img_url} alt={data.korean_name} />
        <p>{data.korean_name}</p>
        <p>{data.id}</p>
        <p>{data.description}</p>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation()
          navigate(`/dex/detail?id=${data.id}`)
        }}
      >
        자세히보기
      </button>
    </div>
  )
}
