import { Link } from "react-router-dom";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black p-4 w-full overflow-x-hidden">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        <Link to="/" className="text-white text-4xl md:text-2xl">
          LUGQUIZ
        </Link>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`flex-col md:flex md:flex-row gap-8 uppercase ${isOpen ? "flex" : "hidden"}`}
        >
          <Link
            to="/leaderboard"
            className="text-white text-lg hover:text-better-green"
          >
            Leaderboard
          </Link>
          <Link
            to="/questions"
            className="text-white text-lg hover:text-better-green"
          >
            Questions
          </Link>
          <Link
            to="/profile"
            className="text-white text-lg hover:text-better-green"
          >
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
