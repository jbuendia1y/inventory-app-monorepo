import { Link } from "react-router-dom";
import { SidenavLinkProps } from "../interfaces";

export default function SidenavLink({
  children,
  image,
  className,
  ...rest
}: SidenavLinkProps) {
  return (
    <Link className={`sidenav__link ${className ? className : ""}`} {...rest}>
      {image && typeof image === "string" ? (
        <img src={image} alt="icon" />
      ) : (
        image
      )}
      {children}
    </Link>
  );
}
