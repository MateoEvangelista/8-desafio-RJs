import img from "../png/CartWidget.png";
import { NavLink } from "react-router-dom";

const CartWidget = () => {
  return (
    <NavLink to="/cart" activeClassName="Active">
      <img class="imgCart" src={img} alt="logo" />
    </NavLink>
  );
};

export default CartWidget;
