import React,{useContext,useState} from 'react'
import {store} from './App';
const Display = () => {
    const [data,setData] = useContext(store); 
    const [name,setName] = useState(''); 
    const submitHandler = e =>
    {
        e.preventDefault();
        setData([...data,{brandname:name}])
    }
  return (
    <div>
        {data.map(items =><h2>{items.brandname}</h2>)}
        <form onSubmit={submitHandler}>
            <input type='text' onChange={(e)=>setName(e.target.value)}/>
            <input type='button' value='Add'/>
        </form>
    </div>
  )
}

export default Display