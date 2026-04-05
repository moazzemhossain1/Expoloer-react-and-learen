import { useState } from "react";


const UseInputHooks= () =>{
    const [inputFild,setInputfild]=useState();
    const handleOneChange= (defaultValue) =>{
        setInputfild(defaultValue);
    }
    return[inputFild,handleOneChange]

}
export default UseInputHooks;