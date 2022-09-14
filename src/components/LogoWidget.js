import img from "../png/CatWidget.png";
import { NavLink } from "react-router-dom";

const LogoWidget = () => {
  return (
    <NavLink to="/" activeClassName="Active">
      <img class="imgLogo" src={img} alt="logo" />
    </NavLink>
  );
};

export default LogoWidget;
