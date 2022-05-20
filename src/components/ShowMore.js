function ShowMore(props) {
  console.log('Show More Props', props);

  return (
    <div onClick={() => props.handleClick(props.some_data.id)}>
      Age: {props.some_data.details.age}, height: {props.some_data.details.height}
    </div>
  );
}

export default ShowMore;
