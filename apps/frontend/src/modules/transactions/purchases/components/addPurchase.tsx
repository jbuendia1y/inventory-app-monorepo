import { FormEvent } from "react";

export const AddPurchaseComponent = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="product" />
        <input type="text" name="provider" />
        <input type="number" name="amount" />
        <input type="number" name="cost" />
        <input type="date" name="date" />
        <button type="submit"></button>
      </form>
    </div>
  );
};
