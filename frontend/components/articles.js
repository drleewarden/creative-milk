import React from "react";
import PropTypes from "prop-types";
import Card from "./card";

const Articles = ({ articles }) => {
  const leftArticlesCount = Math.ceil(articles.length / 5);
  const leftArticles = articles.slice(0, leftArticlesCount);
  const rightArticles = articles.slice(leftArticlesCount, articles.length);
console.log(articles)
  return (
    <div>
      <div className="uk-child-width-1-2" data-uk-grid>
        <div>
          {leftArticles.map((article, i) => {
            return <Card article={article} key={`article__${article.id}`} />;
          })}
        </div>
        <div>
          <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
            {rightArticles.map((article, i) => {
              return(
                <div className="uk-child-width-1-2@m" uk-grid>
                  <div>
                    <div className="uk-inline">
                        <img src={process.env.API_URL + article.image.url} alt="" />
                        <div className="uk-overlay uk-overlay-default uk-position-bottom">
                            <p>Default Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
