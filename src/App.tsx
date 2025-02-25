import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Question } from "./types";
import QuestionComp from "./components/Question";
import Nav from "./components/Nav";
import QuestionCard from "./components/QuestionCard";

// Multiple questions
const questions: Question[] = [
  {
    question: "What is the capital of France?",
    options: ["New York", "London", "Paris", "Dublin"],
    answer: 1,
    date: "2025-01-01",
    explanation: "Paris is the capital of France",
    difficulty: "easy",
  },
  {
    question: "Who is CEO of Tesla?",
    options: ["Elon Musk", "Jeff Bezos", "Bill Gates", "Tony Stark"],
    answer: 1,
    date: "2025-01-01",
    explanation: "Elon Musk is the CEO of Tesla",
    difficulty: "easy",
  },
  {
    question: "The iPhone was created by which company?",
    options: ["Apple", "Intel", "Amazon", "Microsoft"],
    answer: 1,
    date: "2025-01-01",
    explanation: "The iPhone was created by Apple",
    difficulty: "easy",
  },
  {
    question: "How many Harry Potter books are there?",
    options: ["1", "4", "6", "7"],
    answer: 4,
    date: "2025-01-01",
    explanation: "There are 7 Harry Potter books",
    difficulty: "easy",
  },
];

const getLatestQuestion = (questions: Question[]): Question => {
  return questions[questions.length - 1];
};

function App() {
  return (
    <Router>
      <div className="h-screen w-screen bg-black">
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <QuestionComp
                qn={getLatestQuestion(questions).question}
                options={getLatestQuestion(questions).options}
                date={getLatestQuestion(questions).date}
              />
            }
          />
          <Route
            path="/questions"
            element={<QuestionCard question={questions[0]} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
