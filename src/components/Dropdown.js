import Rectangle from './Rectangle';
import '../styles/dropdown.css'

import { useState } from "react";


const Dropdown = ({title, text}) => {
    const [direction, setDirection] = useState('up');
    const toggleDirection = () => {
      setDirection ( direction === 'up' ? 'down' : 'up' );
      console.log('direction : ' , direction)
    }
    return (
    <>
        <div className='ks-dropdown-box'  >
            <div onClick={toggleDirection} ><Rectangle text = {title}  direction={direction}/></div>
            {direction === 'up' ? <div className='ks-dropdown-details'>{text}</div> : null}
        </div>
        
    </>);
  };
  
  export default Dropdown;