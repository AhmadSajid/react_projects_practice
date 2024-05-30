import './App.css';

function App() {
  return (
    <div className="App">

<div class='row'>
    <div class='column'>
      <b class='text'>Menu</b>
      <div class='bar' style={{margin:'5px auto',width:'100px'}}></div>
      <div class='bar' style={{margin:'5px auto',width:'100px'}}></div>
      <div class='bar' style={{margin:'5px auto',width:'100px'}}></div>
    </div>
  
    <div class='column'>
      <b class='text'>Configuration</b>
      <div class='bar' style={{margin:'5px auto',width:'200px'}}></div>
      <div class='bar' style={{margin:'5px auto',width:'200px'}}></div>
      <div class='bar' style={{margin:'5px auto',width:'200px'}}></div>

      <div class='row' style={{margin:'10px auto'}}>
        <div class='column'>
          <div class='bar' style={{width:'50px'}}></div>
        </div>
        <div class='column'>
          <div class='bar' style={{width:'50px'}}></div>
        </div>
      </div>

      <div class='row' style={{margin:'-120px auto'}}>
        <div class='column'>
        <input name="myInput" style={{width:'70px',border: '2px solid blue'}}/>
        </div>
        <div class='column'>
        <input name="myInput" style={{width:'70px',border: '2px solid blue'}}/>
        </div>
      </div>
      
      <div class='row' style={{margin:'30px auto'}}>
        <div class='column'>
          <div class='bar' style={{width:'50px'}}></div>
        </div>
        <div class='column'>
          <div class='bar' style={{width:'50px'}}></div>
        </div>
      </div>

      <div class='row' style={{margin:'-130px auto'}}>
        <div class='column'>
        <input name="myInput" style={{width:'70px',border: '2px solid blue'}}/>
        </div>
        <div class='column'>
        <input name="myInput" style={{width:'70px',border: '2px solid blue'}}/>
        </div>
      </div>

      <div class='bar' style={{margin:'70px auto',width:'100px'}}></div>
        <div style={{margin:'-50px auto'}}>
          <input name="myInput" style={{height:'50px',width:'200px',border: '2px solid blue'}}/>
        </div>

        <div style={{margin:'70px'}}>
          <button type='button' style={{width:'70px',color:'white', backgroundColor:'royalblue', border:'none'}}>Save</button>
        </div>
    </div>

</div>

    </div>
  );
}

export default App;
