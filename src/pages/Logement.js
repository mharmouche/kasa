import "./css/logement.css"
import datas from "../datas/logements.json";

import Carrousel from "../components/Carrousel";
import Title from "../components/Title";
import Location from "../components/Location";
import Tags from "../components/Tags";
import Host from "../components/Host";
import Rating from "../components/Rating";
import Description from "../components/Description";
import Equipements from "../components/Equipements";


const Logement = () => {
  const queryParameters = new URLSearchParams(window.location.search)
  const id = queryParameters.get("id").toString()
  const dataLogement = datas.filter(data => data.id === id);
  //console.log(datas)
  //console.log(dataLogement[0])
  const title = dataLogement[0].title
  //const cover = dataLogement[0].cover
  const pictures = dataLogement[0].pictures
  const description = dataLogement[0].description
  const host = dataLogement[0].host
  const rating = dataLogement[0].rating
  const location = dataLogement[0].location
  const equipements = dataLogement[0].equipments
  const tags = dataLogement[0].tags 

  return (
    <>
      <Carrousel pictures={pictures}/>
      <div className="ks-logement-section1">
        <div>
          <Title title={title} />
          <Location location={location} />
          <Tags tags={tags}/>
        </div>
        <div>
          <Host host={host}/>
          <Rating rating ={rating}/>
        </div>
      </div>
      <div className="ks-logement-section2">
        <Description description={description}/>
        <Equipements equipements={equipements}/>
      </div>
    </>
  );
};

export default Logement;

