import { createAction, ActionsUnion } from '@martin_hotell/rex-tils'

import { RootState } from 'Redux/Store'

export { epic } from './epic'

///////////
// STATE //
///////////

export type Repository = {
  id: string
  name: string
  html_url: string
}

export type State = {
  loading: boolean
  repos: Repository[]
}

export const initialState: State = {
  loading: false,
  repos: []
}

/////////////
// ACTIONS //
/////////////

export enum ActionTypes {
  REPOS_FETCH = 'GithubRepos/REPOS_FETCH',
  REPOS_FETCH_SUCCESS = 'GithubRepos/REPOS_FETCH_SUCCESS',
  REPOS_FETCH_FAILURE = 'GithubRepos/REPOS_FETCH_FAILURE',
}

export const actions = {
  fetchRepos: (user: string) => createAction(ActionTypes.REPOS_FETCH, { user } ),
  fetchSuccess: (repos: Repository[]) => createAction(ActionTypes.REPOS_FETCH_SUCCESS, { repos }),
  fetchFailed: (error: string) => createAction(ActionTypes.REPOS_FETCH_FAILURE, { error }),
}

export type Action = ActionsUnion<typeof actions>

/////////////
// REDUCER //
/////////////

export const Reducer = (
  state: State = initialState,
    action: Action
) => {
  switch (action.type) {
    default: {
      return state
    }
  }
}

///////////////
// SELECTORS //
///////////////

const getRepos = (state: RootState) => state.GithubRepos.repos
const getLoading = (state: RootState) => state.GithubRepos.loading

export const selectors = {
  getRepos,
  getLoading,
}
