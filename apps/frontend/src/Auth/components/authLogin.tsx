import Button from "src/components/Button";
import Form, { FormInput } from "src/components/Form";
import Seo from "src/components/Seo";

export default function AuthLogin() {
  return (
    <>
      <Seo>
        <title>Login | Inventory App</title>
      </Seo>
      <Form
        validate={(data) => {
          console.log(data.email);
          console.log(data.password);
        }}
      >
        <FormInput
          autoComplete="off"
          type="email"
          label="Email"
          name="email"
          placeholder="correo electrónico"
        ></FormInput>
        <FormInput
          autoComplete="off"
          type="password"
          label="Password"
          name="password"
          placeholder="contraseña"
        ></FormInput>
        <Button type="submit">Iniciar Sessión</Button>
      </Form>
    </>
  );
}
