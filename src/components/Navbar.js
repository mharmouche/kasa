import '../styles/navbar.css'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'


const Navbar = () => {
    const location = useLocation();
    const classLink = 'ks-nav-link';
    const classLinkActive = 'ks-nav-link-active';
    const classLink1 = (location.pathname === '/') || (location.pathname === '') ? classLinkActive : classLink;
    const classLink2 = (location.pathname === '/propos/') || (location.pathname === '/propos')  ? classLinkActive : classLink;
    
  return (
    <nav className='ks-nav'>
        <div className='ks-nav-div'  >
                <Link  className={classLink1} to='/'>Accueil</Link>
        </div>
        <div className='ks-nav-div' >
                <Link className={classLink2}  to='/propos/'>
                    A Propos
                </Link>
        </div> 
    </nav>
  )
};

export default Navbar;

