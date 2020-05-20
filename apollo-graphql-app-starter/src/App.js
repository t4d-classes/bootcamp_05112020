import * as React from 'react';
import { useQuery } from 'react-apollo';
import gql from 'graphql-tag';

import { useCars } from './hooks/useCars';
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

export const App = () => {

  const { loading, data, error } = useQuery(APP_QUERY);
  const [ appendCar, deleteCar ] = useCars([ { query: APP_QUERY }]);

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
    <CarTable cars={data.cars} onDeleteCar={deleteCar} />
    <CarForm buttonText="Add Car" onSubmitCar={appendCar} />
  </>;
};
