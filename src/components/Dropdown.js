import Rectangle from './Rectangle';
import '../styles/dropdown.css'

const Dropdown = ({title, text, direction}) => {

    index = index % l;
    return (
    <>
        <Rectangle text = {title}  direction={direction}/>
        {direction === 'up' ? <div className='ks-details'>{text}</div> : null}
    </>);
  };
  
  export default Dropdown;