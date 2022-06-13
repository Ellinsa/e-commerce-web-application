import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./navigation.scss";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to={"/"}>
          <div>
            <Logo />
          </div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to={"/shop"}>
            SHOP
          </Link>
          <Link className="nav-link" to={"/sign-in"}>
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
