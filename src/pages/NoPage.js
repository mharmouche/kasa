import './css/NoPage.css'
import NoPageImg from '../assets/404.png'


const NoPage = () => {
  return (
    <div className='ks-nopage'>
      <div><img  src={NoPageImg} alt=''  /></div>
      <div><h1>Oups! La page que vous demandez n'existe pas.</h1></div>
      <div><a href='/'>Retourner sur la page d’accueil</a></div>
    </div>
  )
  
};

export default NoPage;

