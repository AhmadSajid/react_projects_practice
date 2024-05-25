import './App.css';

function App() {
  return (
    <div className="App">

    <b>Ecommerce Game Store</b>

      <div class='row'>
        <div class='column' style={{backgroundColor: 'blueViolet', height:'150px', width:'150px' }}></div>

        <div class='column' style={{backgroundColor: 'white' }}>
          <b>GAME NAME</b>
          <div class='bar' style={{margin:'5px auto'}}></div>
          <div class='bar' style={{margin:'5px auto'}}></div>
          <div class='bar'></div>
          
          <button type='button' style={{backgroundColor:'blue', color:'white', margin:'10px'}}>Buy Now</button>
        </div>
      </div>            

      <div class='column' style={{backgroundColor: 'white' }}>
          <b>More Details</b>
          <div class='bar1' style={{margin:'5px auto'}}></div>
          <div class='bar1' style={{margin:'5px auto'}}></div>
          <div class='bar1'></div>
      </div>

      <div class='column' style={{backgroundColor: 'white' }}>
          <b>Reviews</b>
          <div class='bar1' style={{margin:'5px auto'}}></div>
          <div class='bar1' style={{margin:'5px auto'}}></div>
          <div class='bar1'></div>
      </div>

    </div>
  );
}

export default App;
