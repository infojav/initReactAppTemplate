import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware, { END } from "redux-saga";

import { appReducers } from "./reducer";
// import rootSaga from './sagas'
import { sagas as rootSaga } from "../../packages/remoteFile/sagas";

export const sagaMiddleware = createSagaMiddleware();

export const configureStore = (initialState = {}) => {
  const store: any = createStore(
    combineReducers(appReducers),
    initialState,
    typeof window !== "undefined"
      ? composeWithDevTools(applyMiddleware(sagaMiddleware))
      : compose(applyMiddleware(sagaMiddleware))
  );

  store.runSaga = () => {
    // Avoid running twice
    if (store.saga) return;
    store.saga = sagaMiddleware.run(rootSaga);
  };

  store.stopSaga = async () => {
    // Avoid running twice
    if (!store.saga) return;
    store.dispatch(END);
    await store.saga.done;
    store.saga = null;
  };

  store.execSagaTasks = async (isServer: boolean, tasks: any) => {
    // run saga
    store.runSaga();
    // dispatch saga tasks
    tasks(store.dispatch);
    // Stop running and wait for the tasks to be done
    await store.stopSaga();
    // Re-run on client side
    if (!isServer) {
      store.runSaga();
    }
  };

  // Initial run
  store.runSaga();

  return store;
};
