import { HTMLAttributes } from "react";
import { LinkProps } from "react-router-dom";

export interface SidenavListProps extends HTMLAttributes<HTMLUListElement> {
  children: any[] | any;
}

export interface SidenavItemProps extends HTMLAttributes<HTMLLIElement> {
  children: any[] | any;
}

export interface SidenavLinkProps extends LinkProps {
  image?: string | JSX.Element;
  children: any;
}
