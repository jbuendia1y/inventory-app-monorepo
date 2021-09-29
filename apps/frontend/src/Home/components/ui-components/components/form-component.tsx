import Form, { FormInput } from "src/components/Form";
import ReplyLink from "src/components/ReplyLink";

export default function FormComponent() {
  return (
    <section>
      <h3 id="form-component">
        Form Component <ReplyLink link="#form-component" />
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
