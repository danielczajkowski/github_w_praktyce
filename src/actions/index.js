import axios from 'axios';

export const REMOVE_ITEM = 'REMOVE_ITEM';
export const ADD_ITEM = 'ADD_ITEM';
export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';
export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const FETCH_SINGLE_ITEM = 'FETCH_SINGLE_ITEM';
export const FETCH_SINGLE_ITEM_SUCCESS = 'FETCH_SINGLE_ITEM_SUCCESS';
export const FETCH_SINGLE_ITEM_FAILURE = 'FETCH_SINGLE_ITEM_FAILURE';
export const LOGOUT = 'LOGOUT';

export const removeItem = (itemType, id) => ({
  type: REMOVE_ITEM,
  payload: { itemType, id },
});

export const addItem = (itemType, item) => {
  const getId = () => {
    return Math.floor(Math.random() * 1000000);
  };

  return {
    type: ADD_ITEM,
    payload: {
      itemType,
      item: {
        id: getId(),
        ...item,
      },
    },
  };
};

export const authenticateUser =
  (username, password, endpoint = 'login') =>
  (dispatch) => {
    dispatch({
      type: AUTH_REQUEST,
    });

    return axios
      .post(`http://localhost:9000/api/user/${endpoint}`, {
        username,
        password,
      })
      .then((payload) => {
        dispatch({
          type: AUTH_SUCCESS,
          payload,
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: AUTH_FAILURE,
        });
      });
  };

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
  return axios
    .post('http://localhost:9000/api/user/logout', {}, { withCredentials: true })
    .then(() => {
      console.log('Logout successful');
    })
    .catch((error) => {
      console.error('Logout failed:', error);
    });
};

export const fetchItems = (itemType) => (dispatch, getState) => {
  dispatch({
    type: FETCH_REQUEST,
  });

  return axios
    .get('http://localhost:9000/api/notes/type', {
      params: {
        type: itemType,
        userID: getState().user.id,
      },
    })
    .then(({ data }) => {
      dispatch({
        type: FETCH_SUCCESS,
        payload: {
          data,
          itemType,
        },
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: FETCH_FAILURE,
      });
    });
};

export const fetchSingleItem = (itemType, id) => (dispatch) => {
  dispatch({
    type: FETCH_SINGLE_ITEM,
  });

  return axios
    .get(`http://localhost:9000/api/note/${id}`)
    .then(({ data }) => {
      dispatch({
        type: FETCH_SINGLE_ITEM_SUCCESS,
        payload: {
          data,
        },
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: FETCH_SINGLE_ITEM_FAILURE,
      });
    });
};
