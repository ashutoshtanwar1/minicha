import { FC } from "react";
import { Link } from "react-router-dom";
import Card from "../components/atoms/Card";
import Counter from "./ReactMinicha/Counter";
import GuessTheNumber from "./ReactMinicha/GuessTheNumber";

export const miniChallenges = [
  {
    name: "Counter App",
    element: <Counter />,
    route: "/counter",
  },
  {
    name: "Guess The Number",
    element: <GuessTheNumber />,
    route: "/guess-the-number",
  },
];

const Home: FC = () => {
  return (
    <div className="p-6 flex flex-wrap gap-4 justify-around items-center">
      {miniChallenges.map(({ name, route }) => (
        <Link key={route} to={route}>
          <Card text={name} />
        </Link>
      ))}
    </div>
  );
};

export default Home;
