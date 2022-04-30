import React,{createContext,useState} from 'react'
import Count from './Count';
import Display from './Display';

export const store = createContext();
const App = () => {
  const [data,setData] = useState([
    {
      brandname : 'Nokia'
    },
    {
      brandname : 'LG'
    },
    {
      brandname : 'Apple'
    }
  ])
  return (
     <store.Provider value={[data,setData]}> 
       <center>
        <Count />
        <Display />
      </center>
     </store.Provider>
    )
}

export default App