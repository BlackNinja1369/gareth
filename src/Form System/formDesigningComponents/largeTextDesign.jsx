import React from 'react';

class LargeTextDesign extends React.Component {
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
          //parses the value of the input box to the parent
          this.props.parentCallback(newValue)
     }
     
     render() {
          return (
               <div>
                    <label>
                         {/*An input box for the label title*/}
                         <input type="text" value={this.state.value} onChange={this.onChange}/>
                         <br/>Large text response goes here........
                         <br/>.....................................................................
                    </label>
               </div>
          )
     }
}
export default LargeTextDesign