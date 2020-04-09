import gql from "graphql-tag";

const PAGE_QUERY = gql`
  query Page($id:ID!){
    page(id: $id) {
      name
      description
      image {
        url
      }
      uid
    }
    
  }
`;

export default PAGE_QUERY;
