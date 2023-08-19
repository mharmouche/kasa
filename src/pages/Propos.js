import Dropdown from '../components/Dropdown'
import Datas from '../datas/about.json'
import './css/propos.css'



const Propos = () => {

  const Dropdowns = Datas.map((Data) => <Dropdown title = {Data.title} key = {Data.title} text={Data.txt} />);
  return (
    <>
      <div className='ks-propos'>
        {Dropdowns}
      </div>
         
    </>
  )
  
  
};

export default Propos;
