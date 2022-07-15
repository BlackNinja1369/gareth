import '../App.css';
import React from "react";
import QDesignBox from './formDesigningComponents/qDesignBox.jsx';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      nextQuestionId: 1,
      questions: [0]
    }
    this.handleCallback = this.handleCallback.bind(this)
    this.addQuestion = this.addQuestion.bind(this)
    this.handleSave = this.handleSave.bind(this)
  }

  addQuestion() {
    const newQuestions = this.state.questions
    //Adds a question to the list of questions update array
    newQuestions.push(this.state.nextQuestionId)
    this.setState ({
      //increments the nextQuestionId
      nextQuestionId: this.state.nextQuestionId + 1,
      //Updates the questions with the newQuestions array
      questions: newQuestions
    })
  }

  handleCallback = (id, data) => {
    //if the question has been deleted
    if (data.alive === false) {
      //generate a copy dictionary
      const newState = this.state
      //Delete the questions from the state
      delete newState[id]
      const newQuestions = newState.questions
      //remove the question from the list of questions
      newQuestions.splice(newQuestions.indexOf(id), 1)
      newState.questions = newQuestions
      //Push the newState into this.state
      this.setState(newState)
    } else {
      //If it is not being deleted than update or add the question
      this.setState({[id]: data})
    }
  }

  handleSave() {
    const JSON = []
    let count = 0
    for (const [key, value] of Object.entries(this.state)) {
      //Testing to make sure its a question's data
      //If it is
      if (key !== "nextQuestionId" && key !== "questions") {
        //Delete the alive attribute
        delete value["alive"]
        //set the id equal to count, removes any index changes due to deleting
        //makes it based on order of iteration
        value["id"] = count
        //increment count
        count++
        //Push the data point into the JSON array
        JSON.push(value)
      }
    }
    console.log(JSON)
  }

  render() {
    //Map the state.questions to an array of QDesignBox components
    const questionBoxesToRender = this.state.questions.map(item => (<QDesignBox key={item} id={item} parentCallback={this.handleCallback}/>))
    return (
      <div>
        {/*Renders the array of coponents, along with an add question and save button*/}
        {questionBoxesToRender}
        <button onClick={this.addQuestion}>Add Question</button><button onClick={this.handleSave}>Save</button>
      </div>
    )
  }
}

export default App;
