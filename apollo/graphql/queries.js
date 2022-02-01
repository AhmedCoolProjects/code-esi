import { gql } from "@apollo/client";

export const GET_PEOPLE = gql`
  query Query {
    getPeople {
      id
      first_name
      last_name
      email
      linkedin
      profession
      image
      category
      post
      is_hidden
      createdAt
      updatedAt
    }
  }
`;
export const GET_PEOPLE_BY_CATEGORY = gql`
  query GetPersonsByCategory($category: PersonCategory) {
    getPersonsByCategory(category: $category) {
      id
      id
      first_name
      last_name
      email
      linkedin
      profession
      image
      category
      post
      is_hidden
      createdAt
      updatedAt
    }
  }
`;
