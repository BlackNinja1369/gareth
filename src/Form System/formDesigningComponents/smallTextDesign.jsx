import React from 'react';

class SmallTextDesign extends React.Component {
     constructor(props) {
          super(props)
          this.state = {
               value: ""
          }
          this.onChange = this.onChange.bind(this)
     }

     onChange = (event) => {
          const newValue = event.target.value
          this.setState({
               value: newValue
          })
          //parses the input value
          this.props.parentCallback(newValue)
     }
     
     render() {
          return (
               <div>
                    <label>
                         {/*Takes in the input*/}
                         <input type="text" value={this.state.value} onChange={this.onChange}/>
                         <br/>Small text response goes here........
                    </label>
               </div>
          )
     }
}
export default SmallTextDesign