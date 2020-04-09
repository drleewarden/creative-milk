import React from "react";
import Link from "next/link";

const ContentItem = ({ page }) => {
  console.log('page',page)
  return (
    <Link href={{ pathname: "pages", query: { id: page.id } }}>
      <a className="uk-link-reset">
        <div className="uk-card uk-card-muted">
          <div className="uk-card-body">
            <p id="category" className="uk-text-uppercase">
              {page.name}
            </p>
            <p id="title" className="uk-text-large">
              {page.description}
            </p>
            <img
              src={process.env.API_URL + page.image[0].url}
              alt={page.image.url}
              height="100"
            />
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ContentItem;
