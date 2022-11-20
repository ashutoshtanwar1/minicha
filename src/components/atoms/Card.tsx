import { FC } from "react";

type CardProps = {
    text: string;
};

const Card: FC<CardProps> = ({ text }) => {
    return (
        <div className="bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 shadow-blue-300 text-white flex items-center text-center font-semibold text-xl justify-center rounded shadow-md hover:shadow-xl hover:scale-105 transition-all cursor-pointer duration-300 h-40 w-48">
            {text}
        </div>
    );
};

export default Card;
