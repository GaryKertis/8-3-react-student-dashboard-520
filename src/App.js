import React from 'react';
import StudentList from './components/StudentList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      students: [
        { id: 123, name: 'Gary', details: { age: 73, height: '6ft' } },
        { id: 124, name: 'Bary', details: { age: 69, height: '4ft 3inches' } },
      ],
      idOfStudentWhoIsShowing: null,
    };
  }

  handleClick = (id) => {
    this.setState({ idOfStudentWhoIsShowing: id });
  };

  render() {
    return (
      <div>
        <h1>Student Dashboard</h1>
        <StudentList
          my_students={this.state.students}
          idOfStudentToShow={this.state.idOfStudentWhoIsShowing}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
