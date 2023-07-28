import '../styles/banner.css'

import { useLocation } from 'react-router-dom'


const Banner = () => {

  const locationSet = new Set(['', '/', '/propos', '/propos/'])
  const location = useLocation();
  const isInSet = locationSet.has(location.pathname) 

  if ( !isInSet ) {return( <>  </> ) }
  return (
    <>
        <span> Ici c'est un Banner  </span>
    </>
  )
};

export default Banner;
