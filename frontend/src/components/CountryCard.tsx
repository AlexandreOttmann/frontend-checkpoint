interface Country {
  __typename?: "Country" | undefined;
    name: string;
    emoji: string;
    code: string;
    id: number;
    continent?: {
        __typename?: "Continent" | undefined;
        name: string;
    } | null | undefined;
}

interface CountryCardProps {
  country: Country;
}
import Link from "next/link";

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  return (
    <Link href={'/country/' + country.code} className="flex flex-col justify-center items-center max-w-sm p-6 m-1 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 className="mb-2 h-4 w-10 text-center tracking-tight text-gray-900 dark:text-white">{country.name}</h5>
      <p className="">{country.emoji}</p>
    </Link>
  )
}


export default CountryCard;
