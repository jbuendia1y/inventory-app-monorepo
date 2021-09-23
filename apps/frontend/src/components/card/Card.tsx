import { cloneElement } from "react";
import "./card.scss";
import type { CardBasicProps, CardImageProps } from "./interfaces";

export default function Card(props: CardBasicProps) {
  return <div className="card">{props.children}</div>;
}

export function CardImage({ image, alt }: CardImageProps) {
  return <img className="card__image" src={image} alt={alt} />;
}

export function CardText(props: CardBasicProps) {
  return <div className="card__text">{props.children}</div>;
}

export function CardTitle(props: CardBasicProps) {
  const title = props.children as JSX.Element;
  const Title = cloneElement(title, { className: "card__title" });
  return <>{Title}</>;
}
