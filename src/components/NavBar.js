import CartWidget from "./CartWidget";
import LogoWidget from "./LogoWidget";

import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="Navegacion">
      <ul>
        <LogoWidget />
        <NavLink to="/" activeClassName="Active">
          Home
        </NavLink>
        <NavLink to="/category/:id" activeClassName="Active">
          Productos
        </NavLink>
        <NavLink to="/item/:id" activeClassName="Active">
          Lista de detalles
        </NavLink>
        <CartWidget />
      </ul>
    </nav>
  );
};

export default NavBar;
