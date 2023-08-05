import '../styles/description.css'
import Rectangle from './Rectangle'

const Description = ({description}) => {
  return (

      <div className="ks-logement-description">
        <Rectangle text="Description"  direction="dow"/>
        <div> {description}  </div>
      </div>

  )
};

export default Description;
