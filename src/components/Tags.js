import Tag from './Tag'


function TagList(props) {
  const tags = props.tags;
  const listItems = tags.map((tag) =>
    <li key={tag.toString()}>
      <Tag tagName = {tag} />
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}


const Tags = ({tags}) => {
  return (
    <>
        <TagList tags={tags} />
        
    </>
  )
};

export default Tags;
