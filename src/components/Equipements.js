import '../styles/equipements.css'
import Rectangle from './Rectangle'

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
      <>{number}<br></br></>
  );
  return (
    <>{listItems}</>
  );
}

const Equipements = ({equipements}) => {
  return (
    <>
      <div className='ks-logement-equipement'>
        <Rectangle text="Equipements"  direction="up"/>
        <div className='ks-details'>
            <NumberList numbers={equipements} />
        </div>
      </div>
    </>
    
  )
};

export default Equipements;

