interface TypesProps {
  typeName: string;
}
export default function Types({ typeName }: TypesProps) {
  const getTypeColor = (type: string) => {
    const typeColors: { [key: string]: string } = {
      fire: "bg-red-100 text-red-700",
      water: "bg-blue-100 text-blue-700",
      grass: "bg-green-100 text-green-700",
      electric: "bg-yellow-100 text-yellow-700",
      ice: "bg-cyan-100 text-cyan-700",
      fighting: "bg-orange-100 text-orange-700",
      poison: "bg-purple-100 text-purple-700",
      ground: "bg-yellow-200 text-yellow-800",
      flying: "bg-indigo-100 text-indigo-700",
      psychic: "bg-pink-100 text-pink-700",
      bug: "bg-lime-100 text-lime-700",
      rock: "bg-gray-200 text-gray-700",
      ghost: "bg-violet-100 text-violet-700",
      dragon: "bg-indigo-200 text-indigo-800",
      dark: "bg-gray-300 text-gray-800",
      steel: "bg-gray-100 text-gray-600",
      fairy: "bg-pink-200 text-pink-800",
      normal: "bg-gray-50 text-gray-700",
    };

    return typeColors[type] || "bg-gray-100 text-gray-800";
  };
  return (
    <span
      className={`${getTypeColor(
        typeName
      )} px-3 py-1 rounded-md shadow-md font-semibold capitalize`}
    >
      {typeName}
    </span>
  );
}
