"use client";
interface Type {
  type: {
    name: string;
  };
}
interface Pokemon {
  id: number;
  name: string;
  types: Type[];
  sprites: {
    front_default: string;
    other: {
      home: {
        front_default: string;
      };
    };
  };
}
interface PokemonResult {
  name: string;
  url: string;
}
import { useState, useEffect } from "react";
import PokemonCard from "@/components/PokemonCard";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  const [pokemonDetails, setPokemonDetails] = useState<Pokemon[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    //function to fetch list of pokemons
    const getPokemonList = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0" //limit is set to 100, can be changed upto 100000
        );
        const data = await response.json();
        const details = await Promise.all(
          data.results.map(async (pokemon: PokemonResult) => {
            const res = await fetch(pokemon.url);
            return res.json();
          })
        );

        setPokemonDetails(details); //update state to store pokemon details
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error:", error);
        setError("Error occured");
      }
    };

    getPokemonList();
  }, []);

  if (loading)
    return <p className="text-center text-black text-xl">Loading Pokemon...</p>;

  const filteredPokemon = pokemonDetails.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <SearchBar searchName={search} setSearchName={setSearch} />
      {error && <p className="text-red-500 text-center">{error}</p>}
      <div className=" grid lg:grid-cols-4 xl:grid-cols-4 gap-x-4 gap-y-8 place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 p-8">
        {filteredPokemon.length > 0 ? (
          filteredPokemon.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              type={pokemon.types}
              imageUrl={
                pokemon.sprites?.other?.home?.front_default ||
                pokemon.sprites?.front_default ||
                "/default-pokemon.png"
              }
            />
          ))
        ) : (
          <div className="col-span-4 flex justify-center items-center p-8">
            <span className="text-black text-xl">
              No Pokemon found...Please try again!
            </span>
          </div>
        )}
      </div>
    </>
  );
}
