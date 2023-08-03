import '../styles/tags.css'

import Tag from './Tag'


function TagList(props) {
  const tags = props.tags;
  const listItems = tags.map((tag) =>
    <div key={tag.toString()}>
      <Tag tagName = {tag} />
    </div>
  );
  return (
    <div className='ks-tags'>{listItems}</div>
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
