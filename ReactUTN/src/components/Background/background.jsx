import React from 'react'

const background = ({children}) => {
  return (
    <div style={{backgroundColor: 'black'}}>
      {children}
    </div>
  )
}

export default background
