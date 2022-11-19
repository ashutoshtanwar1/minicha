import { FC, useMemo, useState } from "react";
import Button from "../../components/atoms/Button";
import Input from "../../components/atoms/Input";

type BucketProps = {
  queue: string[];
  answerNumber: number;
};

const maxGuessesAllowed = 10;

const Bucket: FC<BucketProps> = ({ queue, answerNumber }) => {
  const finalQueue = [
    ...queue,
    ...Array(maxGuessesAllowed - queue.length),
  ].reverse();

  return (
    <div className="w-1/3 flex flex-col items-center justify-center text-center border-2 rounded-md overflow-hidden">
      {finalQueue.map((value = "", index) => (
        <div
          key={`${value}-${index}`}
          className={`flex select-none items-center justify-center w-full mt-0.5 h-8 text-white text-lg font-semibold ${
            !!value ? "bg-gradient-to-tr" : ""
          } ${
            Number(value) === answerNumber
              ? "from-green-600 via-green-500 to-green-300"
              : "from-blue-500 via-purple-500 to-pink-500"
          }`}
        >
          {value}
          {Number(value) !== answerNumber && (
            <i
              className={`fas ml-4 ${
                Number(value) - answerNumber < 0
                  ? "fa-arrow-up"
                  : "fa-arrow-down"
              }`}
            ></i>
          )}
        </div>
      ))}
    </div>
  );
};

const GuessTheNumber: FC = () => {
  const [number, setNumber] = useState("");
  const [disableGuess, setDisableGuess] = useState(false);
  const [queue, setQueue] = useState<string[]>([]);
  const [resetKey, setResetKey] = useState(0);

  const answerNumber = useMemo(
    () => Math.floor(Math.random() * 101),
    [resetKey]
  );

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target ?? 0;
    if (0 <= Number(value) && Number(value) <= 100) {
      setNumber(value);
    }
  };

  const guessNumber = () => {
    if (
      queue.length === maxGuessesAllowed - 1 ||
      Number(number) === answerNumber
    ) {
      setDisableGuess(true);
    }
    setQueue(prevQ => [...prevQ, number]);
    setNumber("");
  };

  const resetGame = () => {
    setDisableGuess(false);
    setResetKey(prev => prev + 1);
    setQueue([]);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-16">
      <div className="mb-4 font-semibold text-xl px-6 text-center">
        Guess a number between 0 to 100
      </div>
      <Input value={number} onChange={handleNumberChange} type="number" />
      <div className="my-4">
        <Button
          onClick={guessNumber}
          text="Guess"
          className="px-4 mx-2"
          disabled={disableGuess}
        />
        <Button onClick={resetGame} text="Reset" className="px-4 mx-2" />
      </div>
      <Bucket queue={queue} answerNumber={answerNumber} />
    </div>
  );
};

export default GuessTheNumber;
