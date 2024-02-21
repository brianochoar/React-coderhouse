import { Link } from "react-router-dom";
import { CartWidget } from "./CartWidget";
import { Category} from "./category";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container">
          <Link to={'/'} className="navbar-brand" >
            <img src="../img/logo.jpg" alt="logocuriosita" width="250px" height="100px" />
          </Link>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            
            <Category/>
            <CartWidget />
          </div>
        </div>
      </nav>
    </div>
  );
};

