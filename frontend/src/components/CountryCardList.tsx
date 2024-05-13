import CountryCard from "./CountryCard";

import { useEffect, useState } from "react";
export default function CountryCardList({countryList}:any) {

  const [list, setList] = useState<any[]>([]);

  useEffect(() => {
    setList(countryList);
  }, [countryList]);

  return (
    <div className=" md:max-w-2xl flex flex-wrap content-center  sm:justify-start p-6">
      {countryList.length == 0 ? 
      <div> No countries registered...</div> :
       list.map((country : any) => (
       <CountryCard key={country.code} country={country} />
      ))}
    </div>
  );
}