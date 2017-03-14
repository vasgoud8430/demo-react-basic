import React from 'react';
import {Link} from 'react-router';

class CoursesPage extends React.Component{
  constructor(props, context){
    super(props,context);

    this.state = {
      course : {title:""}
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onSaveClick = this.onSaveClick.bind(this);
  }
  onTitleChange(event){
    console.log('In title change');
    const course = {title: event.target.value};
    this.setState({course: course});
  }
  onSaveClick(){
    console.log('Save', this.state.course.title);
  }

  render(){
    return (
      <div>
        <h1>Courses Page</h1>
        <h2>Add Course</h2>
        <input type="text" onChange={this.onTitleChange} value={this.state.course.title}/>
        <input type="submit" value="Save" onClick={this.onSaveClick}/>
      </div>
    );
  }
}

export default CoursesPage;
