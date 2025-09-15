import { Link } from 'react-router-dom'

function Item({ item }) {
  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <img src={item.img} alt={item.name} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p>${item.price}</p>
          <Link to={`/item/${item.id}`} className="btn btn-primary">Ver Detalle</Link>
        </div>
      </div>
    </div>
  );
}
export default Item