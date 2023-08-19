import '../styles/equipements.css'
import Rectangle from './Rectangle'

import { useState } from "react";

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number, index) =>
      <span key={"equipement " + index}>{number}<br></br></span>
  );
  return (
    <>{listItems}</>
  );
}

const Equipements = ({equipements}) => {
  const [direction, setDirection] = useState('up');
    const toggleDirection = () => {
      setDirection ( direction === 'up' ? 'down' : 'up' );
      console.log('direction : ' , direction)
    }
  return (
    <>
      <div className='ks-logement-equipement'  onClick={toggleDirection}>
        <Rectangle text="Equipements"  direction={direction}/>
        {
          direction === 'up' ? <div className='ks-details'> <NumberList numbers={equipements} /> </div> : null
        }
      </div>
    </>
    
  )
};

export default Equipements;

