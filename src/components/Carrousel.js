import '../styles/carrousel.css'
import ArrowBack from '../assets/arrow_back_ios-24px 1.png'
import ArrowForward from '../assets/arrow_forward_ios-24px 1.png'
import { useState } from "react";


//var index = 6;



const Carrousel = ({pictures}) => {
    //console.log("carroussel " + pictures[0]);
    const l = pictures.length;

    const [index, setIndex] = useState(0)


    const nextImageMinus = () => {
      //index = (index - 1 + l )  % l;
      setIndex ( (index - 1 + l )  % l );
      console.log("click Minus ", index);
    }

    const nextImagePlus = () => {
      //index = (index + 1 )  % l;
      setIndex ( (index + 1 )  % l );
      console.log("click Plus ", index);
    }

    //index = index % l;
    return (
    <>
        <div className="ks-carrousel">
          <div ><img src={ArrowBack} alt="" className='ks-arrow-back' onClick={nextImageMinus}/></div>
          <div ><img src={ArrowForward} alt="" className='ks-carrousel-forward' onClick={nextImagePlus}/></div>
          <img src={pictures[index]} alt="" className="ks-carrousel-img"/>
          <span className='ks-carrousel-index'> {index + 1} / {l} </span>
        </div>
    </>);
  };
  
  export default Carrousel;

