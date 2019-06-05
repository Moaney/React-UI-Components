import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className='container'>
      <div className='cal-container'>
        <div className='row'>
          <button>clear</button>
          <button>÷</button> 
        </div>

        <div className='row'>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>X</button>
        </div>

        <div className='row'>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>-</button>
        </div>

        <div className='row'>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>+</button>
        </div>
        
        <div className='row'>
          <button>0</button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
};

export default App;
