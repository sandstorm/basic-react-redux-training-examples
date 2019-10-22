import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';

import * as Textinput from './Textinput'

export const actions = {
  Textinput: Textinput.actions,
}

export const selectors = {
  Textinput: Textinput.selectors
}

export const rootEpic = combineEpics(
);

export const rootReducer = combineReducers({
  Textinput: Textinput.Reducer,
});

export type RootState = ReturnType<typeof rootReducer>
