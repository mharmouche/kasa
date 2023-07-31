import '../styles/carrousel.css'

const Carrousel = ({pictures}) => {
    console.log("carroussel " + pictures[0])
    return (
    <>
        <div className="ks-carrousel">
            <img src={pictures[0]} alt="" className="ks-carrousel-img"/>
        </div>
    </>);
  };
  
  export default Carrousel;