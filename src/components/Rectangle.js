import '../styles/rectangle.css'
import ArrowUp from '../assets/arrow_back_ios-24px 2.png'
import ArrowDown from '../assets/arrow_back_ios-24px 3.png'

const Rectangle = ({text, direction}) => {
  return (
    <>
      <div className='ks-rectangle'>
        <div>
          <span>  {text} </span>
        </div>
        <div>
          <img src={direction === 'up' ? ArrowUp  : ArrowDown} alt =''/>
        </div>   
      </div>
    </>
    
  )
};

export default Rectangle;
