const Option = ({option, no}:{option: string, no:number}) => {
  return (
    <div className="flex flex-row text-white text-4xl items-center gap-4 w-full px-6 group">
      <div className="border-white border h-16 flex items-center py-2 px-4 group-hover:bg-white group-hover:text-black">
        {String.fromCharCode(no + 64)}
      </div>
      <div className='border-white border h-16 w-full text-center flex items-center justify-center hover:bg-green-600 hover:text-black hover:border-none flex-row p-2 cursor-pointer'>
        {option}
      </div>
    </div>
  )
}

export default Option;