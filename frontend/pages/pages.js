import { useRouter } from "next/router";
import Query from "../components/query";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import PAGE_QUERY from "../apollo/queries/pages/page";

const Pages = () => {
  let bgImg ;
  const router = useRouter();
  return (
    <Query query={PAGE_QUERY} id={router.query.id}>
      {({ data: { page } }) => {
        bgImg = process.env.API_URL + page.image[0].url
        return (
      <div>
        <div className="uk-child-width-1-4@m uk-grid">
                <div className="uk-card uk-card-default">
                  <div className="uk-card-header">
                      <div className="uk-grid-small uk-flex-middle uk-grid" uk-grid="">
                          <div className="uk-width-auto uk-first-column">
                              <img className="uk-border-circle" src={process.env.API_URL + page.image[0].url} width="50" alt="" />
                          </div>
                          <div className="uk-width-expand">
                              <h3 className="uk-card-title uk-margin-remove-bottom">{page.name}</h3>
                              <p className="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">April 01, 2016</time></p>
                          </div>
                      </div>
                  </div>
                  <div className="uk-card-media">
                      <img src={process.env.API_URL + page.image[0].url} alt=""/>
                  </div>
                  <div className="uk-card-body">
                      <p>{page.description}</p>
                  </div>
              </div> 
            </div>

            <div className="uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex uk-flex-top" style={{backgroundImage: "url('"+ bgImg+"')"}}>
              <div className="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
                  <h1 uk-parallax="opacity: 0,1; y: -100,0; scale: 2,1; viewport: 0.5;">{page.name}</h1>
                  <p uk-parallax="opacity: 0,1; y: 100,0; scale: 0.5,1; viewport: 0.5;">{page.description}</p>
              </div>
          </div>

      </div>
      
        );
      }}
    </Query>
  );
};

export default Pages;
