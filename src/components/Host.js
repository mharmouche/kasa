import "../styles/host.css"

const Host = ({host}) => {
  return (
    <div className="ks-host">
        <span> {host.name}  </span>
        <img src={host.picture} alt=""/>
    </div>
  )
};

export default Host;
