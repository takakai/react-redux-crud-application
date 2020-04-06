import React from 'react';

function App() {
  return(
    <div>
      <Cat />
    </div>
  );
  
  /*
  return(
    <React.Fragment>
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={() => {console.log("I am clicked!")}}/>
    </React.Fragment>
  ); 
  */
}

function Cat() {
  return <div>Meow!</div>
}


export default App;
