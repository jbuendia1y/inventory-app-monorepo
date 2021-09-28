import { SidenavListProps } from "../interfaces";

export default function SidenavList({
  children,
  className,
  ...rest
}: SidenavListProps) {
  return (
    <ul className={`sidenav__list ${className ? className : ""}`} {...rest}>
      {children}
    </ul>
  );
}
