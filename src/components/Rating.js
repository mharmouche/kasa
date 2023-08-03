import StarActive from '../assets/star-active 1.png'
import StarInactive from '../assets/star-inactive 1.png'


const Rating = ({rating}) => {
  const n = {rating};
  for (let i = 0; i < n; i++) {
    <img src={StarActive} alt=''   />
  }
  return (
    <>
        <span> Note = {rating} /5  </span>
        
        <img src={StarActive} alt=''   />
        <img src={StarInactive} alt=''   />
    </>
  )
};

export default Rating;
