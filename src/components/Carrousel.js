import '../styles/carrousel.css'
import ArrowBack from '../assets/arrow_back_ios-24px 1.png'
import ArrowForward from '../assets/arrow_forward_ios-24px 1.png'

const Carrousel = ({pictures}) => {
    console.log("carroussel " + pictures[0])
    return (
    <>
        <div className="ks-carrousel">
        <img src={ArrowBack} alt="" className='ks-arrow-back'/>
        <img src={ArrowForward} alt="" className='ks-carrousel-forward'/>
        <img src={pictures[0]} alt="" className="ks-carrousel-img"/>
        </div>
    </>);
  };
  
  export default Carrousel;