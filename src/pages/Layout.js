import {Outlet} from "react-router-dom";
import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import "./css/layout.css"

const Layout = () => {
  return (
    <div className='ks-layout'>
      <body className='ks-body'>
        <Header />
        <Banner />
        <Outlet />
      </body>
      <Footer />
    </div>
  )
};

export default Layout;

