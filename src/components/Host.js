import "../styles/host.css"

const Host = ({host}) => {
  return (
    <div className="ks-host">
        <p>{host.name.replace( " ",  "\n" )}</p> 
        <img src={host.picture} alt=""/>
    </div>
  )
};

export default Host;
