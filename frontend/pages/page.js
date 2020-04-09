import { useRouter } from "next/router";
import Query from "../components/query";
import ReactMarkdown from "react-markdown";

import {Wrapper, SecondaryFont} from "../assets/css/base"
import PAGE_QUERY from "../apollo/queries/pages/page";

const Pages = () => {
  let bgImg ;
  const router = useRouter();
  return (
    <Query query={PAGE_QUERY}  id={router.query.id}>
      {({ data: { page } }) => {
        console.log('dfsdfdsfdsfds',page)
        bgImg = process.env.API_URL + page.image[0].url
        return (
          <div>
            <div className="uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex uk-flex-top" 
                style={{backgroundImage: "url('"+ bgImg+"')"}}>
              <div className="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
                  <h1 uk-parallax="opacity: 0,1; y: -100,0; scale: 2,1; viewport: 0.5;">{page.name}</h1>
                  <p uk-parallax="opacity: 0,1; y: 100,0; scale: 0.5,1; viewport: 0.5;">{page.description}</p>
              </div>
          </div>
          <div className="uk-container">
            <Wrapper>
            <article className="uk-article">
            <SecondaryFont>{page.name}</SecondaryFont>
            <h1 className="uk-article-title"><a className="uk-link-reset" href="">Heading</a></h1>
            <p className="uk-article-meta">Written by <a href="#">Super User</a> on 12 April 2012. Posted in <a href="#">Blog</a></p>
            <p className="uk-text-lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            
            <div className="uk-grid-small uk-grid" uk-grid="">
                <div className="uk-first-column">
                    <a className="uk-button uk-button-text" href="#">Read more</a>
                </div>
                <div>
                    <a className="uk-button uk-button-text" href="#">5 Comments</a>
                </div>
            </div>

            </article>
            </Wrapper>
        
          </div>
          
        </div>
      
        );
      }}
    </Query>
  );
};

export default Pages;
