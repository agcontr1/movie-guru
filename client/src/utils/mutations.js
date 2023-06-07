import { gql } from "@apollo/client";

export const Login_User = gql`
mutation login(
  $email: String!
  $password: String!
) {
  login(
    email: $email
    password: $password
  ) {
    token
    user {
      _id
      username
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        username
        email
        movieName
        savedMovies {
          director
          movieId
          image
          link
          title
          description
        }
      }
    }
  }
`;

