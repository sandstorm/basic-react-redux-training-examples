import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';

import * as Textinput from './Textinput'

export const actions = {
  Textinput: Textinput.textInput.actions,
}

export const selectors = {
  Textinput: Textinput.selectors,
}

export const rootEpic = combineEpics(
);

export const rootReducer = combineReducers({
  Textinput: Textinput.textInput.reducer,
});

export type RootState = ReturnType<typeof rootReducer>
