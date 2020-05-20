export const typeDefs = `
  type Query {
    message: String
    favoriteNumber: Int
    colors: [Color]
    color(colorId: ID): Color
    cars: [Car]
  }

  type Mutation {
    appendColor(color: AppendColor): Color
  }

  type Color {
    id: ID
    name: String
    hexcode: String
  }

  input AppendColor {
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
