import { Question } from "../types";

const QuestionCard = ({ question }: { question: Question }) => {
  return (
    <div className=''>
      <h2>{question.question}</h2>
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
