import "./table.scss";

import {
  TableBodyProps,
  TableHeadProps,
  TableProps,
  TableRowProps,
} from "./interfaces";
import { createRef } from "react";

export default function Table({ children, className, ...rest }: TableProps) {
  const tableRef = createRef<HTMLTableElement>();

  return (
    <table
      className={`table ${className ? className : ""}`}
      ref={tableRef}
      {...rest}
    >
      {children}
    </table>
  );
}

export function TableHead({ children, className }: TableHeadProps) {
  return (
    <thead className={`table__head ${className ? className : ""}`}>
      {children}
    </thead>
  );
}

export function TableBody({ children, className, ...rest }: TableBodyProps) {
  return (
    <tbody className={`table__body ${className ? className : ""}`} {...rest}>
      {children}
    </tbody>
  );
}

export function TableRow({ children, className, ...rest }: TableRowProps) {
  return (
    <tr className={`table__row ${className ? className : ""}`} {...rest}>
      {children}
    </tr>
  );
}
