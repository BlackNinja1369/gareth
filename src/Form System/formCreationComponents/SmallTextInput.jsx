import React from 'react';

class SmallTextInput extends React.Component {     
     //Submits the id and value of the textInput back to App()
     onTrigger = (event) => {
          this.props.parentCallback(event.target.id, event.target.value)
     }
     render() {
          return (
               <div>
                    {/*Creates the text-input component*/}
                    <input type="text"
                         id={this.props.id}  
                         name={this.props.name} 
                         placeholder={this.props.name}
                         onChange={this.onTrigger} />
                    <br/>
               </div>
          )
     }
}

export default SmallTextInput;