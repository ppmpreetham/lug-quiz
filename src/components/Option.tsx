const Option = ({
  option,
  no,
  isSelected = false,
}: {
  option: string;
  no: number;
  isSelected?: boolean;
}) => {
  return (
    <div className="flex flex-row text-white text-4xl items-center gap-4 w-full px-6 group">
      <div
        className={`border-white border h-16 flex items-center py-2 px-4 ${isSelected ? "bg-better-green text-black" : "group-hover:bg-white group-hover:text-black"}`}
      >
        {String.fromCharCode(no + 64)}
      </div>
      <div
        className={`border-white border h-16 w-full text-center flex items-center justify-center flex-row p-2 cursor-pointer ${isSelected ? "bg-better-green text-black border-none" : "group-hover:bg-white group-hover:text-black group-hover:border-none cursor-pointer"}`}
      >
        {option}
      </div>
    </div>
  );
};

export default Option;
