import '../styles/description.css'

const Description = ({description}) => {
  return (
    <>
      <div className="ks-logement-description">
        <div> Description </div>
        <div> <span > {description}  </span> </div>
      </div>
      
    </>
  )
};

export default Description;
