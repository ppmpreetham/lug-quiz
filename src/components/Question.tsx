import Option from "./Option"

const QuestionComp = ({qn, options}:{qn: string, options: string[]}) => {
  return (
    <div className="flex flex-col gap-10 p-10">
        <div className="text-white text-4xl text-center">{qn}</div>
        <div className="flex flex-col gap-4">
            {options.map((option, index) => (
            <div key={index} >
                <Option option={option} no={index+1}/>
            </div>
            ))}
        </div>
    </div>
  )
}

export default QuestionComp