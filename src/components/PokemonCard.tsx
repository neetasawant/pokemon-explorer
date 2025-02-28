import Link from "next/link";
import Types from "./Types";

interface PokemonCardProps {
  id: number;
  name: string;
  imageUrl: string;
  type: { type: { name: string } }[];
}

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

const getRandomPastelColor = () => {
  const pastelColors = [
    "bg-pink-100",
    "bg-blue-100",
    "bg-green-100",
    "bg-yellow-100",
    "bg-purple-100",
    "bg-indigo-100",
    "bg-teal-100",
    "bg-rose-100",
    "bg-amber-100",
    "bg-lime-100",
    "bg-cyan-100",
    "bg-orange-100",
  ];
  const randomIndex = Math.floor(Math.random() * pastelColors.length);
  return pastelColors[randomIndex] + " border border-gray-300 shadow-md";
};

export default function PokemonCard({
  id,
  name,
  imageUrl,
  type,
}: PokemonCardProps) {
  const randomColor = getRandomPastelColor();

  return (
    <Link
      href={{ pathname: `/pokemon/${id}`, query: { color: randomColor } }}
      className={`w-[350px] h-[380px] ${randomColor} shadow-3xl border border-gray-200 flex flex-col items-center justify-center p-4`}
    >
      <div className="w-72 h-72 flex justify-center items-center">
        <img
          className="w-full h-full object-contain drop-shadow-md relative mb-2"
          src={imageUrl}
          alt={name}
        />
      </div>

      <h3 className="text-gray-800 text-lg font-medium mt-3">{`#${id}`}</h3>
      <h5 className="text-3xl font-bold text-gray-700 capitalize">{name}</h5>

      <div className="flex gap-3 mt-4">
        {type.map((type, index) => (
          <Types key={index} typeName={type.type.name} />
        ))}
      </div>
    </Link>
  );
}
