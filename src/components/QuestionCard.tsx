import { Question } from "../types";

const QuestionCard = ({ question }: { question: Question }) => {
  return (
    <div className="text-white border border-white p-8 m-8 w-[30vw] flex flex-col gap-4">
      <div className="flex flex-row justify-between uppercase">
        <p className="text-2xl">{question.date}</p>
        <p
          className={`text-2xl ${(() => {
            switch (question.difficulty?.toLowerCase()) {
              case "easy":
                return "text-green-500";
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
      <h2 className="text-4xl">{question.question}</h2>
      <ul>
        {question.options.map((option, index) => (
          <div>
            <li
              key={index}
              className={`border border-white p-2 my-4 ${question.answer !== undefined && question.answer + 1 === index ? "bg-green-600 text-black" : ""}`}
            >
              {option}
            </li>
          </div>
        ))}
      </ul>
      <p className="text-xl">{question.explanation}</p>
    </div>
  );
};

export default QuestionCard;
