import React from 'react';
import data from '../../taskData.js';
import OutgoingTasksTable from './outgoingTasksTable.jsx';
import SelectedTask from './selectedTask.jsx';

class TaskDisplay extends React.Component {
     constructor() {
          super()
          this.state = {
               data: data,
               selectedTask: data[0]
          }
          this.handleCallback = this.handleCallback.bind(this)
     }
     
     handleCallback = (id) => {
          this.setState({selectedTask: data[id]})
     }


     render() {
          return (
               <div>
                    <OutgoingTasksTable tasks={this.state.data} parentCallback={this.handleCallback}/>
                    <SelectedTask task={this.state.selectedTask} />
               </div>
          )
     }
}
export default TaskDisplay