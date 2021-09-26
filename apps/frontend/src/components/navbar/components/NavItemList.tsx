import { Link } from "react-router-dom";
import { navItemListProps } from "./interfaces";

export function NavItemList({ url, image, children }: navItemListProps) {
  return (
    <li className="nav__item">
      <Link className="nav__link" to={url}>
        {image && <img src={image} alt={children} />}
        {children}
      </Link>
    </li>
  );
}
