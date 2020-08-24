import React from 'react';
import './App.css';
import './style.css';

function App({name}) {// {name,age} as parameter and use directly
  return (
  <div className="para">
    <div className= "border">
    <p >Hello <strong>{name}</strong> </p>
    </div>
    <br/>
     <div className= "border">
       <p>Nested div</p>
     </div>
     <br/>
     <div className= "border">
        <p>JS code inside JSX: 5 + 3  ={5+3}</p>
     </div>
  </div>
  );
}

export default App;
