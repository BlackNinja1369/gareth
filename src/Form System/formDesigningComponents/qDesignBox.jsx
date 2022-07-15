import React from 'react'
import Dropdown from './dropdown.jsx'
import CheckBoxDesign from './checkBoxStuff/checkBoxDesign.jsx';
import SmallTextDesign from './smallTextDesign.jsx';
import LargeTextDesign from './largeTextDesign.jsx';

class QDesignBox extends React.Component {
     constructor(props) {
          super(props)
          this.state = {
               //Types of questions for dropdown list
               questionTypes: [
                    {
                         id:0,
                         title:"Small Text",
                         selected:false,
                         key:"questionTypes"
                    },
                    {
                         id:1,
                         title:"Large Text",
                         selected:false,
                         key:"questionTypes"
                    },
                    {
                         id:2,
                         title:"Checkboxes",
                         selected:false,
                         key:"questionTypes"
                    }
               ],
               //Data relating to question content (eg. checkbox labels, or text question)
               data: {},
               id: this.props.id,
               selectedQuestion: "Small Text"
          }
          this.handleCallback = this.handleCallback.bind(this)
          this.dropdownResetThenSet = this.dropdownResetThenSet.bind(this)
          this.deleteButton = this.deleteButton.bind(this)
     }

     handleCallback = (recievedData) => {
          this.setState({data: recievedData})
          //Data parsing structure
          const parsingData = {
               selectedQuestion: this.state.selectedQuestion,
               data: recievedData,
               //used to define whether the box is to be deleted
               alive: true
          }
          this.props.parentCallback(this.state.id, parsingData)
     }

     dropdownResetThenSet = (id, key) => {
          const temp = [...this.state[key]];
          //Sets the questionstypes selected value to true for the clicked on element
          temp.forEach((item) => item.selected = false);
          temp[id].selected = true;
          this.setState({
               [key]: temp,
               //Sets the type of question selected in the dropdown
               selectedQuestion: temp[id].title
          });
     }

     deleteButton() {
          const parsingData = {
               selectedQuestion: this.state.selectedQuestion,
               data: this.state.data,
               //Sets the alive value for the selected question to false, this indicates to delete it in the parent element
               alive: false
          }
          this.props.parentCallback(this.state.id, parsingData)
     }

     render() {
          //Decides what type of bottom input the questionbox gets, based on the state.selectedQuestion
          let questionPrompt = null
          if (this.state.selectedQuestion === "Small Text") {
               questionPrompt = <SmallTextDesign parentCallback={this.handleCallback} />
          } else if (this.state.selectedQuestion === "Large Text") {
               questionPrompt = <LargeTextDesign parentCallback={this.handleCallback} />
          } else if (this.state.selectedQuestion === "Checkboxes") {
               questionPrompt = <CheckBoxDesign parentCallback={this.handleCallback} />
          } 
          return (
               <div onChange={this.handleSave}>
                    <Dropdown  
                    title="Small Text"
                    list={this.state.questionTypes}
                    resetThenSet={this.dropdownResetThenSet}
                    /><button onClick={this.deleteButton}>Delete</button>
                    {questionPrompt}
               </div>
          )
     }
}
export default QDesignBox