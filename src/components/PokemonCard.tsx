import Link from "next/link";
import Types from "./Types";

interface PokemonCardProps {
  id: number;
  name: string;
  imageUrl: string;
  type: { type: { name: string } }[];
}

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
