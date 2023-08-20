import '../styles/description.css'
import Rectangle from './Rectangle'

import { useState } from "react";

const Description = ({description}) => {
  const [direction, setDirection] = useState('up');
    const toggleDirection = () => {
      setDirection ( direction === 'up' ? 'down' : 'up' );
      console.log('direction : ' , direction)
    }
  //const direction = "up"
  return (

      <div className="ks-logement-description">
        <div onClick={toggleDirection}><Rectangle text="Description"  direction={direction}/></div>
        {direction === 'up' ? <div className='ks-details'>{description}</div> : null}
      </div>

  )
};

export default Description;
