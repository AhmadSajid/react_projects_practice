
import './App.css';

function App() {
  return (
    <div className="App">


<div>Event Name</div>

<div class='grid1'>
  <div class='item1'></div>
  <div class='item1'></div>
  <div class='item1'></div>
</div>

<div style={{
  height: '200px',
  width: '90%',
  display: 'flex',
  margin: '50px auto',
  backgroundColor: 'blueviolet',
  position: 'relative',
}}>

<div style={{margin: 'auto'}}>
        <div>
          <div style={{height: '20px', width: '250px', margin: '0px auto', backgroundColor: 'white'}}></div>
          
          <div style={{height: '20px', width: '250px', margin: '5px auto', backgroundColor: 'white'}}></div>
          
          <button type='button' style={{backgroundColor: 'blue', color: 'white'}}>Buy a Ticket</button>
   
        </div>
      </div>

</div>

<div class="grid">
  <div class="item">Speaker 1</div>
  <div class="item">Speaker 2</div>
  <div class="item">Speaker 3</div>
  <div class="item">Speaker 4</div>
  <div class="item">Speaker 5</div>
  <div class="item">Speaker 6</div>
</div>

    </div>
  );
}

export default App;
