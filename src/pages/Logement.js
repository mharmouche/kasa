import datas from "../datas/logements.json";



const Logement = () => {
  const queryParameters = new URLSearchParams(window.location.search)
  const id = queryParameters.get("id")
  const dataLogement = datas.filter(data => data.id === id);
  return (
    <>
      <h1>Détails de votre logement </h1>
      <p>id1 = {id}</p> 
      <p>id2 = {dataLogement.id}</p> 
      <p>title = {dataLogement.title}</p> 
      <p>cover = {dataLogement.cover}</p> 
      <p>pictures = {dataLogement.pictures}</p> 
      <p>description = {dataLogement.description}</p> 
      <p>host = {dataLogement.host}</p> 
      <p>rating = {dataLogement.rating}</p> 
      <p>location = {dataLogement.location}</p> 
      <p>equipments = {dataLogement.equipments}</p> 
      <p>tags = {dataLogement.tags}</p> 
    </>
  );
};

export default Logement;

