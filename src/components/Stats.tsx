interface statsProps {
  statName: string;
  baseStat: number;
}
export default function Stats({ statName, baseStat }: statsProps) {
  return (
    <div className="inline-flex items-center w-fit bg-gray-800 px-2 py-1 rounded-md shadow-md border border-green-800">
      <span className={`capitalize  text-xl text-gray-400}`}>{statName}:</span>
      <span className="font-semibold text-xl ml-1">{baseStat}</span>
    </div>
  );
}
