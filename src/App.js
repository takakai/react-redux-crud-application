import React from 'react';
import PropTypes from 'prop-types';

const profile = [
  {name: "Taro", age: 10},
  {name: "Hanako", age: 7},
  {name: "Yuta", age: 4}
]

function App() {
  return(
    <div>
      {
        profile.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
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

function User(props) {
return <div>Hi, I am {props.name}, and {props.age} years old!</div>
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}


export default App;
