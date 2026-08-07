import React, { useState ,useCallback,useMemo} from 'react'
import Home from "./pages/Home.jsx"
import About from './pages/About.jsx'

const App = () => {
  console.log("app render")

  const [count ,setCount] =useState(0)

  const [user,setUser]= useState({name:"rohan",id:12}) 
  //object pass new referance on every render so that react.memo does loose his power and its not work because react.memo always work with static value.

  //handle these referance type of data (function, object and array) we used useCallback(()=>{},[])
 let greet = useCallback(()=>{
    console.log("hey good morning")
  },[user]) 

  //useMemo = it store expensive calculation result, when user call this function again then useMemo return stored result.
  //useMemo(()=>{},[])
  let calculate = useMemo(()=>{
    console.log("calculation")
    let sum =0
    for(let i =0 ; i<10000 ;i++){
      sum+=i
    }
    return sum
  },[])

  return (
    <div>
    <div>
      <h1>{count}</h1>
      <h2>{user.name}</h2>
      <h2> {calculate}</h2>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
      <button onClick={()=>setUser({...user,name:"nitesh"})}>changeName</button>
    </div>
     <Home greet={greet}/>
     <About/>
    </div>
  )
}

export default App
