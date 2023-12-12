
import './App.css';
import { useState } from 'react';
function App() {

  const [name,setName]=useState("");
 function handleFirstName(e){

    setName(e.target.value);
  }


   
  return (
    <div >
      <h2>Learn</h2>
      <form >
      <label> Enter the firstName :
       <input type="text" value={name} onChange={handleFirstName}/>
      </label>
      </form>
    </div>
  );
}

export default App;
