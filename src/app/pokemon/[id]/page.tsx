"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import Abilities from "@/components/Abilities";
import Stats from "@/components/Stats";
import Moves from "@/components/Moves";
import Types from "@/components/Types";
import GeneralDetails from "@/components/GeneralDetails";
export default function PokemonDetail() {
  const [pokemon, setPokemon] = useState<any>(null);
  const [topMoves, setTopMoves] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const bgColor = searchParams.get("color") || "bg-gray-100";
  //console.log(bgColor, 'bg color')
  useEffect(() => {
    //function to get pokemon details based on their id
    async function getPokemonDetails() {
      try {
        setLoading(true);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();

        const moveDetails = await Promise.all(
          data.moves.slice(0, 8).map(async (move: any) => {
            const moveRes = await fetch(move.move.url);
            const moveData = await moveRes.json();
            return {
              name: moveData.name,
              power: moveData.power || "-",
              accuracy: moveData.accuracy || "-",
              pp: moveData.pp,
              type: moveData.type.name,
              damage_class: moveData.damage_class.name,
            };
          })
        );
        setLoading(false);
        setPokemon(data); // update state to save details of pokemon
        setTopMoves(moveDetails); // update state to store moves of pokemon : printing 8
      } catch (error) {
        console.error(error);
        setPokemon(null);
        setLoading(false);
      }
    }

    getPokemonDetails();
  }, [id]);

  //loader
  if (loading)
    return (
      <p className="text-center text-lg text-black font-bold">
        Loading Pokemon details...
      </p>
    );

  // pokemon not found
  if (!pokemon)
    return <p className="text-center text-red-500">Pokemon not found.</p>;

  return (
    <div className="flex flex-col p-8">
      {/*back button*/}
      <div className="absolute top-8 left-8 z-10">
        <button
          onClick={() => router.back()}
          className="px-8 py-2 bg-yellow-300 text-blue-900 shadow-md font-bold"
        >
          {`Back`}
        </button>
      </div>
      <div
        className={`w-full justify-center items-center p-4 mx-auto shadow-2xl border border-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ${bgColor}`}
      >
        {/*Displays image,id,name,weight,height*/}
        <GeneralDetails
          pokemonImageSrc={
            pokemon.sprites.other.home.front_default ||
            pokemon.sprites.front_default
          }
          pokemonName={pokemon.name}
          pokemonId={pokemon.id}
          pokemonHeight={pokemon.height}
          pokemonWeight={pokemon.weight}
          bgColor={bgColor}
        />

        <div className="col-span-2 sm:col-span-1 lg:col-span-2 bg-gray-800 text-white p-6 shadow-md">
          {/*Displays types*/}
          <h2 className="text-yellow-400 text-lg font-bold">Type:</h2>
          <div className="flex flex-wrap gap-2 mt-1">
            {pokemon.types.map((type: any, index: number) => {
              return <Types key={index} typeName={type.type.name} />;
            })}
          </div>
          {/*Displays abilities*/}
          <h2 className="text-yellow-400 text-lg font-bold mt-4">Abilities:</h2>
          <div className="flex flex-wrap gap-2 mt-1">
            {pokemon.abilities.map((ability: any, index: number) => (
              <Abilities key={index} abilityName={ability.ability.name} />
            ))}
          </div>
          {/*Displays stats*/}
          <h2 className="text-yellow-400 text-lg font-bold mt-4">
            Base Stats:
          </h2>
          <div className="flex flex-wrap gap-1 mt-2 text-sm text-gray-200">
            {pokemon.stats.map(
              (
                stat: { stat: { name: string }; base_stat: number },
                index: number
              ) => {
                return (
                  <Stats
                    key={index}
                    statName={stat.stat.name}
                    baseStat={stat.base_stat}
                  />
                );
              }
            )}
          </div>
          {/*Displays moves*/}
          <h2 className="text-purple-400 text-lg font-semibold mt-6">Moves:</h2>
          <div className="overflow-x-auto mt-2">
            <Moves moves={topMoves} />
          </div>
        </div>
      </div>
    </div>
  );
}
