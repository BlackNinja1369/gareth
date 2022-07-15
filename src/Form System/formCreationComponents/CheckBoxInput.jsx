import React from 'react'

class CheckBoxInput extends React.Component {
     constructor() {
          super()
          //Definition of an empty state
          this.state = {}
          this.onTrigger = this.onTrigger.bind(this)
     }

     //Called onChange
     onTrigger = (event) => {
          //Updates/creates state for checked boxes
          const stateUpdate = this.state
          stateUpdate[event.target.id] = event.target.checked
          this.setState({
               [event.target.id]: event.target.checked
          })
          //Sends data to App class
          this.props.parentCallback(this.props.id, stateUpdate)
     }

     render() {
          //Maps all the options to an array as a series of labelled checkbox inputs
          const optionInputs = this.props.labels.map(item => (
                    <div key={item.id}>
                         <label>
                              <input type="checkbox" id={item.id} defaultChecked={false} checked={this.state.key} onChange={this.onTrigger}/>
                              {item.label}
                         </label>
                    </div>
               )
          )
          return (
               <div>
                    {/*Array of options*/}{optionInputs}
               </div>
          )
               
     }
}

export default CheckBoxInput