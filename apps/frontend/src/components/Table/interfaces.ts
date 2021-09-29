import { HTMLAttributes } from "react";

export interface TableProps extends HTMLAttributes<HTMLTableElement> {
  children?: any;
  caption?: "top" | "bottom";
}

interface BasicSectionTable extends HTMLAttributes<HTMLTableSectionElement> {
  children?: any;
}

export interface TableHeadProps extends BasicSectionTable {}
export interface TableBodyProps extends BasicSectionTable {}

export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  children?: any;
}

export interface TableFooterProps
  extends HTMLAttributes<HTMLTableSectionElement> {
  children?: any;
}
