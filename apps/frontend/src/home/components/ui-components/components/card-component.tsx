import Card, { CardImage, CardText, CardTitle } from "src/components/card/Card";
import LinkToSameTitle from "src/components/link-to-same-title/link-to-same-title";

export default function CardComponent() {
  return (
    <section>
      <h3 id="card-component">
        Card Component <LinkToSameTitle link="#card-component" />
      </h3>
      <Card>
        <CardImage
          image="https://i.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ"
          alt="My First Card"
        />
        <CardText>
          <CardTitle>
            <h3>My First Card</h3>
          </CardTitle>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error earum
            recusandae, deleniti saepe doloremque cum libero hic temporibus
            maiores cumque eveniet vitae nisi possimus rem explicabo, eius
            suscipit inventore perferendis!
          </p>
        </CardText>
      </Card>
    </section>
  );
}
