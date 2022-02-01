/* eslint-disable no-underscore-dangle */
import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSagas from "../../sagas";
import rootReducer from "../reducers/rootReducer";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? compose(
        applyMiddleware(...middlewares),
        window.__REDUX_DEVTOOLS_EXTENSION__({
          trace: true,
          name: "REACT_TEMPLATE",
        })
      )
    : applyMiddleware(...middlewares)
);

sagaMiddleware.run(rootSagas);

const storeObject = { store };

export default storeObject;
