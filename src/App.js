import React from 'react';

function App() {
  //const greeting = "Hi!!";
  //const dom = <h1 className="foo">{greeting}</h1>;
  //return dom;
  return(
    <React.Fragment>
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={() => {console.log("I am clicked!")}}/>
    </React.Fragment>
  ); 
  
  /*
  return (
    
    <div>
      <h1>Hello World!</h1>
    </div>
  );*/
}

export default App;
