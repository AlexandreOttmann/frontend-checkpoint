import "@/styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Header from "@/components/Header";


function App({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});
  return (
    <ApolloProvider client={client}>
      <main>
        <Header/>
          <Component {...pageProps} />
      </main>
    </ApolloProvider>
  ) 
}

// Disabling SSR
export default dynamic(() => Promise.resolve(App), { ssr: false });
