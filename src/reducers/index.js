import {
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  REMOVE_ITEM,
  ADD_ITEM,
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
          id: action.payload.data._id,
          username: action.payload.data.username,
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

    case REMOVE_ITEM:
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType].filter((item) => item.id !== action.payload.id),
        ],
      };
    case ADD_ITEM:
      return {
        ...state,
        [action.payload.itemType]: [...state[action.payload.itemType], action.payload.item],
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
    default:
      return state;
  }
};

export default rootReducer;
