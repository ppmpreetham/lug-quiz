import { useMemo } from "react";
import { Question } from "../types";

const QuestionCard = ({ question }: { question: Question }) => {
  const daysAgo = useMemo(() => {
    return Math.floor(
      (new Date().getTime() - new Date(question.date).getTime()) /
        (1000 * 60 * 60 * 24)
    );
  }, [question.date]);

  return (
    <div className="text-white border border-white p-4 sm:p-6 lg:p-8 w-full lg:w-[30vw] flex flex-col gap-4">
      <div className="flex flex-row justify-between uppercase w-full">
        <p className="text-lg sm:text-xl lg:text-2xl">{daysAgo} days ago</p>
        <p
          className={`text-lg sm:text-xl lg:text-2xl ${(() => {
            switch (question.difficulty?.toLowerCase()) {
              case "easy":
                return "text-better-green";
              case "medium":
                return "text-yellow-500";
              case "hard":
                return "text-red-500";
              default:
                return "";
            }
          })()}`}
        >
          {question.difficulty}
        </p>
      </div>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl">{question.question}</h2>
      <ul>
        {question.options.map((option, index) => (
          <li
            key={index}
            className={`border border-white p-2 my-2 sm:my-3 lg:my-4 ${question.answer != null && question.answer - 1 === index ? "bg-better-green text-black" : ""}`}
          >
            {option}
          </li>
        ))}
      </ul>
      <p className="text-lg sm:text-xl">{question.explanation}</p>
    </div>
  );
};

export default QuestionCard;
