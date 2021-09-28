import { AllHTMLAttributes, ImgHTMLAttributes } from "react";

export interface CardBasicProps {
  children: JSX.Element | JSX.Element[];
}

export interface CardBasicPropsAttributes
  extends AllHTMLAttributes<HTMLDivElement> {
  children: JSX.Element | JSX.Element[];
}

export interface CardProps extends AllHTMLAttributes<HTMLDivElement> {
  children: JSX.Element | JSX.Element[];
}

export interface CardImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  image: string;
  alt: string;
}
