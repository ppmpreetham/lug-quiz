import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex flex-row justify-between items-center py-8 px-16 bg-black w-screen">
      <div className="text-white text-2xl">LugQuiz</div>
      <div className="flex flex-row gap-8 uppercase">
        <Link to="/leaderboard" className="text-white text-lg">Leaderboard</Link>
        <Link to="/questions" className="text-white text-lg">Questions</Link>
        <Link to="/profile" className="text-white text-lg">Profile</Link>
      </div>
    </div>
  );
}

export default Nav;