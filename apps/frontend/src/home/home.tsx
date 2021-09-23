import Card, { CardImage, CardText, CardTitle } from "../components/card/Card";

export default function Home() {
  return (
    <main>
      <div className="main">
        <div className="container">
          <h1>Inventory App</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
            facere veniam veritatis nam, quibusdam officia hic ad id nihil vero
            tempora. Facilis rerum, cumque recusandae nihil similique voluptas
            sapiente. Assumenda.
          </p>
          <Card>
            <CardImage
              image="https://i.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ"
              alt="My First Card"
            />
            <CardText>
              <CardTitle>
                <h2>My First Card</h2>
              </CardTitle>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                earum recusandae, deleniti saepe doloremque cum libero hic
                temporibus maiores cumque eveniet vitae nisi possimus rem
                explicabo, eius suscipit inventore perferendis!
              </p>
            </CardText>
          </Card>
        </div>
      </div>
      <section></section>
    </main>
  );
}
