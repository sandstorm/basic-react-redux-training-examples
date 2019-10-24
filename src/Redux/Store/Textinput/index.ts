import { createSlice, PayloadAction } from 'redux-starter-kit'

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

export {
  textInput,
  selectors,
}
