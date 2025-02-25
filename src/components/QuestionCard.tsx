import { Question } from '../types';

const QuestionCard = ({ question }: { question: Question }) => {
  return (
    <div className=''>
      <h2>{question.question}</h2>
      <ul>
        {question.options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>
      <p>Answer: {question.answer.join(', ')}</p>
      <p>Date: {question.date}</p>
    </div>
  );
};

export default QuestionCard;