import "./footer.scss";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <Link to="/uso-de-datos">uso de datos</Link>
      </div>
    </footer>
  );
}
