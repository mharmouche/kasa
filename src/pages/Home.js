import datas from "../datas/logements.json";
import Thumb from "../components/Thumb";

import "./css/home.css"

/*const data0 = datas[0];
const data1 = datas[1];
const data2 = datas[2];
const data3 = datas[3];
const data4 = datas[4];
const data5 = datas[5];
const data6 = datas[6];
const data7 = datas[7];
const data8 = datas[8];*/

const Home = () => {
  return (
  <>
    <div className='ks-gallery'>
      {
        datas.map(data => {
          return ( <Thumb title={data.title} cover={data.cover} /> )
        })
      }
    </div>
  </>);
};

export default Home;

