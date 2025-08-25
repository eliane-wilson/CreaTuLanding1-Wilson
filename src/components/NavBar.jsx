import CartWidget from './CartWidget'

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <a className="navbar-brand d-flex align-items-center" href="/">
        <img
          src="https://i.imgur.com/fxgDxNO.png"
          alt="Logo"
          style={{ width: '40px', height: '40px', borderRadius: '50%' }}
          className="me-2"
        />
        Triativ
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto">
          <li className="nav-item"><a className="nav-link" href="#">Inicio</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Diseños</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Contactanos</a></li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  )
}

export default NavBar
