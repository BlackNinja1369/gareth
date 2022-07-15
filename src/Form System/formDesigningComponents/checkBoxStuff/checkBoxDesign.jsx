import React from 'react';
import CheckBoxPoint from './checkBoxPoint';

class CheckBoxDesign extends React.Component {
     constructor(props) {
          super(props)
          this.state = {
               data: {},
               //Defining the first check box label input
               points: [{id:0, value:""}],
               nextPointId: 1
          }
          this.handleCallback = this.handleCallback.bind(this)
          this.newPointCallback = this.newPointCallback.bind(this)
     }

     onTrigger(parsingData) {
          //parses the mapped data into the parent element
          this.props.parentCallback(parsingData)
     }

     handleCallback = (id, label) => {
          const newData = this.state.data
          newData[id] = label
          this.setState({
               data: newData
          })
          //Each label point is mapped to an array, in form - [{id:label}, {id:label}, {id:label}]
          const parsingData = []
          for (const [key, value] of Object.entries(newData)) {
               parsingData.push({[key]: value})
          }
          this.onTrigger(parsingData)
     }

     newPointCallback = () => {
          const newPoints = this.state.points
          //Defining the addition of a new point, using nextPointId as the id
          const newPoint = {id:this.state.nextPointId, value:""}
          //Defining the increment of nextPointID
          const newNextPointId = this.state.nextPointId + 1
          newPoints.push(newPoint)
          //Updating the data
          this.setState({
               points: newPoints,
               nextPointId: newNextPointId
          })
     }
     
     render() {
          //maps each poin to a CheckBoxPoint component and assigns them to an array
          const renderPoints = this.state.points.map(item => (<CheckBoxPoint key={item.id} id={item.id} value={item.value} parentCallback={this.handleCallback}/>))
          return (
               //Renders the array of components and the NewPoint component
               <div>
                    {renderPoints}
                    <button onClick={this.newPointCallback}>New Check Box</button>
               </div>
          )
     }
}
export default CheckBoxDesign