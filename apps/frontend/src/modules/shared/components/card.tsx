interface propsCard {
  children: any;
}

const Card = ({ children }: propsCard) => {
  return <div className="borderless">{children}</div>;
};

export default Card;
