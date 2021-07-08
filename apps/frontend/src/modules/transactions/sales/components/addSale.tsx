import { ChangeEvent, FormEvent, useState } from "react";
import { transactionsService as service } from "modules/transactions/services/transactions.service";

export const AddSaleComponent = () => {
  const [client, setClient] = useState("");

  const handleSubmit = (e: FormEvent) => {
    const data = {
      client,
    };
    e.preventDefault();

    service.insert(data, "sales").then(console.log);
  };

  const setters: any = {
    CLIENT: setClient,
  };

  const handleChangeField = (e: ChangeEvent<HTMLInputElement>) => {
    setters[e.target.id](e.target.value.toLocaleUpperCase());
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChangeField} type="text" name="product" />
        <input onChange={handleChangeField} type="text" name="client" />
        <input onChange={handleChangeField} type="number" name="amount" />
        <input onChange={handleChangeField} type="number" name="cost" />
        <button type="submit"></button>
      </form>
    </div>
  );
};
