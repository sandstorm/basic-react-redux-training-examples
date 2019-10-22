import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic, rootReducer } from './Store';
import { composeWithDevTools } from 'redux-devtools-extension'

const epicMiddleware = createEpicMiddleware();

export default function configureStore() {
  const middlewares = [epicMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)
  const enhancers = [middlewareEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)

  const store = createStore(
    rootReducer,
    composedEnhancers,
  );

  epicMiddleware.run(rootEpic);

  return store;
}
