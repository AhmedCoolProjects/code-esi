import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Head from "next/head";
import { ApolloProvider } from "@apollo/client";
import client from "apollo/ApolloClient";
import Layout from "@comp/utils/layouts/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="CODE ESI (Club Of Data Engineers ESI), the IT Club in The School Of Information Science - Rabat."
        />
        <meta
          name="keywords"
          content="code esi, code, esi, esi code, esi code club, esi code club esi, esi code club code, esi code club code esi, esi code club code esi code, esi code club code esi code club, esi code club code esi code club esi, esi code club code esi code club esi code, esi code club code esi code club esi code club, esi code club code esi code club esi code club esi, esi code club code esi code club esi code club esi code, esi code club code esi code club esi code club esi code club esi, esi code club code esi code club esi code club esi code club esi code, esi code club code esi code club esi code club esi code club esi code club esi, esi code club code esi code club esi code club esi code club esi code club esi code, esi code club code esi code club esi code club esi code club esi code club esi code, esi code club code esi code club esi code club esi code club esi code club esi code club esi, esi code club code esi code club esi code club esi code club esi code club esi code club"
        />
        <meta
          name="og:title"
          content="CODE ESI - Club Of Data Engineers from the school of information sciences"
        />
        <meta
          name="og:description"
          content="CODE ESI is an active club of engineering students from the school of information sciences where we meet to share and learn about awesome topics.
We talk about different fields in computer science and explain it to the community in a way that is simple and approachable."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
