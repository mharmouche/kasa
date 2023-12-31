import { Link } from "react-router-dom";
import "../styles/thumb.css"

//const title = "Appartement cosy"
//const cover = "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"

const Thumb = ({id, title, cover}) => {
  return (
  <>
    <Link to={'/logement?id='+id} className='ks-thumb'>
      <img className='ks-thumb-cover' src={cover} alt="Chez vous, partout et ailleurs" />
      <span className='ks-thumb-title'> 
        {title.substring(0,title.length/2) + title.substring(title.length/2).replace( " ",  "\n" )}  
      </span>
    </Link>
  </>);
};

export default Thumb;

