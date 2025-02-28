interface generalDetailsProps {
  pokemonImageSrc: string;
  pokemonId: number;
  pokemonName: string;
  pokemonWeight: number;
  pokemonHeight: number;
  bgColor: string;
}
export default function GeneralDetails({
  pokemonImageSrc,
  pokemonName,
  pokemonId,
  pokemonWeight,
  pokemonHeight,
  bgColor,
}: generalDetailsProps) {
  return (
    <div className="flex flex-col items-center bg-white p-2 shadow-md w-full h-full">
      <img
        src={pokemonImageSrc}
        alt={pokemonName}
        width={400}
        height={400}
        className="object-contain"
      />
      <p
        className={`${bgColor} text-black text-lg font-semibold px-3 py-1 rounded-full mt-4 shadow-md`}
      >
        #{pokemonId}
      </p>
      <h1 className="text-4xl font-extrabold uppercase text-black tracking-wide mt-2">
        {pokemonName}
      </h1>
      <div className="flex gap-6 mt-4">
        <p className="text-lg text-gray-700 bg-gray-100 px-3 py-1 rounded-md shadow-sm">
          Height:{" "}
          <span className="font-bold text-gray-900">{`${pokemonHeight}m`}</span>
        </p>
        <p className="text-lg text-gray-700 bg-gray-100 px-3 py-1 rounded-md shadow-sm">
          Weight:{" "}
          <span className="font-bold text-gray-900">{`${pokemonWeight}kg`}</span>
        </p>
      </div>
    </div>
  );
}
