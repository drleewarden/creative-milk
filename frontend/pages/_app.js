import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import Navigation from "../components/navigation";
import "../assets/css/style.css";
import { ApolloProvider } from "@apollo/react-hooks";
import withData from "../utils/apollo";

const App = ({ Component, pageProps, apollo }) => {
  return (
    <ApolloProvider client={apollo}>
      <Head>
        <title>Strapi blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Staatliches"
        />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&family=Poiret+One&family=Proza+Libre&display=swap" rel="stylesheet" />      <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js" />
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js" />
      </Head>
      <Nav />
      <hr></hr>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

// Wraps all components in the tree with the data provider
export default withData(App);
