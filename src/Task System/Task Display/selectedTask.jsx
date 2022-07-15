import React from 'react';

class SelectedTask extends React.Component {
     render() {
          return (
               <div>
                    <h1>Selected Task Details</h1>
                    <p>name: {this.props.task.name}</p>
                    <p>Date: {this.props.task.completionDate}</p>
                    <p>Importance: {this.props.task.importance}</p>
                    <p>Description: {this.props.task.description}</p>
               </div>
          )
     }
}
export default SelectedTask