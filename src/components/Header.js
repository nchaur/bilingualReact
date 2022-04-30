import { Navbar, NavbarBrand } from "reactstrap";
import BilingualLogo from "../app/img/logo.png";

const Header = () => {
  return (
    <Navbar dark color="primary" sticky="top" expand="md">
      <NavbarBrand href="/">
        <img src={BilingualLogo} alt="bilingual logo" />
      </NavbarBrand>
    </Navbar>
  );
};

export default Header;
