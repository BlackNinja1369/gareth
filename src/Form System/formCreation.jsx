import '../App.css';
import React from "react";
import SmallTextInput from './formCreationComponents/SmallTextInput.jsx';
import LargeTextInput from './formCreationComponents/LargeTextInput.jsx';
import CheckBoxInput from './formCreationComponents/CheckBoxInput.jsx';
import data from '../questionData.js'

class App extends React.Component {
  constructor() {
    super()
    //state definition, starting with only the imported JSON
    this.state = {
      questionData: data,
    }
    console.log(data)
    this.handleCallback = this.handleCallback.bind(this)
  }

  //function included in the component definition that takes a pair (id and data) from the child onChange and adds/updates it to state
  handleCallback = (id, childData) => {
    this.setState({[id]: childData})
  }
  
  render() {
    //maps all the components from the JSON to an array of component objects
    const componentsToRender = this.state.questionData.map(item => 
      (item.selectedQuestion === "Small Text" ? <SmallTextInput key={item.id} id={item.id} name={item.data} parentCallback={this.handleCallback}/> : 
      item.selectedQuestion === "Large Text" ? <LargeTextInput key={item.id} id={item.id} name={item.data} parentCallback={this.handleCallback}/> : 
      item.selectedQuestion === "Checkboxes" ? <CheckBoxInput key={item.id} id={item.id} labels={item.data} parentCallback={this.handleCallback}/> : null))
    return (
      //The html of the form
      <form onSubmit={console.log(this.state)}>
        {/*The array of components*/}{componentsToRender}
        <button type="submit" name="Yeah" value="nah" >Submit</button>
      </form>
    )
  }
  
}

export default App;