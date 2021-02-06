const { gql } = require("apollo-server-express");

const typeDefs = gql`
  
  type Book {
    _id: ID
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }
  
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }
  
  
  
  type Query {
    me: User
  }


  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(body: SaveBookInput): User
    removeBook(bookId: String!): User
  }

  input SaveBookInput {
    description: String
    title: String
    bookId: String
    image: String
    link: String
    authors: [String]
  }
  type Auth {
    token: ID!
    user: User
  }
`;


module.exports = typeDefs;