import { User } from "../types";

const Leaderboard = () => {
  const leaderboardData: User[] = [
    {
      rank: 1,
      username: "user1",
      points: 100,
      name: "",
      regNo: "",
    },
    {
      rank: 2,
      username: "user2",
      points: 90,
      name: "",
      regNo: "",
    },
    {
      rank: 3,
      username: "user3",
      points: 80,
      name: "",
      regNo: "",
    },
  ];

  return (
    <div className="text-white p-4 sm:px-8 lg:px-32">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4 text-white md:text-better-green">
        LEADERBOARD
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-black">
          <thead>
            <tr className="border-y text-black bg-better-green">
              <th className="py-2 px-4 border-white">#</th>
              <th className="py-2 px-4 border-white">USERNAME</th>
              <th className="py-2 px-4 border-white">POINTS</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((entry) => (
              <tr key={entry.rank}>
                <td className="py-2 px-4 border-b border-white text-center">
                  {entry.rank}
                </td>
                <td className="py-2 px-4 border-b border-white text-center">
                  {entry.username}
                </td>
                <td className="py-2 px-4 border-b border-white text-center">
                  {entry.points}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
