import ItemCount from './ItemCount'

function ItemDetail({ product }) {
  return (
    <div className="card mb-4">
      <img src={product.img} alt={product.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p>Precio: ${product.price}</p>
        <p>Categoría: {product.category}</p>

        <ItemCount stock={product.stock} initial={1} />
      </div>
    </div>
  )
}

export default ItemDetail
