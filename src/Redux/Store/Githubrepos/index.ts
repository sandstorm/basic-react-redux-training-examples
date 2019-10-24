import { createSlice, PayloadAction } from 'redux-starter-kit'
import { combineEpics } from 'redux-observable'
import { ofType } from '@martin_hotell/rex-tils'
import { mergeMap, map, filter } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'
import { ActionsUnion } from '@martin_hotell/rex-tils'


import { RootState, RootAction, RootEpic } from 'Redux/Store'

///////////
// Types //
///////////

export type Repository = {
  id: string
  name: string
  html_url: string
}


///////////////////////
// Reducer + Actions //
///////////////////////

type ReposFetch = {
  user: string
}

const initialState = {
  loading: false,
  repos: []
}

const githubRepos = createSlice({
  name: 'githubRepos',
  initialState,
  reducers: {
    fetch: (state, action: PayloadAction<{ user: string }>) => {
      state.loading = true
    },
    fetchSuccess: (state, action) => {
      state.loading = false
      // TODO add repos
    },
    fetchFailed: (state, action) => {
      state.loading = false
      // TODO add error
    }
  }
})

///////////
// Epics //
///////////

const fetchReposEpic: RootEpic = (action$) => action$
  .pipe(
      filter((action) => action.type === githubRepos.actions.fetch.type),
      mergeMap((action: PayloadAction<ReposFetch>) => ajax
       .getJSON<Array<Repository>>(`https://api.github.com/users/${action.payload.user}/repos`)
       // .pipe(
           // map((response) => actions.fetchSuccess(response)),
           // // catchError((message: string) => actions.fetchFailed(message)),
       // )
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

type GithubReposAction = ActionsUnion<typeof githubRepos.actions>

export {
  githubRepos,
  selectors,
  GithubReposAction,
  epics,
}
