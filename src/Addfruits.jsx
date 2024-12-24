import { useState } from "react";

const Addfruits =()=>{


    const [fruits,setFruits]=useState(["apple", "orange"]);
    const [nfruits,setNfruits]=useState("");
    function Addnew(e){
        e.preventDefault();
        setFruits([...fruits,nfruits]);
        setNfruits("");
    }
return(
    <>
    <form>
        <input type="text" value={nfruits} placeholder="Enter fruit name" onChange={(e)=>setNfruits(e.target.value)}/>
        <button type="submit" onClick={Addnew}>Add fruit</button>
    </form>
    {
        fruits.map((fruit,i)=><li key={i}>{fruit}</li>)
    }
    
    </>
);
}
export default Addfruits;