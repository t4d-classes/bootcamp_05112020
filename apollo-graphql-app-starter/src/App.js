import * as React from 'react';
import { useQuery, useMutation } from 'react-apollo';
import gql from 'graphql-tag';

import { CarTable } from './components/CarTable';
import { CarForm } from './components/CarForm';

const APP_QUERY = gql`
  query AppQuery {
    colors {
      id
      name
    }
    cars {
      id make model year color price
    }
  }
`;

const APPEND_CAR_MUTATION = gql`
  mutation AppendCar($car: AppendCar){
    appendCar(car: $car) {
      id make model year color price
    }
  }
`;

export const App = () => {
  const { loading, data, error } = useQuery(APP_QUERY);

  const [ mutateAppendCar ] = useMutation(APPEND_CAR_MUTATION);

  const appendCar = car => {

    mutateAppendCar({
      variables: {
        car: {
          ...car,
        },
      },
      refetchQueries: [
        { query: APP_QUERY }
      ],
    });

  };

  if (loading) {
    return <div>Loading!</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return <>
    <ul>
      {data.colors.map(color =>
        <li key={color.id}>{color.name}</li>)}
    </ul>
    <CarTable cars={data.cars} />
    <CarForm buttonText="Add Car" onSubmitCar={appendCar} />
  </>;
};
