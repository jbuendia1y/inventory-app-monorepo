import "./home.scss";
import Main from "./components/main/main";
import UIComponents from "./components/ui-components/uiComponents";
import Seo from "src/components/seo/seo";

export default function Home() {
  return (
    <>
      <Seo>
        <title>Home | Inventory App</title>
        <meta
          name="description"
          content="Web creada para la administración básica de su inventario"
        />
      </Seo>
      <main className="home">
        <Main />
        <UIComponents />
      </main>
    </>
  );
}
