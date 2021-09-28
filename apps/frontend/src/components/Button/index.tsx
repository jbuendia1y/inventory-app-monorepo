import "./button.scss";
import { ButtonProps } from "./interfaces";

export default function Button({
  children,
  styleButton = "primary",
  className = "",
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`button ${` button-${styleButton}`} ${className}`}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
}
