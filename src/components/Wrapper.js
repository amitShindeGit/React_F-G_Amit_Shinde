import React from 'react'

//Simple Wrapper
const Wrapper = (props) => {
  return (
    <div style={{ maxWidth: '1470px', margin : '0 auto' }}>{props.children}</div>
  )
}

export default Wrapper