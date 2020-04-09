import React from "react";
import Articles from "../components/articles";
import Navigation from "../components/navigation";
import Query from "../components/query";
import Link from "next/link";
import ARTICLES_QUERY from "../apollo/queries/article/articles";
import PAGES_QUERY from "../apollo/queries/pages/pages";

const Home = () => {
  return (
    <div>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <Query query={ARTICLES_QUERY}>
            {({ data: { articles } }) => {
              return <Articles articles={articles} />;
            }}
          </Query>
          {/* <Query query={PAGES_QUERY}>
            {({ data: { pages } }) => {
              return <Navigation pages={pages} />;
            }}
          </Query> */}
          {/* <Link href="/about" as="about">
        <a>About Page</a>
      </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
