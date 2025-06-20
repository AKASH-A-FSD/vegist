import React, { useMemo, useState } from 'react'
import "./Learn.css"

const Learn = () => {
    const [number, setnumber] = useState("")
    const [color, setcolor] = useState("light")
    
    const no=useMemo(() =>{
        return  ans(number)
    },[number])
    
    const backstyle={
        backgroundColor: color==="dark" ? 'black' : 'white'
    }
     function ans(num){
        for (let i = 0; i <100000; i++) {
            console.log("yes");
            
        }
        return num*2; 
    }
    // const no = ans(number)
  
  return (
    <>
    <div className="main" style={backstyle} >
    <input onChange={(e) => setnumber(e.target.value)}  type="num" />
    <button onClick={()=>setcolor(color==="dark"?"light":"dark") } >{color}</button>
   <p>{no}</p>
    </div>
    </>
  )
}

export default Learn

// import React, { useState } from "react";
// import "./Learn.css";

// const Learn = () => {
//   const [number, setNumber] = useState("");
//   const [color, setColor] = useState("light");
//   const [result, setResult] = useState(null);

//   const backstyle = {
//     backgroundColor: color === "dark" ? "black" : "white",
//     color: color === "dark" ? "white" : "black",
//   };

//   const ans = (num) => {
//     // This big loop will freeze UI until done
//     for (let i = 0; i < 1000000000; i++) {
//       // Just wasting time — no operations needed inside
//     }
//     // After loop finishes, calculate and set result
//     setResult(Number(num) * 2);
//   };

//   return (
//     <div className="main" style={backstyle}>
//       <input
//         onChange={(e) => setNumber(e.target.value)}
//         type="number"
//         placeholder="Enter a number"
//         value={number}
//       />
//       <button onClick={() => setColor(color === "dark" ? "light" : "dark")}>
//         {color}
//       </button>
//       <button onClick={() => ans(number)}>Calculate</button>
//       <p>{result !== null ? result : "Result will show here"}</p>
//     </div>
//   );
// };

// export default Learn;
