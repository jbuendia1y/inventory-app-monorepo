import logo from "../logo.svg";
import Navegation from "./Navegation";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo de reactJS" className="header__image" />
      <Navegation />
    </header>
  );
}
