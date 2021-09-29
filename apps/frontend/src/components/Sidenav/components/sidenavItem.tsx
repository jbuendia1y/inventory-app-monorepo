import { SidenavItemProps } from "../interfaces";

export default function SidenavItem({ children, className }: SidenavItemProps) {
  return (
    <li className={`sidenav__item ${className ? className : ""}`}>
      {children}
    </li>
  );
}
