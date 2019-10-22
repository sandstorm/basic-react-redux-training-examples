import { Epic, combineEpics } from 'redux-observable'
import { ofType } from '@martin_hotell/rex-tils'
import { mergeMap, map } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'

import { Action, RootState } from 'Redux/Store'
import { ActionTypes, actions} from './index'

type MyEpic = Epic<Action, Action, RootState, never>

const fetchReposEpic: MyEpic = (action$) => action$
  .pipe(
    ofType(ActionTypes.REPOS_FETCH),
    mergeMap((action) => ajax
     .getJSON(`https://api.github.com/users/${action.payload.user}/repos`)
     .pipe(
         map((response) => actions.fetchSuccess(response)),
         // catchError((message: string) => actions.fetchFailed(message)),
     )
    )
  )

export const epic = combineEpics(
  fetchReposEpic
)
