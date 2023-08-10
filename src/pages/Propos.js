import Dropdown from '../components/Dropdown'
import Datas from '../datas/about.json'
import './css/propos.css'

import { useState } from "react";


const Propos = () => {
  const [direction, setDirection] = useState('up');
  const toggleDirection = () => {
    setDirection ( direction === 'up' ? 'down' : 'up' );
    console.log('direction : ' , direction)
  }
  const Dropdowns = Datas.map((Data) => <Dropdown title = {Data.title} text={Data.txt} direction="up"/>);
  return (
    <>
      <div className='ks-propos'>
        {Dropdowns}
      </div>
         
    </>
  )
  
  
};

export default Propos;
