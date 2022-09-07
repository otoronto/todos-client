

import 'bootstrap/dist/css/bootstrap.min.css';

// import "bootstrap-icons/font/bootstrap-icons.css";


function App() {
  return (
    <div className="App container d-flex justify-content-center align-items-center" style={{height:"100vh"}} >
      <div className='col-2 border text-center'>

        <div className='mb-3'>
          <div>
            <label>Username</label>
          </div>
          <input className='w-100' placeholder='username..' />
        </div>
        <div>
          <button className='btn btn-primary'>Hadi Başlayalım!</button>
        </div>
      </div>
    </div>
  );
}

export default App;
