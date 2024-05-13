import CountryCardList from "@/components/CountryCardList";
import AddCountryForm from "@/components/AddCountryForm";

import { useListCountriesQuery } from "../graphql/generated/schema";
import { useAddCountryMutation } from "@/graphql/generated/schema";


type Input = {
  name: string;
  emoji: string;
  code: string;
  continent: {
    id: number;
  }
}

export default function Home() {
  const {loading, error, data, refetch} = useListCountriesQuery();


  const [addCountry] = useAddCountryMutation();

  const handleAddCountry = async (input : Input) => {
    console.log('input', input)
    await addCountry({ variables: { data: 
      {name: input.name,
       emoji: input.emoji, 
       code: input.code,
       continent: { 
        id: +input.continent
      }
    }
  } });
    refetch();
  }

  return (
  <div className="flex flex-col justify-center items-center">
    <AddCountryForm handleAddCountry={handleAddCountry} />
    {
    error ? <div>Error! {error.message}</div> :
    loading ? <div>Loading...</div> :
    <CountryCardList countryList={data?.countries}/>
     }
  </div>
  )
}
