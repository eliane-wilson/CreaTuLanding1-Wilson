import { useState } from 'react'

function ItemCount({ stock, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial)

  const increment = () => {
    if (count < stock) setCount(count + 1)
  }

  const decrement = () => {
    if (count > 1) setCount(count - 1)
  }

  return (
    <div className="d-flex align-items-center mt-3">
      <button onClick={decrement} className="btn btn-secondary btn-sm">-</button>
      <span className="mx-2">{count}</span>
      <button onClick={increment} className="btn btn-secondary btn-sm">+</button>
      <button 
        onClick={() => onAdd(count)} 
        className="btn btn-primary btn-sm ms-2"
        disabled={stock === 0}
      >
        Agregar al carrito
      </button>
    </div>
  )
}

export default ItemCount


