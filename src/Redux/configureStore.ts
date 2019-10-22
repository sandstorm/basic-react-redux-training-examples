import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic, rootReducer, RootState } from './Store';
import { composeWithDevTools } from 'redux-devtools-extension'

const epicMiddleware = createEpicMiddleware();

export default function configureStore(initialState: RootState) {
  const middlewares = [epicMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)
  const enhancers = [middlewareEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)

  const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers,
  );

  epicMiddleware.run(rootEpic);

  return store;
}
