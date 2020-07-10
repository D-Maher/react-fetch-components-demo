const INITIATE_FETCH_DOG = '@dogs/INITIATE_FETCH_DOG';
const FETCH_DOG_SUCCESS = '@dogs/FETCH_DOG_SUCCESS';
const FETCH_DOG_ERROR = '@dogs/FETCH_DOG_ERROR';

interface InitiateFetchDogAction {
  type: typeof INITIATE_FETCH_DOG;
}

interface FetchDogSuccessAction {
  type: typeof FETCH_DOG_SUCCESS;
  data: string;
}

interface FetchDogErrorAction {
  type: typeof FETCH_DOG_ERROR;
  error: string;
}

export type InitiateFetchDogActionCreator = () => InitiateFetchDogAction;
export const initiateFetchDog: InitiateFetchDogActionCreator = () => ({
  type: INITIATE_FETCH_DOG,
});

export type FetchDogSuccessActionCreator = (url: string) => FetchDogSuccessAction;
export const fetchDogSuccess: FetchDogSuccessActionCreator = url => ({
  type: FETCH_DOG_SUCCESS,
  data: url,
});

export type FetchDogErrorActionCreator = (error: string) => FetchDogErrorAction;
export const fetchDogError: FetchDogErrorActionCreator = error => ({
  type: FETCH_DOG_ERROR,
  error,
});

type DogsAction = InitiateFetchDogAction | FetchDogSuccessAction | FetchDogErrorAction;

const initialState = {
  dogPicSrc: '',
  error: '',
  isLoading: false,
};

export interface DogsStore {
  dogPicSrc: string;
  error: string;
  isLoading: boolean;
}

const dogs = (state: DogsStore = initialState, action: DogsAction): DogsStore => {
  switch (action.type) {
    case INITIATE_FETCH_DOG:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_DOG_SUCCESS:
      return {
        ...state,
        dogPicSrc: action.data,
        isLoading: false,
      };
    case FETCH_DOG_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default dogs;
