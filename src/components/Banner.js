import '../styles/banner.css'

import { useLocation } from 'react-router-dom'
import photo from '../assets/Mask Group.png'


const Banner = () => {

  const locationSet = new Set(['', '/', '/propos', '/propos/'])
  const location = useLocation();
  const isInSet = locationSet.has(location.pathname) 

  if ( !isInSet ) {return( <>  </> ) }
  return (
    <div className='ks-banner'>
      	<img className='ks-banner-img' src={photo} alt="Chez vous, partout et ailleurs" />
        <span className='ks-banner-txt'> Chez vous, partout et ailleurs  </span>
    </div>
  )
};

export default Banner;
