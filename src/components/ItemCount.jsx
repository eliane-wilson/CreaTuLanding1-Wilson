import { useState } from 'react'

function ItemCount({ stock }) {
  const [count, setCount] = useState(1)

  const aumentar = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }

  const disminuir = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  return (
    <div style={{ marginTop: '10px' }}>
      <button onClick={disminuir}>-</button>
      <span style={{ margin: '0 10px' }}>{count}</span>
      <button onClick={aumentar}>+</button>
    </div>
  )
}

export default ItemCount

