import { FormEvent } from "react";

export const AddProductComponent = () => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <div className="bg-white rounded">
      <form onSubmit={handleSubmit}>
        <div className="p-1">
          <label htmlFor="product">Product</label>
          <input type="text" name="product" />
        </div>
        <div className="p-1">
          <label htmlFor="format">Format</label>
          <input type="text" name="format" />
        </div>
        <div className="p-1">
          <label htmlFor="category">Category</label>
          <input type="text" name="category" />
        </div>
        <div className="p-1">
          <label htmlFor="subcategory">Subcategory</label>
          <input type="text" name="subcategory" />
        </div>
        <div className="p-1">
          <label htmlFor="mark">Mark</label>
          <input type="text" name="mark" />
        </div>
        <div className="p-1">
          <label htmlFor="price">Price</label>
          <input type="text" name="price" />
        </div>
        <div className="p-1">
          <label htmlFor="stock">Stock</label>
          <input type="text" name="stock" />
        </div>
        <button type="submit">Add Product</button>
      </form>
      <div>
        <button onClick={(e) => e.preventDefault()}>Download Template</button>
        <button type="button">From Excel</button>
      </div>
    </div>
  );
};
