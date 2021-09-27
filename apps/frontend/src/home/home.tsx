import { Helmet } from "react-helmet";
import "./home.scss";
import Main from "./components/main/main";
import UIComponents from "./components/ui-components/uiComponents";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home | Inventory App</title>
        <meta
          name="description"
          content="Web creada para la administración básica de su inventario"
        />
      </Helmet>
      <main className="home">
        <Main />
        <UIComponents />
      </main>
    </>
  );
}
