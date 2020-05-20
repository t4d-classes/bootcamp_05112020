export const typeDefs = `
  type Query {
    message: String
    favoriteNumber: Int
    colors: [Color]
    color(colorId: ID): Color
    cars: [Car]
    car(carId: ID): Car
  }

  type Mutation {
    appendColor(color: AppendColor): Color
    appendCar(car: AppendCar): Car
    replaceCar(car: ReplaceCar): Car
    deleteCar(carId: ID): Car
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

  input AppendCar {
    make: String
    model: String
    year: Int
    color: String
    price: Float
  }

  input ReplaceCar {
    id: ID
    make: String
    model: String
    year: Int
    color: String
    price: Float
  }

`;
