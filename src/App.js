import './App.css';
import Component1 from './components/component1';
import { mainContext } from './contexts';
import { useState } from 'react';
 
function App({getInput}) {
  const[inputData,setInputData] = useState(null);
  const onChangeHandler = (e) => {
     console.log("action called")
     setInputData(e.target.value);
     console.log(inputData);
     getInput(inputData);
    }
    
  return (
    <div className="App">
      <h2>component 0</h2>
      <input type="text" onChange={e => onChangeHandler(e)}/>
      <mainContext.Provider value={inputData}>
         <Component1 /> 
      </mainContext.Provider>
     </div>
  );
}

export default App;
