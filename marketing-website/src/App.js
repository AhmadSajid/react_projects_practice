import * as React from 'react'; 
import './App.css';

function App() {
  return (
    <div className="App">

    <div style={{ 
      height: '150px',
      width: '90%',
      backgroundColor: 'blueviolet',
      display: 'flex',
      flexdirection: 'column',
      margin: '1em',
      position: 'relative',
      }}>

        <div style={{ color: 'white',
        width: '100px',
        height: '100px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        margin: '-50px 0 0 -50px'}}>
        <h1>Title</h1>
        </div>
    </div>

    <div className='nav'></div>

    <div style={{ 
      height: '20px',
      width: '50%',
      backgroundColor: 'blueviolet',
      display: 'flex',
      margin: '5px auto',   
      }}>
    </div>

    <div style={{ 
      height: '20px',
      width: '50%',
      backgroundColor: 'blueviolet',
      display: 'flex',
      margin: '5px auto',   
      }}>
    </div>

    <div style={{ 
      height: '150px',
      width: '100%',
      backgroundColor: 'white',
      display: 'grid',
      left: '20%',
      margin: 'auto',
      position: 'relative',
      }}>

        <div style={{ 
                color: 'white',
                backgroundColor: 'blueviolet',
                width: '100px',
                height: '100px',
                position: 'absolute',
                top: '50%',
                left: '0%',
                margin: '-50px 0 0 -50px'
        }}>
        <h1 className="text">Feature 1</h1>
        </div>

        <div style={{ 
                color: 'white',
                backgroundColor: 'blueviolet',
                width: '100px',
                height: '100px',
                position: 'absolute',
                top: '50%',
                left: '30%',
                margin: '-50px 0 0 -50px'
        }}>
        <h1 className='text'>Feature 2</h1>
        </div>

        <div style={{ 
                color: 'white',
                backgroundColor: 'blueviolet',
                width: '100px',
                height: '100px',
                position: 'absolute',
                top: '50%',
                left: '60%',
                margin: '-50px 0 0 -50px'
        }}>
        <h1 className='text'>Feature 3</h1>
        </div>
    </div>
    
    <div className='nav'></div>
    <div className='button'>
    <button type='button'>Contact Us!</button>
    </div>
</div>

  );
}

export default App;
