import Option from "./Option";
import { useState, useMemo, useCallback } from "react";

const QuestionComp = ({
  qn,
  options,
  date,
}: {
  qn: string;
  options: string[];
  date: string;
}) => {
  const [selected, setSelected] = useState<number | null>(null);

  const daysAgo = useMemo(() => {
    return Math.floor(
      (new Date().getTime() - new Date(date).getTime()) / (1000 * 60 * 60)
    );
  }, [date]);

  const handleOptionClick = useCallback((index: number) => {
    setSelected(index);
  }, []);

  return (
    <div className="flex flex-col gap-10 p-10 text-white w-full">
      <div className="text-4xl text-center">{daysAgo} hours ago</div>
      <div className="text-4xl text-center">{qn}</div>
      <div className="flex flex-col gap-4">
        {options.map((option, index) => (
          <div key={index} onClick={() => handleOptionClick(index)}>
            <Option
              option={option}
              no={index + 1}
              isSelected={selected === index}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionComp;
