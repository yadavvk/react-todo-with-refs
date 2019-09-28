import React, {Component} from 'react';
import Note from './components/Note';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      noteText:'',
      notes:[]
    }
  }
  handleChange = (noteText) => {
    this.setState({
      noteText: noteText.target.value
    })
  }
  handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      let noteArr = this.state.notes;
      noteArr.push(this.state.noteText)
      this.setState({noteText:''})
    }    
  }
  deleteNote(index){
    let noteArr = this.state.notes;
    noteArr.splice(index,1)
    this.setState({
      notes:noteArr
    })
  }
  addNote(){
    if(this.state.noteText === ''){return}
    let noteArr = this.state.notes;
    noteArr.push(this.state.noteText)
    this.setState({noteText:''})
    this.textInput.focus()
  }
  componentDidMount(){
    this.textInput.focus()
  }
  render(){

    let notes = this.state.notes.map((value,key) => {
      return <Note key={key} text={value} ondeleteMethod={() => this.deleteNote(key)}/>
    })
    return (
      <div className="container">
        <div className="header">React Todo Application</div>
        {notes}
        <div className="btn" onClick={this.addNote.bind(this)}>+</div>   
        <input type="text" 
          className="textInput"
          ref={((input)=>{this.textInput = input})}  
          value={this.state.noteText}
          onChange={(noteText) => this.handleChange(noteText)} 
          onKeyPress={this.handleKeyPress.bind(this)}
          />
      </div>
    );
  }
}

export default App;
