export const typeDefs = `
  type Query {
    message: String
    favoriteNumber: Int
    colors: [Color]
  }

  type Color {
    id: ID
    name: String
    hexcode: String
  }
`;
