const Nav = () => {
  return (
    <div className="flex flex-row justify-between items-center py-8 px-16 bg-black w-screen">
        <div className="text-white text-2xl">LugQuiz</div>
        <div className="flex flex-row gap-8 uppercase">
            <div className="text-white text-lg">Leaderboard</div>
            <div className="text-white text-lg">Questions</div>
            <div className="text-white text-lg">Profile</div>
        </div>
    </div>
  )
}

export default Nav