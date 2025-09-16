import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { products } from '../data/products'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
  const { productId } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const fetchProduct = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find(p => p.id === productId))
      }, 500)
    })
    fetchProduct.then(res => setProduct(res))
  }, [productId])

  return (
    <div className="container mt-4 text-center">
      {product ? <ItemDetail product={product} /> : <p>Cargando producto...</p>}
    </div>
  )
}

export default ItemDetailContainer

