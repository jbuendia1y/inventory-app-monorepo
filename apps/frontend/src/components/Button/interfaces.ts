import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: JSX.Element | JSX.Element[] | string | any[];
  styleButton?: "primary" | "secondary" | "danger" | "warning" | "success";
}
