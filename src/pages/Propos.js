import Dropdown from '../components/Dropdown'
import Datas from '../datas/about.json'
import './css/propos.css'

const Propos = () => {
  return (
    <>
      <div className='ks-propos'>
        <Dropdown title = {Datas[0].title} text={Datas[0].txt} direction="up"/>
        <Dropdown title = {Datas[1].title} text={Datas[1].txt} direction="up"/>
        <Dropdown title = {Datas[2].title} text={Datas[2].txt} direction="up"/>
        <Dropdown title = {Datas[3].title} text={Datas[3].txt} direction="up"/> 
      </div>
         
    </>
  )
  
  
};

export default Propos;
