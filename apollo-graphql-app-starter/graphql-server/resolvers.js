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
  },
  Mutation: {
    appendColor: (_, args, context) => {

      return fetch(`${context.restURL}/colors`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(args.color),
      }).then(res => res.json());

    },
  },
};
