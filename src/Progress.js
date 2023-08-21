import React, { useState ,useEffect} from 'react'
import './App.css';
const Progress = ({value = 20, onComplete = ()=>{} }) => {
  const [percent, setpercent] = useState(value);
  useEffect(() => {
    setpercent(Math.min(100,Math.max(value , 0)))
    if(value>= 100){
        onComplete();
    }
  }, [value])
  
  return (
    <div className='progress'>
        <span style={{color : percent>49 ? "white": "black" ,position:"absolute",width:"32%" , display:"flex",justifyContent:"center",alignItems:"center"}}>{percent.toFixed()}%</span>
        <div style={{width:`${percent}%`,transformOrigin:"left"}}/>
    </div>
  )
}

export default Progress