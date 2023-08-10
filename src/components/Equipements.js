import '../styles/equipements.css'
import Rectangle from './Rectangle'

import { useState } from "react";

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
      <>{number}<br></br></>
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
        <div className='ks-details'>
            <NumberList numbers={equipements} />
        </div>
      </div>
    </>
    
  )
};

export default Equipements;

