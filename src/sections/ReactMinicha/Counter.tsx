import { FC, useState } from "react";
import Button from "../../components/atoms/Button";

const Counter: FC = () => {
    const [count, setCount] = useState(0);
    return (
        <div className="flex flex-col items-center justify-center mt-14">
            <div className="text-3xl">{count}</div>
            <div className="my-6">
                <Button text="Dec Counter" onClick={() => setCount(p => p - 1)} className="mr-2 px-3" />
                <Button text="Inc Counter" onClick={() => setCount(p => p + 1)} className="ml-2 px-3" />
            </div>
        </div>
    );
};

export default Counter;
