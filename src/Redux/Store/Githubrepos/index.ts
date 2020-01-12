import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { combineEpics, ActionsObservable } from 'redux-observable'
import { of } from 'rxjs'
import { mergeMap, map, filter, debounceTime, catchError, tap } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'
import { ActionsUnion } from '@martin_hotell/rex-tils'


import { RootState, RootAction } from 'Redux/Store'

///////////
// Types //
///////////

export type Repository = {
  id: string
  name: string
  html_url: string
}

type State = {
  loading: boolean,
  repos: Repository[]
}

///////////////////////
// Reducer + Actions //
///////////////////////

const initialState: State = {
  loading: false,
  repos: []
}

const githubRepos = createSlice({
  name: 'githubRepos',
  initialState,
  reducers: {
    fetch: (state, _: PayloadAction<{ user: string }>) => {
      state.loading = true
    },
    fetchSuccess: (state, action: PayloadAction<Repository[]>) => {
      state.loading = false
      state.repos = action.payload
    },
    fetchFailed: (state, action: PayloadAction<string>) => {
      state.loading = false
      console.log(action.payload)
    }
  }
})

///////////
// Epics //
///////////

const fetchReposEpic = (action$: ActionsObservable<RootAction>) => action$
  .pipe(
      filter(githubRepos.actions.fetch.match),
      tap((action) => console.log('before:', action)),
      debounceTime(500),
      tap((action) => console.log('after', action)),
      mergeMap((action) => ajax
       .getJSON<Array<Repository>>(`https://api.github.com/users/${action.payload.user}/repos`)
       .pipe(
           map((response) => githubRepos.actions.fetchSuccess(response)),
           catchError((message: string) => of(githubRepos.actions.fetchFailed(message))),
       )
      )
    )

const epics = combineEpics(
  fetchReposEpic,
)

///////////////
// Selectors //
///////////////

const getRepos = (state: RootState) => state.GithubRepos.repos
const getLoading = (state: RootState) => state.GithubRepos.loading

const selectors = {
  getRepos,
  getLoading,
}

export type GithubReposAction = ActionsUnion<typeof githubRepos.actions>

export {
  githubRepos,
  selectors,
  epics,
}
