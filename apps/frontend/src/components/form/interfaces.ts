import {
  ChangeEvent,
  FormHTMLAttributes,
  InputHTMLAttributes,
  LegacyRef,
} from "react";

export interface FormBasicProps {
  children: JSX.Element | JSX.Element[];
}

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: JSX.Element | JSX.Element[];
}

export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  validate?: (e: ChangeEvent<HTMLInputElement>) => void;
  errorText?: string;
  ref?: LegacyRef<HTMLInputElement>;
}
