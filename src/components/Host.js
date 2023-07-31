
const Host = ({host}) => {
  return (
    <>
        <span> {host.name}  </span>
        <img src={host.picture} alt=""/>
    </>
  )
};

export default Host;
