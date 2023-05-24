import React from 'react'



const TabButton = ({onClick,label}) => {
  return (
    <button
      className="tabbutton"
       onClick={onClick}
    >
      <span>{label}</span>
    </button>
  )
}

export default TabButton
