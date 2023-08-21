import { useEffect,useState } from 'react';
import './App.css';
import Progress from './Progress';

function App() {
  const [Value, setValue] = useState(0);
  const [success, setsuccess] = useState(false);

  useEffect(() => {
    setInterval(()=>{
      setValue((val)=> val + 1);
    },100)
  }, [])
  
  return (
     <div className='app'>
       <span id='spn'>Progress Bar</span>
       <Progress value={Value} onComplete={()=> setsuccess(true)}/>
       <span>{success ? "completed!" : "loading..."}</span>
     </div>
  );
}

export default App;
