import { FC } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<InputProps> = ({ value, onChange, className, ...rest }) => (
    <input
        value={value}
        onChange={onChange}
        className={`text-center border-2 rounded-md focus:outline-purple-400 text-lg font-semibold ${className}`}
        {...rest}
    />
);

export default Input;
