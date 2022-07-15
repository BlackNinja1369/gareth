import React from 'react';
import TaskRow from './taskRow';

class OutgoingTasksTable extends React.Component {
     render() {
          const taskRows = this.props.tasks.map(item => (<TaskRow key={item.id} id={item.id} task={item.name} date={item.completionDate} importance={item.importance} parentCallback={this.props.parentCallback}/>))
          return (
               <table>
                    <tbody>
                         <tr>
                              <td>Task</td>
                              <td>Completion Date</td>
                              <td>Importance</td>
                         </tr>
                         {taskRows}
                    </tbody>
               </table>
          )
     }
}
export default OutgoingTasksTable