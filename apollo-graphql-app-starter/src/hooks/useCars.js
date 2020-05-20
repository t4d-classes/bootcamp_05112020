import { useMutation } from 'react-apollo';
import gql from 'graphql-tag';

const APPEND_CAR_MUTATION = gql`
  mutation AppendCar($car: AppendCar){
    appendCar(car: $car) {
      id make model year color price
    }
  }
`;

const DELETE_CAR_MUTATION = gql`
  mutation DeleteCar($carId: ID) {
    deleteCar(carId: $carId) {
      id make model
    }
  }
`;

export const useCars = (refetchQueries) => {

  const [ mutateAppendCar ] = useMutation(APPEND_CAR_MUTATION);
  const [ mutateDeleteCar ] = useMutation(DELETE_CAR_MUTATION);

  const deleteCar = carId => {

    mutateDeleteCar({
      variables: {
        carId,
      },
      refetchQueries,
    });


  };

  const appendCar = car => {

    mutateAppendCar({
      variables: {
        car: {
          ...car,
        },
      },
      refetchQueries,
    });

  };

  return [ appendCar, deleteCar ];

};