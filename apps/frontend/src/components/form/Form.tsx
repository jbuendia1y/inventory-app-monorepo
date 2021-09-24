import { createRef } from "react";
import "./form.scss";
import type { FormProps, FormInputProps } from "./interfaces";

export default function Form({ children, ...rest }: FormProps) {
  return (
    <form className="form" {...rest}>
      {children}
    </form>
  );
}

export function FormInput({
  name,
  label,
  ref,
  validate,
  errorText,
  ...rest
}: FormInputProps) {
  const spanRef = createRef<HTMLParagraphElement>();

  const hiddenError = () => {
    if (!spanRef.current?.classList.contains("form__error-hidden"))
      spanRef.current?.classList.toggle("form__error-hidden");
  };

  const viewError = () => {
    if (spanRef.current?.classList.contains("form__error-hidden"))
      spanRef.current?.classList.toggle("form__error-hidden");
  };

  return (
    <div className="form__field">
      <label className="form__label" htmlFor={name}>
        {label}
      </label>
      <input
        ref={ref}
        className="form__input"
        id={name}
        name={name}
        onChange={(e) => {
          if (validate) return validate(e);
          if (e.target.value.length === 0) return hiddenError();
          if (rest.type === "email") {
            if (
              // eslint-disable-next-line no-useless-escape
              !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(
                (e.target as HTMLInputElement).value
              )
            ) {
              viewError();
            } else hiddenError();
          }
        }}
        {...rest}
      />
      {errorText && (
        <p ref={spanRef} className="form__error form__error-hidden">
          {errorText}
        </p>
      )}
    </div>
  );
}
