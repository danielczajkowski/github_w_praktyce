import {
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  ADD_ITEM_REQUEST,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAILURE,
  REMOVE_ITEM_REQUEST,
  REMOVE_ITEM_SUCCESS,
  REMOVE_ITEM_FAILURE,
  LOGOUT,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  FETCH_SINGLE_ITEM,
  FETCH_SINGLE_ITEM_SUCCESS,
  FETCH_SINGLE_ITEM_FAILURE,
} from 'actions';

const initialState = {
  notes: [],
  articles: [],
  twitters: [],
  loading: false,
  singleItem: null,
  user: {
    id: '69426d8fc21aed7ee0b8729e',
    username: 'daniel',
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        user: {
          id: action.payload.id,
          username: action.payload.username,
        },
      };
    case AUTH_FAILURE:
    case LOGOUT:
      return {
        ...state,
        loading: false,
        user: {
          id: null,
          username: null,
        },
      };

    case REMOVE_ITEM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REMOVE_ITEM_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: state[action.payload.itemType].filter(
          (item) => item._id !== action.payload.id,
        ),
        loading: false,
      };
    case REMOVE_ITEM_FAILURE:
      return {
        ...state,
        loading: false,
      };

    case FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        [action.payload.itemType]: action.payload.data,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        loading: false,
      };

    case FETCH_SINGLE_ITEM:
      return {
        ...state,
        singleItem: null,
        loading: true,
      };
    case FETCH_SINGLE_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        singleItem: action.payload.data,
      };
    case FETCH_SINGLE_ITEM_FAILURE:
      return {
        ...state,
        loading: false,
        singleItem: null,
      };

    case ADD_ITEM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        [action.payload.itemType]: [...state[action.payload.itemType], action.payload.item],
      };
    case ADD_ITEM_FAILURE:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default rootReducer;
