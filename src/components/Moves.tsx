interface Move {
  name: string;
  power: number; // Optional property
  accuracy: number; // Optional property
  type: string;
  pp: number;
  class: string;
  damage_class: string; // Optional property
}

// Define the MovesProps interface
interface MovesProps {
  moves: Move[];
}
export default function Moves({ moves }: MovesProps) {
  return (
    <>
      <table className="min-w-full bg-gray-700 text-white rounded-md shadow-md ">
        <thead>
          <tr className="border border-gray-600 bg-gray-800 text-purple-400 rounded-md">
            <th className="px-4 py-2 text-left">Move Name</th>
            <th className="px-4 py-2 text-left">Power</th>
            <th className="px-4 py-2 text-left">Accuracy</th>
            <th className="px-4 py-2 text-left">PP</th>
            <th className="px-4 py-2 text-left">Type</th>
            <th className="px-4 py-2 text-left">Class</th>
          </tr>
        </thead>
        <tbody>
          {moves.length > 0 ? (
            moves.map((move, index) => (
              <tr
                key={index}
                className="border border-gray-600 hover:bg-gray-600 transition"
              >
                <td className="px-4 py-2 capitalize">{move.name}</td>
                <td className="px-4 py-2">{move.power}</td>
                <td className="px-4 py-2">{move.accuracy}</td>
                <td className="px-4 py-2">{move.pp}</td>
                <td className="px-4 py-2 capitalize">{move.type}</td>
                <td className="px-4 py-2 capitalize">{move.damage_class}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="px-4 py-2 text-center text-gray-400">
                No top moves available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}
