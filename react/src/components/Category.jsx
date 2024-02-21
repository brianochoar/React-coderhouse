import { Link } from "react-router-dom"

export const Category = () => {
    return (
        <>

        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to={'/Category/marvel'}>
            <h2 className="nav-link" >Marvel</h2>
            </Link>
          </li>
          <li className="nav-item">
          <Link to={'/Category/disney'}>
            <h2 className="nav-link" >Disney</h2>
            </Link>
          </li>
          <li className="nav-item">
          <Link to={'/Category/hotwheels'}>
            <h2 className="nav-link" >Hot wheels</h2>
            </Link>
          </li>
        </ul>
    </>
    );
}


