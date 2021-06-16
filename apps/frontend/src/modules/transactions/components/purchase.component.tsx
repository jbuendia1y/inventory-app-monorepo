import { useProducts } from "hooks/useProducts";
import { ChangeEvent, useState } from "react";

export const PurchaseComponent = () => {
  const { products } = useProducts();
  const [selecteds, setSelecteds] = useState([] as any[]);

  const filter = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const data = products.filter((item) => !item.name.includes(value));
    setSelecteds(data);
  };

  return (
    <form>
      <div>
        <label htmlFor="client">Client</label>
        <input type="text" name="client" id="client" />
      </div>
      <div>
        <label htmlFor="product">Product</label>
        <input type="text" name="product" id="product" onChange={filter} />
        <div>
          {selecteds.length !== 0 &&
            selecteds.map((item) => (
              <div>
                <p>{item.name}</p>
                <p>{item.format}</p>
              </div>
            ))}
        </div>
      </div>
      <button>Purchase</button>
    </form>
  );
};
