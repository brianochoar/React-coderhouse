

export const Navbar = () => {
    return (
        <div>
            <nav className="navbar bg-body-tertiary">
    <div className="container">
      <a className="navbar-brand" href="./index.html">
        <h1> Curiositas</h1>
      </a>
    </div>
  </nav>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href />
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Juegos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Juguetes</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Regalos</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Productos
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Muñecas y muñecos</a></li>
              <li>
                <a className="dropdown-item" href="#">Peluches</a>
              </li>
              <li>
                <a className="dropdown-item" href="#">Juegos de mesa</a>
              </li>
              <li>
                <a className="dropdown-item" href="#">Autos y motos</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
        </div>
    );
}



