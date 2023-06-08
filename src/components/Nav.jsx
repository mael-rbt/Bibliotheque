import { NavLink } from "react-router-dom";

const Nav = () => {
  const checkIsActive = ({ isActive }) => {
    return {
      display: "block",
      margin: "10px",
      color: isActive ? "orange" : "black",
    };
  };
  return (
    <nav>
      <ul style={{ listStyleType: "none", display: "flex" }}>
        <li>
        <NavLink to="/" style={checkIsActive}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/ajout" style={checkIsActive}>
            Ajout
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;