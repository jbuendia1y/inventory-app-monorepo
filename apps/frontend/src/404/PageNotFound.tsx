import { Helmet } from "react-helmet";
import "./404.scss";

export default function PageNotFound() {
  return (
    <>
      <Helmet>
        <title>404 Page | Inventory App</title>
        <meta
          name="description"
          content="La página solicitada no se pudo encontrar"
        />
      </Helmet>
      <main className="main-not-found">
        <h1 className="title">Page Not Found</h1>
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          soluta debitis, dolor quod dolores hic aliquid in obcaecati quia!
          Possimus labore aut nihil. Non, dicta repudiandae. Non hic maiores
          enim!
        </p>
      </main>
    </>
  );
}
