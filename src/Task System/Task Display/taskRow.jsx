import React from 'react';

class TaskRow extends React.Component {
     handleClick = () => {
          this.props.parentCallback(this.props.id)
     }
     
     render() {
          return (
               <tr onClick={this.handleClick}>
                    <td>{this.props.task}</td>
                    <td>{this.props.date}</td>
                    <td>{this.props.importance}</td>
               </tr>
          )
     }
}
export default TaskRow