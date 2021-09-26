import Form, { FormInput } from "src/components/form/Form";
import LinkToSameTitle from "src/components/link-to-same-title/link-to-same-title";

export default function FormComponent() {
  return (
    <section>
      <h3 id="form-component">
        Form Component <LinkToSameTitle link="#form-component" />
      </h3>
      <Form>
        <FormInput
          label="Email"
          name="email"
          type="email"
          placeholder="enter your email"
          autoComplete="off"
          errorText="incorrect email"
        />
        <FormInput
          label="Password"
          name="password"
          type="password"
          placeholder="enter your password"
        />
      </Form>
    </section>
  );
}
