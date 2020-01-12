import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ActionsUnion } from '@martin_hotell/rex-tils'

import { RootState } from 'Redux/Store'


const textInput = createSlice({
  name: 'textInput',
  initialState: { value: '' },
  reducers: {
    changeInput: (state, action: PayloadAction<{ newValue: string }>) => {
      state.value = action.payload.newValue
    }
  }
})

const getInputValue = (state: RootState) => state.Textinput.value

const selectors = {
  getInputValue,
}

export type TextInputAction = ActionsUnion<typeof textInput.actions>

export {
  textInput,
  selectors,
}
