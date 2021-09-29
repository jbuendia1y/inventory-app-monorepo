import "./table.scss";

import {
  TableBodyProps,
  TableFooterProps,
  TableHeadProps,
  TableProps,
  TableRowProps,
} from "./interfaces";

export default function Table({
  children,
  className = "",
  caption = "bottom",
  ...rest
}: TableProps) {
  return (
    <table className={`table ${className} caption-${caption}`} {...rest}>
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

export function TableFooter({
  children,
  className = "",
  ...rest
}: TableFooterProps) {
  return (
    <tfoot className={`table__footer ${className}`} {...rest}>
      {children}
    </tfoot>
  );
}
