import React, {Fragment} from "react";
import PropTypes from "prop-types";
import Card from "./card";
import ContentItem from "./content_item";
import Query from "../components/query";
import PAGES_QUERY from "../apollo/queries/pages/pages";
import Link from 'next/link'
const Navigation = ({ pages }) => {
  return (
    <Fragment>    
      <Query query={PAGES_QUERY} id={null}>
      {({ data: { pages } }) => {
        return(
          <Fragment>
              {pages.map((page, i) => {
                  return(
                    <li key={page.id}>
                      <Link
                        href={{
                          pathname: "page",
                          query: { id: page.id }
                        }}>
                        <a className="uk-link-reset">{page.name}</a>
                      </Link>
                    </li>
                  ) 
                })}
          </Fragment>
          )}          
          }
      </Query>
    </Fragment>
  );
};

export default Navigation;
