import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Header() {
  const router = useRouter(); 
  const [isHome, setIsHome] = useState(false);
  useEffect(() => {
    setIsHome(router.pathname === '/');
  }, [router.pathname]);
  return (
    <header className="py-4 bg-pink-600 text-center text-white flex  flex-col gap-4">
      <h1 className="text-3xl font-bold">Checkpoint : frontend</h1>
      <Link className="text-1xl" href="/">Countries</Link>
      {isHome ? null :
       <button className="m-2 text-1xl" onClick={() => router.back()}>
        <svg className="rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
         </svg>
      
       </button>
      }
    </header>
  );
}
