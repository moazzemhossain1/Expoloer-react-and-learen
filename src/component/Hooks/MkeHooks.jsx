import { useState } from "react"



const MkeHooks=(defaultValue) =>{
    const [fildValue,setFildvalue]=useState(defaultValue);
    const handleOneChange=(e) =>{
        setFildvalue(e.target.value);
    }
    return[fildValue,handleOneChange]
}
export default MkeHooks;