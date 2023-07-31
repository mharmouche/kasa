import datas from "../datas/logements.json";

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const Logement = () => {
  const queryParameters = new URLSearchParams(window.location.search)
  const id = queryParameters.get("id").toString()
  const dataLogement = datas.filter(data => data.id === id);
  //console.log(datas)
  //console.log(dataLogement[0])
  const title = dataLogement[0].title
  const cover = dataLogement[0].cover
  const pictures = dataLogement[0].pictures
  const description = dataLogement[0].description
  const host = dataLogement[0].host
  const rating = dataLogement[0].rating
  const location = dataLogement[0].location
  const equipments = dataLogement[0].equipments
  const tags = dataLogement[0].tags 
  return (
    <>
      <h1>Détails de votre logement </h1>
      <p>id = {id}</p> 
      <p>title = {title}</p> 
      <p>cover = {cover}</p> 
      <p>pictures = 
        <NumberList numbers={pictures} /></p>
      <p>description = {description}</p> 
      
      <p>hostname = {host.name}</p> 
      <p>hostpic = {host.picture}</p> 

      <p>rating = {rating}</p> 
      <p>location = {location}</p> 
      <p>equipments = 
        <NumberList numbers={equipments} /></p>
      
      <p>
        tags <NumberList numbers={tags} /></p>
      

    </>
  );
};

export default Logement;

