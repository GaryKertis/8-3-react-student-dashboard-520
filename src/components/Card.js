import ShowMore from './ShowMore';

function Card({ shouldShow, handleClick, my_single_student }) {
  console.log(shouldShow, my_single_student);
  return (
    <div>
      {my_single_student.name}
      {shouldShow ? <ShowMore some_data={my_single_student} handleClick={handleClick} /> : null}
    </div>
  );
}

export default Card;
