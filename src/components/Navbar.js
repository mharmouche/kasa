import '../styles/navbar.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
        <ul>
                <li>
                    <Link  to='/'>
                        Accueil
                    </Link>
                </li>
                <li>
                    <Link  to='/propos/'>
                        A propos
                    </Link>
                </li>
	</ul>
    </>
  )
};

export default Navbar;
