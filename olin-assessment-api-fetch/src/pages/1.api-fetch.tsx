import { usePokemonData } from "../hooks/usePokemonData";

function ApiFetch() {
  const { data, error, isLoading } = usePokemonData();

  if (isLoading)
    return <div className="text-center text-gray-500">Loading...</div>;
  if (error)
    return (
      <div className="text-center text-red-500">Error: {error.message}</div>
    );
  if (!data) return null;

  return (
    <div className="max-w-md mx-auto p-4 bg-black shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-4 text-blue-400">Pokemon Info</h1>
      <p>
        <strong>Height:</strong> {data.height}
      </p>
      <p>
        <strong>Weight:</strong> {data.weight}
      </p>
      <h2 className="text-xl font-semibold mt-4">Abilities:</h2>
      <ul className="list-disc list-inside">
        {data.abilities.map((ability, index) => (
          <li key={index} className="ml-4">
            {ability.ability.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ApiFetch;
