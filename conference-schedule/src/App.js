
import './App.css';

function App() {
  return (
    <div className="App">

<div style={{
  height: '200px',
  width: '90%',
  display: 'flex',
  margin: '50px auto',
  backgroundColor: 'blueviolet',
  position: 'relative'
}}>

<div style={{  
  height: '20px',
  width: '50%',
  display: 'flex',
  margin: '50px auto',
  backgroundColor: 'white',
  position: 'relative'
  }}></div>

  <div style={{  
  height: '20px',
  width: '50%',
  display: 'flex',
  margin: '80px auto',
  backgroundColor: 'black',
  position: 'absolute'
  }}></div>

</div>

    </div>
  );
}

export default App;
