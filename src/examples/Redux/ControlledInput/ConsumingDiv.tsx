import React from 'react'
import { connect } from 'react-redux'

import { RootState, selectors } from 'Redux/Store'

const mapStateToProps = (state: RootState) => ({
  inputValue: selectors.Textinput.getInputValue(state)
})

const mapDispatchToProps = {}


type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & {
}

const ConsumingDiv = ({
  inputValue
}: Props) => {
  return (
    <div style={{
      margin: '10px',
      padding: '20px',
      border: '1px solid green',
    }}>
    <p>Consuming div which is no child descendant of our content tree</p>
    <p><b>Value:</b> {inputValue}</p>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(ConsumingDiv))
