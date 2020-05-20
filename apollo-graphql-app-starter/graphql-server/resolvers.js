import fetch from 'node-fetch';

export const resolvers = {
  Query: {
    message: () => 'Hello World!',
    favoriteNumber: () => 8,
    colors: (_1, _2, { restURL }) => {

      return fetch(`${restURL}/colors`)
        .then(res => res.json());

    },
  },
};
