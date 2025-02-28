interface AbilitiesProps {
  abilityName: string;
}
export default function Abilities({ abilityName }: AbilitiesProps) {
  return (
    <span className="bg-gray-700 px-3 py-1 rounded-md shadow-md border border-gray-600">
      {abilityName}
    </span>
  );
}
