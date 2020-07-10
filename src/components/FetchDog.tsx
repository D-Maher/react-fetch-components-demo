import React from 'react';
import { connect } from 'react-redux';
import {
  fetchDogError,
  FetchDogErrorActionCreator,
  fetchDogSuccess,
  FetchDogSuccessActionCreator,
  initiateFetchDog,
  InitiateFetchDogActionCreator,
} from '../ducks/dogs';
import { ReduxStore } from '../ducks/index';
import ErrorMessage from './ErrorMessage';
import LoadingBone from './LoadingBone';

interface Props {
  initiateFetchDog: InitiateFetchDogActionCreator;
  fetchDogSuccess: FetchDogSuccessActionCreator;
  fetchDogError: FetchDogErrorActionCreator;
  isLoading: boolean;
  error: string;
}

const FetchDog: React.FunctionComponent<Props> = ({
  children,
  initiateFetchDog,
  fetchDogSuccess,
  fetchDogError,
  isLoading,
  error,
}) => {
  React.useEffect(() => {
    initiateFetchDog();

    setTimeout(() => {
      fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => {
          // throw new Error('Something went wrong...');
          return response.json();
        })
        .then(json => fetchDogSuccess(json.message))
        .catch(error => {
          fetchDogError(error.message);
        });
    }, 4000);
  }, []);

  if (error) {
    return <ErrorMessage error={error} />;
  }

  return isLoading ? <LoadingBone /> : <>{children}</>;
};

const mapStateToProps = (state: ReduxStore) => ({
  isLoading: state.dogs.isLoading,
  error: state.dogs.error,
});

const mapDispatchToProps = {
  initiateFetchDog,
  fetchDogSuccess,
  fetchDogError,
};

export default connect(mapStateToProps, mapDispatchToProps)(FetchDog);
