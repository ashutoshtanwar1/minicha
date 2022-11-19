import { FC, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { miniChallenges } from "../sections/Home";
import { AppTypeContext } from "./MainWrapper";

const Header: FC = () => {
  const { appType, toggleAppType } = useContext(AppTypeContext);
  const { pathname } = useLocation();
  const { name: title } = miniChallenges.filter(
    ({ route }) => pathname === route
  )?.[0] ?? { name: "Mini Challenges" };

  return (
    <div className="bg-gradient-to-tr w-full from-blue-500 via-purple-500 to-pink-500 px-6 py-3 flex items-center justify-between font-semibold text-xl shadow-lg shadow-blue-300">
      <Link to="/">
        <i className="fas fa-home text-3xl text-white cursor-pointer" />
      </Link>
      <div className="select-none text-2xl text-white text-center">{title}</div>
      <a href="https://github.com/ashutoshtanwar1/minicha">
        <i className="fab fa-github text-3xl text-white cursor-pointer" />
      </a>
    </div>
  );
};

export default Header;
