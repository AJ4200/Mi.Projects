import React from 'react'

interface TabButtonProps {
  label: string
  onClick: () => void
}

const TabButton: React.FC<TabButtonProps> = ({onClick,label}) => {
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
