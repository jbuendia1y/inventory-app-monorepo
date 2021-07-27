import { AuthContext } from "context/auth.context";
import { toogleNav } from "modules/shared/helpers";
import { useContext } from "react";
import { Link } from "react-router-dom";

import "../styles/nav.css";

const WithLogin = (props: {
  items: {
    href: string;
    text: string;
  }[];
}) => {
  return (
    <>
      {props.items.map((item, index) => (
        <li
          className="font-bold text-lg text-gray-200"
          key={`${index}_itemList`}
        >
          <Link
            to={item.href}
            className="transition py-2 inline-block w-full active:bg-gray-700 bg-opacity-25"
          >
            {item.text}
          </Link>
        </li>
      ))}
    </>
  );
};

const WithOutLogin = () => {
  return (
    <li>
      <Link to="/login">Login</Link>
    </li>
  );
};

export const NavComponent = () => {
  const { user } = useContext(AuthContext);

  const routes: { href: string; text: string }[] = [
    {
      href: "/dashboard",
      text: "DashBoard",
    },
    {
      href: "/products",
      text: "Products",
    },
    {
      href: "/transactions",
      text: "Transactions",
    },
    {
      href: "/transactions/purchases",
      text: "Purchases",
    },
    {
      href: "/transactions/sales",
      text: "Sales",
    },
  ];

  return (
    <nav className="main-nav h-full">
      <p className="w-full h-12 flex items-center justify-center pl-2 md:w-auto md:pr-2 text-xl font-semibold">
        Inventory APP
      </p>
      <ul
        className="text-center mt-4"
        onClick={(e) => {
          if ((e.target as HTMLElement).tagName === "A") toogleNav();
        }}
      >
        {user ? <WithLogin items={routes} /> : <WithOutLogin />}
      </ul>
    </nav>
  );
};
