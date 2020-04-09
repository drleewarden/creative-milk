import React from "react";

import Navigation from "../components/navigation";
import Query from "../components/query";
import PAGES_QUERY from "../apollo/queries/pages/pages";
export default function About() {
    return (
      <div>
         <Query query={PAGES_QUERY}>
            {({ data: { pages } }) => {
                console.log(pages)
              return <Navigation pages={pages} />;
            }}
          </Query>
      </div>
    )
  }