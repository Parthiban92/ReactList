import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware, connectRouter } from 'connected-react-router'
import { createBrowserHistory } from "history";
import list from "../modules/home/ListReducer";

export const history = createBrowserHistory({
	basename: '/ReactList/'
});

const rootReducer = combineReducers({
  list,
  router: connectRouter(history)
})

const middlewares = [routerMiddleware(history), thunk];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

export const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(...middlewares))
);
