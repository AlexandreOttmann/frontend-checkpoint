import { useState } from "react";
import { useListContinentsQuery } from "@/graphql/generated/schema";

export default function AddCountryForm({ handleAddCountry} : any ) {

  const [name, setName] = useState<string>("")
  const [emoji, setEmoji] = useState<string>("")
  const [code, setCode] = useState<string>("")
  const [error, setError] = useState<string>("")
  const [continent, setContinent] = useState<string>("")

  const { data, loading, error: continentsError } = useListContinentsQuery();
  
  console.log('continents', data?.continents)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    if (!name || !emoji || !code) {
      setError("All fields are required")
      return
    }
    if (code.length !== 2) {
      setError("Country code must be 2 characters")
      return
    }
    if(name.length < 2) {
      setError("Country name must be at least 2 characters")
      return
    }

    await handleAddCountry({name, emoji, code, continent});
    

    setName("")
    setEmoji("")
    setCode("")
    setContinent("")
    setError("")

  }
  return (
    <div className="flex justify-center w-screen md:max-w-6xl p-4">
      <form onSubmit={handleSubmit} className="flex flex-col w-screen md:max-w-screen-md md:flex-row gap-4 bg-white border border-gray-200 rounded-lg shadow p-6">
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">
            Name
          </label>
          <input
            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Country name"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="capital">
            Emoji
          </label>
          <input
            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="emoji"
            value={emoji}
            onChange={(e) => setEmoji(e.target.value)}
            type="text"
            placeholder="Emoji"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="capital">
            Code
          </label>
          <input
            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="Code"
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Country Code"
          />
        </div>
        <div className="mb-6">
           <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="capital">
            Continent
          </label>
          <select id="countries" value={continent} onChange={(e) => setContinent(e.target.value)} className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow dark:placeholder-gray-400">
            {data?.continents.map((continent) => (
              <option key={continent.id} value={+continent.id}>
                {continent.name}
              </option>
            ))}
          </select>
        </div>

        {error && <div className="text-red-500">{error}</div>}
        <div className="self-center m-4 w-10">
          <button
            className="p-2 w-14  h-14 text-sm  font-bold text-white bg-pink-600 rounded hover:bg-pink-700 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
