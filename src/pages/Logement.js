import datas from "../datas/logements.json";



const Logement = () => {
  const queryParameters = new URLSearchParams(window.location.search)
  const id = queryParameters.get("id")
  
  return <h1>Détails de votre logement, id = {id}</h1>;
};

export default Logement;

