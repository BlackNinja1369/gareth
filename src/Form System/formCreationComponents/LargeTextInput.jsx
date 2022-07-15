import React from 'react';

class LargeTextInput extends React.Component {
     //Submits the id and value of the textInput back to App()
     onTrigger = (event) => {
          this.props.parentCallback(event.target.id, event.target.value)
     }

     //Sets box height equal to the size of the scroll-bar, making it "auto fit" the text
     handleKeyDown = (event) => {
          event.target.style.height = "inherit"
          event.target.style.height = `${event.target.scrollHeight}px`
     }

     render() {
          return (
               <div>
                    {/*Creates the textarea component*/}
                    <textarea type="text"
                         id={this.props.id}  
                         name={this.props.name} 
                         placeholder={this.props.name}
                         onKeyDown={this.handleKeyDown}
                         onChange={this.onTrigger} />
                    <br/>
               </div>
          )
     }
}

export default LargeTextInput;