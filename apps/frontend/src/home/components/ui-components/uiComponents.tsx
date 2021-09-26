import "./ui-components.scss";

import ButtonComponent from "./components/button-component";
import CardComponent from "./components/card-component";
import FormComponent from "./components/form-component";

export default function UIComponents() {
  return (
    <section className="container uicomponents">
      <h2 id="ui-components">UI Components</h2>
      <CardComponent />
      <FormComponent />
      <ButtonComponent />
    </section>
  );
}
