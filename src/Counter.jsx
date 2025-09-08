import { useState } from 'react';
export default function Counter(){
  const [n,setN]=useState(0);                   // store count
    return (
        <div>
        <p aria-label='value'>Count: {n}</p>      {/* query target */}
        <button onClick={()=>setN(n+1)}>Increment</button> {/* click to +1 */}
        </div>
    );
}
