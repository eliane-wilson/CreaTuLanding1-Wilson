import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { products } from '../data/products'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
  const { productId } = useParams() 
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const getProduct = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find(p => p.id === productId))
      }, 300)
    })
    getProduct.then(res => setProduct(res))
  }, [productId])

  return (
    <div className="container mt-4">
      {product ? <ItemDetail product={product} /> : <p>Cargando...</p>}
    </div>
  )
}

export default ItemDetailContainer
