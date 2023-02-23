import { useState } from "react";
import UserName from "./userName"

export default function Hello({age}) {
    const [name, setName] = useState('Mike');
    const msg = age > 19 ? "성인입니다." : "미성년자 입니다.";

    return(
        <>
        <h2 id="name">{name}({age}) : {msg}</h2>
        <UserName name={name}/>
        <button onClick={()=>{
            setName(name === "Mike" ? "Jane" : "Mike")
         
        }}>prop</button>
        </>
    )
};