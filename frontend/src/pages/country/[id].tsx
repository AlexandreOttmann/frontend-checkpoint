import { useRouter } from 'next/router'
import {useCountryQuery} from '@/graphql/generated/schema'

export default function Page() {
  const router = useRouter()
  const {data, loading, error} = useCountryQuery({variables: {code: router.query.id as string}})
  return (
    <div className="flex flex-col justify-center items-center my-4 gap-2">
      <h1 className="text-3xl my-10">  <span role="img" aria-label={data?.country.emoji}>
            {data?.country.emoji}
          </span></h1>
      <p>Name: {data?.country.name} ({data?.country.code})</p>
      {data?.country.continent ? <p>Continent: {data?.country.continent?.name}</p> : null }
    </div>
    )
}