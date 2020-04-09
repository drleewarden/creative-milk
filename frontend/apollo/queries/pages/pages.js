import gql from "graphql-tag";

const PAGES_QUERY = gql`
  query Pages {
    pages {
      id
      name
      description
      image {
        url
      }
      uid
    }
    
  }
`;

export default PAGES_QUERY;
