import { FormEvent, useContext, createRef } from "react";
import { authService } from "modules/auth/services/auth.service";
import { AuthContext } from "context/auth.context";
import { useHistory } from "react-router-dom";

const LoginComponent = () => {
  const session = createRef<HTMLInputElement>();
  const email = createRef<HTMLInputElement>();
  const password = createRef<HTMLInputElement>();

  const { setUser } = useContext(AuthContext);
  const history = useHistory();

  const handleErrors = (err: boolean, message?: string) => {
    if (err && email.current?.classList.contains("text-red-700")) return;
    if (!err && !email.current?.classList.contains("text-red-700")) return;

    email.current?.classList.toggle("text-red-700");
    email.current?.classList.toggle("border-red-700");
    password.current?.classList.toggle("text-red-700");
    password.current?.classList.toggle("border-red-700");

    if (!message) return;
  };

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const inputs = {
      email: (email.current as HTMLInputElement).value,
      password: (password.current as HTMLInputElement).value,
      session: (session.current as HTMLInputElement).checked,
    };

    if (inputs.email.length === 0 || inputs.password.length === 0) {
      handleErrors(true);
      return;
    }

    authService
      .login({ email: inputs.email, password: inputs.password })
      .then((res) => {
        if (inputs.session) localStorage.setItem("token", res.token);
        setUser(res);
        history.push("/dashboard");
        handleErrors(false);
      })
      .catch((err) => {
        handleErrors(true, err.message);
      });
  };

  const inputStyles =
    "border border-gray-700 rounded-md shadow bg-white pl-2 py-1 focus:ring";
  const formFieldStyles = "flex flex-col mb-2";
  const labelStyles = "font-bold text-gray-700";

  return (
    <form
      id="LoginForm"
      onSubmit={submit}
      className="w-80 mx-auto rounded bg-white p-3"
    >
      <div className={formFieldStyles}>
        <label htmlFor="email" className={labelStyles}>
          Email
        </label>
        <input
          type={"email"}
          name="email"
          id="email"
          className={inputStyles}
          ref={email}
        />
      </div>
      <div className={formFieldStyles}>
        <label htmlFor="password" className={labelStyles}>
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className={inputStyles}
          ref={password}
        />
      </div>
      <div className="flex flex-row-reverse">
        <label htmlFor="session">Save Sessión?</label>
        <input type="checkbox" ref={session} name="session" id="session" />
      </div>
      <button
        type="submit"
        className="bg-blue-700 font-bold text-white rounded-md py-1 mt-3.5 w-full focus:ring"
      >
        Iniciar Sessión
      </button>
      <span id="error" className="text-red-700 font-bold"></span>
    </form>
  );
};

export default LoginComponent;
