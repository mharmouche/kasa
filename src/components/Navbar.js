import '../styles/navbar.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className='ks-nav'>
        <div className='ks-nav-div'>
            <p className='ks-nav-p'>
                <Link  to='/'>Accueil</Link>
            </p>
        </div>
        <div className='ks-nav-div'>
            <p className='ks-nav-p'>
                <Link  to='/propos/'>
                    A Propos
                </Link>
            </p>
        </div> 
    </nav>
  )
};

export default Navbar;

