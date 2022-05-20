import Card from './Card';

function StudentList(props) {
  let my_student_components = props.my_students.map((s, i) => {
    let shouldShow = s.id === props.idOfStudentToShow;

    return (
      <div onClick={() => props.handleClick(s.id)}>
        <Card
          key={i}
          shouldShow={shouldShow}
          handleClick={props.handleClick}
          my_single_student={s}
        />
      </div>
    );
  });
  return <>{my_student_components}</>;
}
export default StudentList;
