import './App.css';
import axios from "axios";

const App = () => {

  let formData = new FormData();

  const onfileChange = (e)=>{
    console.log(e.target.files[0])
    if(e.target && e.target.files[0]){
      formData.append('file', e.target.files[0]);
    }
  }

const SubmitFileData = () => {
  axios.post('https://v2.convertapi.com/upload',
  (formData)
  )
  .then(res => {
    console.log(res);
  })
  .catch(error => {
    console.log(error);
  })
}

  return (
    <div className="App">

     <div className='Upload'>
       <input type="file" name= "file_upload" onChange={onfileChange} accept=".csv" />

       <div className='Refresh'>
     <button onClick={() => window.location.reload(false)}>Refresh</button>

     <div className='Reset'>
     <button
          onClick={() => window.location.replace(false)}>Reset</button>
     </div>
     </div>
     
     <div className='Submit'>
       <button onClick={SubmitFileData}>Submit</button>
     </div>
     </div> 
    </div>
  );
  }

export default App;
