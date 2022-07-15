import React from 'react'

class CheckBoxPoint extends React.Component {
     constructor(props) {
          super(props)
          this.state = {
               id: this.props.id,
               value: ""
          }
          this.onTrigger = this.onTrigger.bind(this)
     }

     onTrigger = (event) => {
          this.setState({
               value:event.target.value
          })
          //Sends value and id of the CheckBoxPoint to the parent (CheckBoxDesign)
          this.props.parentCallback(event.target.id, event.target.value)
     }
     
     render() {
          return (
               <div>
                    <input type='text' id={this.state.id} placeholder='Checkbox Value' onChange={this.onTrigger} value={this.state.value}/>
               </div>
          )
     }
}
export default CheckBoxPoint