import "./button-component.scss";
import Button from "src/components/Button";
import ReplyLink from "src/components/ReplyLink";

export default function ButtonComponent() {
  return (
    <section>
      <h3 id="button-component">
        Button Component <ReplyLink link="#button-component" />
      </h3>
      <div>
        <h4>Botones de ejemplo</h4>
        <Button className="buttons__item">Primary</Button>
        <Button className="buttons__item" styleButton="secondary">
          Secondary
        </Button>
        <Button className="buttons__item" styleButton="danger">
          Danger
        </Button>
        <Button className="buttons__item" styleButton="warning">
          Warning
        </Button>
        <Button className="buttons__item" styleButton="success">
          Success
        </Button>
      </div>
      <div>
        <h4>Botones Deshabilitados</h4>
        <Button className="buttons__item" styleButton="primary" disabled>
          Primary
        </Button>
        <Button className="buttons__item" styleButton="secondary" disabled>
          Secondary
        </Button>
        <Button className="buttons__item" styleButton="danger" disabled>
          Danger
        </Button>
        <Button className="buttons__item" styleButton="warning" disabled>
          Warning
        </Button>
        <Button className="buttons__item" styleButton="success" disabled>
          Success
        </Button>
      </div>
    </section>
  );
}
