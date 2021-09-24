import "./card.scss";

import { cloneElement } from "react";
import type {
  CardProps,
  CardBasicProps,
  CardImageProps,
  CardBasicPropsAttributes,
} from "./interfaces";

export default function Card({ children, ...rest }: CardProps) {
  return (
    <div className="card" {...rest}>
      {children}
    </div>
  );
}

export function CardImage({ image, alt, ...rest }: CardImageProps) {
  return <img className="card__image" src={image} alt={alt} {...rest} />;
}

export function CardText({ children, ...rest }: CardBasicPropsAttributes) {
  return (
    <div className="card__text" {...rest}>
      {children}
    </div>
  );
}

export function CardTitle(props: CardBasicProps) {
  const title = props.children as JSX.Element;
  const Title = cloneElement(title, { className: "card__title" });
  return <>{Title}</>;
}
