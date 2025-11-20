import './App.css';
import React, {useState} from 'react';

function App() {
  // set states for multiple inputs
  const [inputs, setInputs] = useState({});

  // set constants for gender
  const [myGender, setMyGender] = useState("")

  // set constant for comments using textarea
  const [textcomment, setTextcomment] = useState("")

  //function to collect the selected gender
  const selectedGender = (event) => {
    setMyGender(event.target.value)
  }

  // function to collect the submitted comments
  const submitted_comments = (event) => {
    setTextcomment(event.target.value)
  }

  // function to handle changes in all inputs
  const handle_changes = function(event){
    const name = event.target.name;
    const value = event.target.value;
    // updates the states
    setInputs(values => ({...values, [name]:value}));
  }

  // function submit form
  const submitform = function(event){
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <div className="App">
      <form className='myform' onSubmit={submitform}>
        <fieldset>
          <legend>Forms in React JS</legend>
          <div className='formgroup'>
            <label htmlFor="name">Enter username: </label>
            <input 
              type="text" 
              id="name"
              className='inputstyle'
              name="name"
              placeholder="Type the username..."
              value={inputs.name || ""} 
              onChange={handle_changes}
            />
          </div>

          <div className='formgroup'>
            <label htmlFor="age">Enter your age:</label>
            <input
              type='number'
              id="age"
              className='inputstyle'
              name="age"
              placeholder="Type your age..."
              value={inputs.age || ""}
              onChange={handle_changes}
            />
          </div>
          {/** select a gender */}
          <div className='formgroup'>
            <label> Select gender:
              <select value={myGender} onChange={selectedGender}>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
            </select>
            </label>
          </div>

          {/** comments using textarea */}
          <div className='formgroup'>
            <label htmlFor="comments">Any suggestions? </label>
            <textarea
              id="comments"
              value={textcomment}
              onChange={submitted_comments}
              placeholder="Type your comments..."
            />
          </div>

          {/* submit form */}
          <input type="submit" className="btnsubmit" value="Submit Form"/>
        </fieldset>
      </form>
      {/* Test the username collected after the submit button */}
      <p className='printusername'>Username: {inputs.name}</p>
      <p className='printusername'>Age: {inputs.age}</p>
      <p className='printusername'>Gender: {myGender}</p>
      <p className='printusername'>Comments: {textcomment}</p>
    </div>
  );
}

export default App;
