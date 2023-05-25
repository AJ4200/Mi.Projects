import { useState, React} from 'react'


const TabButton = ({onClick,label}) => {

  const [ActiveTab,setActiveTab] = useState(false);

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
