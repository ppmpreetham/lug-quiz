import { Question } from "../types";
import QuestionCard from "./QuestionCard";

const QuestionGrid = ({ questions }: { questions: Question[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 lg:gap-y-12 md:gap-x-4 p-4 w-screen h-fit overflow-x-hidden">
      {questions.map((question, index) => (
        <QuestionCard key={index} question={question} />
      ))}
    </div>
  );
};

export default QuestionGrid;
