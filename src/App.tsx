import Option from "./components/Option"
import {Question} from "./types"
import QuestionComp from "./components/Question"
// Multiple questions

const questions: Question[] = [
  {
    question: "What is the capital of France?",
    options: ["New York", "London", "Paris", "Dublin"],
    answer: ["Paris", "New York"]
  },
  {
    question: "Who is CEO of Tesla?",
    options: ["Elon Musk", "Jeff Bezos", "Bill Gates", "Tony Stark"],
    answer: ["Elon Musk"]
  },
  {
    question: "The iPhone was created by which company?",
    options: ["Apple", "Intel", "Amazon", "Microsoft"],
    answer: ["Apple"]
  },
  {
    question: "How many Harry Potter books are there?",
    options: ["1", "4", "6", "7"],
    answer: ["7"]
  }
]

const getLatestQuestion = (questions: Question[]): Question => {
  return questions[questions.length - 1]
} 

function App() {
  return (
    <>
      <div className="h-screen w-screen bg-black">
        <QuestionComp qn={getLatestQuestion(questions).question} options={getLatestQuestion(questions).options}/>
      </div>
    </>
  )
}

export default App