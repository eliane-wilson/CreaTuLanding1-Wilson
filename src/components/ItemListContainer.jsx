import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../data/products'
import ItemList from './ItemList'

function ItemListContainer() {
  const { categoryId } = useParams()
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchItems = new Promise((resolve) => {
      setTimeout(() => {
        if (categoryId) {
          resolve(products.filter(p => p.category.toLowerCase() === categoryId.toLowerCase()))
        } else {
          resolve(products)
        }
      }, 500)
    })
    fetchItems.then(res => setItems(res))
  }, [categoryId])

  return (
    <div className="container my-4">
      <h2 className="text-center">Catálogo de productos</h2>
      <ItemList items={items} />
    </div>
  )
}

export default ItemListContainer
