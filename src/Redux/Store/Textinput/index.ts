import { createAction, ActionsUnion } from '@martin_hotell/rex-tils'

import { RootState } from '../index'


///////////
// STATE //
///////////

export type State = { value: string }
export const initialState: State = { value: '' }

/////////////
// ACTIONS //
/////////////

export enum ActionTypes {
  INPUT_CHANGE = 'Textinput/INPUT_CHANGE',
}

export const actions = {
  changeInput: (newValue: string) => createAction(ActionTypes.INPUT_CHANGE, { newValue }),
}

export type Action = ActionsUnion<typeof actions>

/////////////
// REDUCER //
/////////////

export const Reducer= (
  state: State = initialState,
  action: Action
): State => {
  switch (action.type) {
    case ActionTypes.INPUT_CHANGE: {
      const { newValue } = action.payload
      return { value: newValue }
    }

    default: {
      return state
    }
  }
}

///////////////
// SELECTORS //
///////////////

const getInputValue = (state: RootState) => state.Textinput.value

export const selectors = {
  getInputValue,
}
