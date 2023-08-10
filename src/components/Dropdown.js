import Rectangle from './Rectangle';
import '../styles/dropdown.css'

const Dropdown = ({title, text, direction}) => {

    return (
    <>
        <div className='ks-dropdown-box'>
            <Rectangle text = {title}  direction={direction}/>
            {direction === 'up' ? <div className='ks-dropdown-details'>{text}</div> : null}
        </div>
        
    </>);
  };
  
  export default Dropdown;