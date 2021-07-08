import { useState } from "react";
import { AddProductComponent } from "./addProduct";

export const ActionsProduct = () => {
  const [action, setAction] = useState("");

  const actions: any = {
    ADD: () => <AddProductComponent />,
  };

  const handleaActions = () => {
    if (!actions[action]) return;
    return actions[action]();
  };

  return (
    <>
      <div>
        <button
          type="button"
          className="bg-green-600 text-xl px-2 py-1 rounded-sm"
          onClick={() => setAction("ADD")}
        >
          <span className="font-bold text-white">+</span> Product
        </button>
      </div>
      {action.length !== 0 && (
        <div className="absolute flex items-center justify-center t-0 r-0 w-full h-full bg-gray-700">
          <button
            className="absolute top-4 right-4"
            onClick={() => setAction("")}
          >
            X
          </button>
          {handleaActions()}
        </div>
      )}
    </>
  );
};
