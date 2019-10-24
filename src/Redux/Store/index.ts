import { Epic, combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';

import * as Textinput from './Textinput'
import * as GithubRepos from './Githubrepos'

export const actions = {
  Textinput: Textinput.textInput.actions,
  GithubRepos: GithubRepos.githubRepos.actions,

}

export const selectors = {
  Textinput: Textinput.selectors,
  GithubRepos: GithubRepos.selectors,
}

export const rootEpic = combineEpics(
  GithubRepos.epics,
);

export const rootReducer = combineReducers({
  Textinput: Textinput.textInput.reducer,
  GithubRepos: GithubRepos.githubRepos.reducer,
});

export type RootAction = Textinput.TextInputAction | GithubRepos.GithubReposAction
export type RootState = ReturnType<typeof rootReducer>
export type RootEpic = Epic<RootAction, RootAction, RootState>
