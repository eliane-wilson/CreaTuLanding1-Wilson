import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-4 text-danger">404</h1>
      <p className="lead">Página no encontrada</p>
      <Link to="/" className="btn btn-primary">
        Volver al inicio
      </Link>
    </div>
  )
}

export default NotFound
