import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';

import * as Textinput from './Textinput'
import * as GithubRepos from './Githubrepos'

export type Action = Textinput.Action | GithubRepos.Action

export const actions = {
  Textinput: Textinput.actions,
  GithubRepos: GithubRepos.actions,
}

export const selectors = {
  Textinput: Textinput.selectors,
  GithubRepos: GithubRepos.selectors,
}

export const rootEpic = combineEpics(
  GithubRepos.epic
);

export const rootReducer = combineReducers({
  Textinput: Textinput.Reducer,
  GithubRepos: GithubRepos.Reducer,
});

export type RootState = ReturnType<typeof rootReducer>
