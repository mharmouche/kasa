import '../styles/banner.css'

import { useLocation } from 'react-router-dom'
import photo1 from '../assets/IMG.png'
import photo2 from '../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png'


const Banner = () => {

  const locationSet = new Set(['', '/', '/propos', '/propos/'])
  const location = useLocation();
  const isInSet = locationSet.has(location.pathname) 

  if ( !isInSet ) {return( <>  </> ) }

  const locationSetHome = new Set(['', '/'])
  const isInSetHome = locationSetHome.has(location.pathname) 
  if ( isInSetHome ) {
    return (
      <div className='ks-banner'>
          <img className='ks-banner-img' src={photo1} alt="Chez vous, partout et ailleurs" />
          <span className='ks-banner-txt'> Chez vous, partout et ailleurs  </span>
      </div>
    )
  }

  return (
    <div className='ks-banner'>
      	<img className='ks-banner-img' src={photo2} alt="Chez vous, partout et ailleurs" />
    </div>
  )
};

export default Banner;
