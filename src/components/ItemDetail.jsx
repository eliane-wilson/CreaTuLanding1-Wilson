import ItemCount from './ItemCount'

function ItemDetail({ product }) {

  const handleAdd = (cantidad) => {
    alert(`Agregaste ${cantidad} unidades de ${product.name} al carrito`)
  }

  return (
    <div className="card mx-auto" style={{ maxWidth: '400px' }}>
      <img src={product.img} alt={product.name} className="card-img-top" />
      <div className="card-body text-center">
        <h5 className="card-title">{product.name}</h5>
        <p>Precio: ${product.price}</p>
        <p>Categoría: {product.category}</p>
        <ItemCount stock={product.stock} initial={1} onAdd={handleAdd} />
      </div>
    </div>
  )
}

export default ItemDetail

