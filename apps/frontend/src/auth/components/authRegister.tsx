import Button from "src/components/button/Button";
import Form, { FormInput } from "src/components/form/Form";
import Seo from "src/components/seo/seo";

export default function AuthRegister() {
  return (
    <>
      <Seo>
        <title>Register | Inventory App</title>
      </Seo>
      <Form
        validate={(data) => {
          console.log(data);
        }}
      >
        <FormInput
          type="text"
          label="Name"
          name="name"
          placeholder="Nombre completo"
        />
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
        <Button type="submit">Registrarse</Button>
      </Form>
    </>
  );
}
