import React from 'react';
import UseInputHooks from '../MalkeHookes/UseInputHooks';

const [name,setName]=UseInputHooks('');


const handelChane=() =>{
    e.preventDefault();
    console.log("submit")
}

const MaleFrome = () => {
    return (
        <div>
            <form onSubmit={handelChane}>
                <input placeholder='name:' type="text" defaultValue={name} onChange={setName} name="" id="" />
                <br />
                <input type="submit" value="submit" />
            </form>
            
        </div>
    );
};

export default MaleFrome;