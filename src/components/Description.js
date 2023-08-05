import '../styles/description.css'
import Rectangle from './Rectangle'

const Description = ({description}) => {
  const direction = "up"
  return (

      <div className="ks-logement-description">
        <Rectangle text="Description"  direction={direction}/>
        {direction === 'up' ? <div className='ks-details'>{description}</div> : null}
      </div>

  )
};

export default Description;
