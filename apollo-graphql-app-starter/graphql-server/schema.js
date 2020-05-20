export const typeDefs = `
  type Query {
    message: String
    favoriteNumber: Int
    colors: [Color]
    cars: [Car]
  }

  type Color {
    id: ID
    name: String
    hexcode: String
  }

  type Car {
    id: ID
    make: String
    model: String
    year: Int
    color: String
    price: Float
  }
`;
