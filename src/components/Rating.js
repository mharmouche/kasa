import StarActive from '../assets/star-active 1.png'
import StarInactive from '../assets/star-inactive 1.png'

import '../styles/rating.css'

const Rating = ({rating}) => {
  const n = rating;
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if(i<n){
      stars.push(StarActive)
    }else{
      stars.push(StarInactive)
    }  
  }

  //const stars = [StarActive,StarActive,StarActive,StarInactive,StarInactive];
  return (
    <div className='ks-rating-stars' >
        {
          stars.map((name) => {
            return (
              <img src={name} alt='' className='ks-rating-star'/>
            )
          })
        }
    </div>
  )
};

export default Rating;
