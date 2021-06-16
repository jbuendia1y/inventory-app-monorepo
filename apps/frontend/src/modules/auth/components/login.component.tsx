import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { authService } from "modules/auth/services/auth.service";
import { AuthContext } from "context/auth.context";

export const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [session, setSession] = useState(false);
  const { setUser } = useContext(AuthContext);

  const handleValues = (e: ChangeEvent<HTMLInputElement>) => {
    const fields: any = {
      email: setEmail,
      password: setPassword,
      session: setSession,
    };
    const id = e.target.id;
    const value = e.target.value;
    if (!fields[id]) return;

    fields[id](value);
  };

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      email,
      password,
    };

    const res = await authService.login(data);
    if (res) {
      if (session) localStorage.setItem("token", res.token);
      setUser(res);
    }
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
          type="text"
          name="email"
          id="email"
          className={inputStyles}
          onChange={handleValues}
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
          onChange={handleValues}
        />
      </div>
      <div className="flex flex-row-reverse">
        <label htmlFor="session">Save Sessión?</label>
        <input
          type="checkbox"
          name="session"
          id="session"
          onChange={handleValues}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-700 font-bold text-white rounded-md py-1 mt-3.5 w-full focus:ring"
      >
        Iniciar Sessión
      </button>
    </form>
  );
};
