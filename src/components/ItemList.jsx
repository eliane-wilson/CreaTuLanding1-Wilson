import { Link } from 'react-router-dom'

function ItemList({ items }) {
  return (
    <div className="row">
      {items.map(item => (
        <div key={item.id} className="col-md-4 mb-4">
          <div className="card h-100 text-center">
            <img src={item.img} alt={item.name} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p>Precio: ${item.price}</p>
              <Link to={`/product/${item.id}`} className="btn btn-primary btn-sm">
                Ver detalle
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ItemList
