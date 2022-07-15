import React from 'react';
import LargeTextInput from '../../Form System/formCreationComponents/LargeTextInput';


class TaskCreator extends React.Component {
     constructor() {
          super()
          this.state = {
               name: "",
               completionDate: "",
               importance: 5,
               description: ""
          }
          this.handleCallback = this.handleCallback.bind(this)
          this.handleChange = this.handleChange.bind(this)
          this.handleSubmit = this.handleSubmit.bind(this)
     }

     handleChange = (event) => {
          this.setState({[event.target.name]:event.target.value})
     }

     handleCallback = (id, value) => {
          this.setState({description: value})
     }
     
     handleSubmit() {
          console.log(this.state)
     }


     render() {
          return (
               <div>
                    <span>Task Name: <input type="text" name="name" onChange={this.handleChange}/></span><br/>

                    <span>Importance: <input type="range" min="1" max="5" name="importance" onChange={this.handleChange}/></span><br/>

                    <span>Description: <LargeTextInput type="text"
                         id="0"  
                         name="description" 
                         parentCallback={this.handleCallback}
                         /></span><br/>

                    <span>Date of Completion: <input type="date" name="completionDate" onChange={this.handleChange}/></span><br/>
                    <button onClick={this.handleSubmit}>Submit</button>
               </div>
          )
     }
}
export default TaskCreator