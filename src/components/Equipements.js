import '../styles/equipements.css'
import Rectangle from './Rectangle'

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

const Equipements = ({equipements}) => {
  return (
    <>
      <div className='ks-logement-equipement'>
        <Rectangle text="Equipements"  direction="up"/>
        <div>
            <NumberList numbers={equipements} />
        </div>
      </div>
    </>
    
  )
};

export default Equipements;

