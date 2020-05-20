import fetch from 'node-fetch';

export const resolvers = {
  Query: {
    message: () => 'Hello World!',
    favoriteNumber: () => 8,
    colors: (_1, _2, { restURL }) => {
      return fetch(`${restURL}/colors`)
        .then(res => res.json());
    },
    color: (_, args, context) => {
      return fetch(`${context.restURL}/colors/${encodeURIComponent(args.colorId)}`)
        .then(res => res.json());
    },
    cars: (_1, _2, { restURL }) => {
      return fetch(`${restURL}/cars`)
        .then(res => res.json());
    },
    car: (_, args, context) => {
      return fetch(`${context.restURL}/cars/${encodeURIComponent(args.carId)}`)
        .then(res => res.json());
    },
  },
  Mutation: {
    appendColor: (_, args, context) => {
      return fetch(`${context.restURL}/colors`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(args.color),
      }).then(res => res.json());
    },
    appendCar: (_, args, context) => {
      return fetch(`${context.restURL}/cars`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(args.car),
      }).then(res => res.json());
    },
    replaceCar: async (_, args, context) => {

      const res = await fetch(`${context.restURL}/cars/${encodeURIComponent(args.car.id)}`);
      const car = await res.json();

      await fetch(`${context.restURL}/cars/${encodeURIComponent(args.car.id)}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(args.car),
      });

      return car;
    },
    deleteCar: async (_, args, context) => {

      return fetch(`${context.restURL}/cars/${encodeURIComponent(args.carId)}`)
        .then(res => res.json())
        .then(car => {
          return fetch(
            `${context.restURL}/cars/${encodeURIComponent(args.carId)}`,
            { method: 'DELETE '},
          ).then(() => car);
        });
    },
  },
};
