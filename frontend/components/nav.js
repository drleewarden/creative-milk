import React from "react";
import Query from "../components/query";
import Link from "next/link";
import Navigation from "../components/navigation";
import CATEGORIES_QUERY from "../apollo/queries/category/categories";
import {Title} from "../assets/css/base"
const Nav = () => {
  return (
    <div>
      <Query query={CATEGORIES_QUERY} id={null}>
        {({ data: { categories } }) => {
          console.log("1",categories)
          return (
            <div className="uk-container">
              <nav className="uk-navbar-container" data-uk-navbar>
                <div className="uk-navbar-left">
                  <Title>Creative-milk</Title>
                  <ul className="uk-navbar-nav">
                    <Navigation />
                  </ul>
                </div>

                <div className="uk-navbar-right">
                  <ul className="uk-navbar-nav">
                    {categories.map((category, i) => {
                        console.log('category',category)

                      return (
                        <li key={category.id}>
                          <Link
                            href={{
                              pathname: "category",
                              query: { id: category.id }
                            }}
                          >
                            <a className="uk-link-reset">{category.name}</a>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </nav>
            </div>
          );
        }}
      </Query>
    </div>
  );
};

export default Nav;
