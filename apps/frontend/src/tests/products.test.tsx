/* 
Controla la existencia de los productos mediante movimientos como: Facturación, Compras, Entradas, Salidas, Traslados. Proporciona salidas a pantalla e impresora vitales para la toma de decisiones mediante una gama de reportes o informes. El cálculo de las existencias se basa en los movimientos de documentos, lo que permite conocer el inventario a una fecha específica, ignorando movimientos posteriores, además elimina la necesidad de hacer cortes siempre al final de cada mes, los cuales sirven como respaldo para el usuario, ya que este tipo de inventario no puede reflejar el estado de un inventario a una fecha pasada.
*/
import { render } from "@testing-library/react";
import { ProductsPage } from "modules/products/products.page";

test("Products Table", async () => {
  const dom = render(<ProductsPage />);
  expect(dom.container.getElementsByClassName("loading").length !== 0).toBe(true);
});
