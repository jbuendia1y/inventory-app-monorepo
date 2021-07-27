import { FormEvent } from "react";

const AddProductComponent = () => {
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
        <a
          href={"http://localhost:4000/static/products-template.xlsx"}
          download="Products Template.xlsx"
        >
          Download Template
        </a>
        <button type="button">From Excel</button>
      </div>
    </div>
  );
};

export default AddProductComponent;
