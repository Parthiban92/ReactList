import { combineReducers } from "redux";
import { LIST_ACTION_TYPES } from "./ListActions";

const values = (state = [], action) => {
  switch (action.type) {
    case LIST_ACTION_TYPES.LIST_ACTION:
      return [...state, action.payload];
    case LIST_ACTION_TYPES.LIST_ACTION_IN_PROGRESS:
      return Object.assign({}, state, {
        listingInProgress: true
      })
    case LIST_ACTION_TYPES.LIST_ACTION_SUCCESS:
      return Object.assign({}, state, {
        listingInProgress: false,
        updated: false,
        posts: action.payload
      })
    case LIST_ACTION_TYPES.LIST_ACTION_ERROR:
      return Object.assign({}, state, {
        listingInProgress: false,
        error: action.payload
      })
    case LIST_ACTION_TYPES.GET_POST_BY_ID:
      const post = state.posts ? state.posts.find(post => post.id === action.payload) : undefined
      return Object.assign({}, state, {
        selectedPost: post,
        updated: false
      })
    case LIST_ACTION_TYPES.UPDATE_POST:
      const id = action.payload.id;
      const posts = state.posts.map(post => Object.assign({}, post));
      const postToUpdate = posts ? posts.find(post => post.id === id) : undefined
      const indexToUpdate = posts.indexOf(postToUpdate);
      if (postToUpdate) {
        postToUpdate.title = action.payload.title;
        postToUpdate.body = action.payload.body
        posts.splice(indexToUpdate, 1, postToUpdate)
        return Object.assign({}, state, {
          posts: posts,
          updated: true
        });
      } else {
        return Object.assign({}, state, {
        updated: false
       });
      }
    
    default:
      return state;
  }
};

export default combineReducers({
  values
});
