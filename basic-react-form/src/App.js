
import './App.css';
import { useState } from 'react';
function App() {
  //multiple Inputs
  const [inputs, setInputs] = useState({});
  function handleChange(e) {

    const name = e.target.name;
    let value;
    if (name !== 'favouriteFruits') {
      value = e.target.value;
    } else {
      const options = [...e.target.selectedOptions];
      value = options.map(option => option.value);
    }



    setInputs({ ...inputs, [name]: value })
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(JSON.stringify(inputs));
  }


  return (
    <div >
      <h2>Learn Forms</h2>
      <form onSubmit={handleSubmit}>
        <label> Enter the firstName :
          <input type="text" name="firstName" value={inputs.firstName || ""} onChange={handleChange} />
        </label> <br />
        <label> Enter the lastName :
          <input type="text" name="lastName" value={inputs.lastName || ""} onChange={handleChange} />
        </label><br />
        <label> Enter the age :
          <input type="number" name="age" value={inputs.age || 0} onChange={handleChange} />
        </label> <br />
        <label> Enter the notes :
          <input type="textarea" name="notes" value={inputs.notes || ""} onChange={handleChange} />
        </label> <br />
        <label>
          Enter the favourite fruit:

          <select
            name="favouriteFruits" defaultValue={["orange", "apple"]}
            multiple={true} onChange={handleChange}>
            <option value="banane">Banana</option>
            <option value="orange">Orange</option>
            <option value="apple">Apple</option>
            <option value="pear">Pear</option>
          </select>
        </label>
        <br/>

        Select the Gender: <br/>
        <label>
          Male
          <input type="radio" name="gender" value="male"

            checked={'male' === inputs.gender}
            onChange={handleChange} />
        </label>
        <br />

        <label >Female
          <input type="radio" name="gender" value="female"

            checked={'female' === inputs.gender}

            onChange={handleChange} />
        </label>
        <br />
        <label> Other
          <input type="radio" name="gender" value="other"
            checked={'other' === inputs.gender}
            onChange={handleChange} />

        </label>
        <br />
        <input type="submit" value="StoreData" />
      </form>
    </div>
  );
}

export default App;
