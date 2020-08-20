import { push } from "connected-react-router";

export const LIST_ACTION_TYPES = {
  LIST_ACTION: "LIST_ACTION",
  LIST_ACTION_IN_PROGRESS: "LIST_ACTION_IN_PROGRESS",
  LIST_ACTION_SUCCESS: "LIST_ACTION_SUCCESS",
  LIST_ACTION_ERROR: "LIST_ACTION_ERROR",
  GET_POST_BY_ID: "GET_POST_BY_ID",
  UPDATE_POST: "UPDATE_POST"
};

const listingInProgressAction = param => ({
  type: LIST_ACTION_TYPES.LIST_ACTION_IN_PROGRESS,
  payload: param
});

const listingSuccessAction = param => ({
  type: LIST_ACTION_TYPES.LIST_ACTION_SUCCESS,
  payload: param
});

const listingErrorAction = param => ({
  type: LIST_ACTION_TYPES.LIST_ACTION_ERROR,
  payload: param
});

const getPostByIdAction = param => ({
  type: LIST_ACTION_TYPES.GET_POST_BY_ID,
  payload: param
});

const updatePostAction = param => ({
  type: LIST_ACTION_TYPES.UPDATE_POST,
  payload: param
});

export const listAction = param => dispatch => {
  dispatch(listingInProgressAction(param));
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(posts => {
      dispatch(listingSuccessAction(posts));
    })
    .catch((error) => {
      dispatch(listingErrorAction(error));
    });
};

export const edit = param => dispatch => {
  dispatch(push("/edit/" + param));
};

export const list = param => dispatch => {
  dispatch(push("/"));
};

export const getPostById = param => dispatch => {
  dispatch(getPostByIdAction(param));
}

export const updatePost = param => dispatch => {
  dispatch(updatePostAction(param));
}
