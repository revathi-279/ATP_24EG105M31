import { createContext,useState } from "react"

//Create context provider object
export const counterContextObj = createContext()  //Pipeline designed but empty

 function ContextProvider({children}) {
    //state
    const [counter,setCounter] = useState(0)

    //Increment Counter
    const incrementCounter = () => {
        setCounter(counter + 1)
    }
    
    //Decrement Counter
    const decrementCounter = () => {
        setCounter(counter - 1)
    }
    
  return (
    <counterContextObj.Provider value = {{counter,incrementCounter,decrementCounter}}> 
    {children}
    </counterContextObj.Provider>
  )
}

export default ContextProvider