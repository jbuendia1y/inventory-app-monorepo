import { HTMLAttributes } from "react";

export interface TableProps extends HTMLAttributes<HTMLTableElement> {
  children?: any;
}

interface BasicSectionTable extends HTMLAttributes<HTMLTableSectionElement> {
  children?: any;
}

export interface TableHeadProps extends BasicSectionTable {}
export interface TableBodyProps extends BasicSectionTable {}

export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  children?: any;
}
