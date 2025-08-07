import Button from "./button";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <section className="sticky top-0 h-[63px] w-full flex items-center justify-between border-b-2 border-gray-300 px-4 md:px-6 backdrop-blur-lg capitalize z-20">
      <header className="w-full flex flex-row justify-between items-center">
        <div>
          <img src={logo} className="w-[120px] h-auto" />
        </div>
        <div className="hidden min-[560px]:block flex-1">
          <ul className="flex justify-center items-center gap-6 lg:gap-10 text-lg">
            <li>Gallery</li>
            <li>About us</li>
            <li>donation</li>
            <li>events</li>
          </ul>
        </div>
        <div className="hidden min-[560px]:block">
          <Link to="/Login">
            <Button BtnName="Log In" />
          </Link>
        </div>
      </header>
    </section>
  );
};
export default Navbar;
