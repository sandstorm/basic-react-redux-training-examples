import React from 'react'
import { connect } from 'react-redux'

import { RootState, selectors, actions } from 'Redux/Store'

const mapStateToProps = (state: RootState) => ({
  inputValue: selectors.Textinput.getInputValue(state),
})

const mapDispatchToProps = {
  changeValue: actions.Textinput.changeInput
}

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & {
}

const ControlledInputRedux = React.memo(({
  inputValue,
  changeValue,
}: Props) => {
  return (
    <input onChange={(e) => changeValue({ newValue: e.currentTarget.value })} type='text' value={inputValue} />
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(ControlledInputRedux)
