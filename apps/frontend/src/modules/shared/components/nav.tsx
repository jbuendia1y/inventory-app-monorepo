import { AuthContext } from "context/auth.context";
import { toogleNav } from "modules/shared/helpers";
import { useContext } from "react";
import { Link } from "react-router-dom";

const WithLogin = () => {
  return (
    <>
      <li>
        <Link to="/dashboard" onClick={() => toogleNav()}>
          DashBoard
        </Link>
      </li>
      <li>
        <Link to="/products" onClick={() => toogleNav()}>
          Products
        </Link>
      </li>
      <li>
        <Link to="/transactions" onClick={() => toogleNav()}>
          Transactions
        </Link>
      </li>
      <li>
        <Link to="/transactions/purchases" onClick={() => toogleNav()}>
          Purchases
        </Link>
      </li>
      <li>
        <Link to="/transactions/sales" onClick={() => toogleNav()}>
          Sales
        </Link>
      </li>
    </>
  );
};

const WithOutLogin = () => {
  return (
    <li>
      <Link to="/login" onClick={() => toogleNav()}>
        Login
      </Link>
    </li>
  );
};

export const NavComponent = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="bg-blue-800 h-full">
      <div className="flex items-center bg-white md:flex-col-reverse">
        <p className="w-3/4 pl-2 md:w-auto md:pr-2">Joaquín Buendía</p>
        <img
          src="https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg"
          alt="profile"
          className="rounded-full h-12 w-auto md:h-20"
        />
      </div>
      <ul className="text-center">{user ? <WithLogin /> : <WithOutLogin />}</ul>
    </div>
  );
};
