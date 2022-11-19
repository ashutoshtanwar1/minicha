import { FC } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button: FC<ButtonProps> = ({ text, onClick, className, ...rest }) => (
  <button
    className={` p-2 font-semibold text-md text-white shadow-md rounded-md select-none ${className} ${
      rest.disabled
        ? "bg-gray-400/70"
        : "bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 shadow-blue-300 active:scale-[.98]"
    }`}
    onClick={rest.disabled ? () => {} : onClick}
    {...rest}
  >
    {text}
  </button>
);

export default Button;
