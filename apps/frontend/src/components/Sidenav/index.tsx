import { AssessmentIcon, ConfigurationIcon, ListIcon } from "../Icons";
import SidenavItem from "./components/sidenavItem";
import SidenavLink from "./components/sidenavLink";
import SidenavList from "./components/sidenavList";
import "./sidenav.scss";

export default function Sidenav() {
  return (
    <div className="sidenav">
      <div className="sidenav-box">
        <div className="sidenav__user">
          <img src="https://picsum.photos/536/354" alt="profile of User" />
          <span>Testing User</span>
        </div>
        <SidenavList>
          <SidenavItem>
            <SidenavLink image={AssessmentIcon} to="/resume">
              Resumen
            </SidenavLink>
          </SidenavItem>
          <SidenavItem>
            <SidenavLink image={ListIcon} to="/products">
              Productos
            </SidenavLink>
          </SidenavItem>
          <SidenavItem>
            <SidenavLink image={ConfigurationIcon} to="/settings">
              Configuración
            </SidenavLink>
          </SidenavItem>
        </SidenavList>
      </div>
    </div>
  );
}
