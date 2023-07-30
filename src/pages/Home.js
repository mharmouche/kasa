import datas from "../datas/logements.json";
import Thumb from "../components/Thumb";

import "./css/home.css"

const data0 = datas[0];
const data1 = datas[1];
const data2 = datas[2];
const data3 = datas[3];
const data4 = datas[4];
const data5 = datas[5];
const data6 = datas[6];
const data7 = datas[7];
const data8 = datas[8];

const Home = () => {
  return (
  <>
    <div className='ks-gallery'>
    <Thumb title={data0.title} cover={data0.cover}/>
    <Thumb title={data1.title} cover={data1.cover}/>
    <Thumb title={data2.title} cover={data2.cover}/>
    <Thumb title={data3.title} cover={data3.cover}/>
    <Thumb title={data4.title} cover={data4.cover}/>
    <Thumb title={data5.title} cover={data5.cover}/>
    <Thumb title={data6.title} cover={data6.cover}/>
    <Thumb title={data7.title} cover={data7.cover}/>
    <Thumb title={data8.title} cover={data8.cover}/>
    </div>
  </>);
};

export default Home;

