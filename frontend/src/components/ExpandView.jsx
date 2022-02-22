export default function ExpandView({ id, selected, setSelected }) {

  function handleClick () {
    console.log('selected: ', id)
    setSelected(id);
  }

  return(
    <button type="button" onClick={handleClick}>Expand</button>
  );
}