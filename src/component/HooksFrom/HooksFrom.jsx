import React from 'react';
import MkeHooks from '../Hooks/MkeHooks';

const HooksFrom = () => {
    const [name,setonChangeValue]=MkeHooks('');
    const [email,setEmail]=MkeHooks('')

    const handeleOnSubmit=e =>{
       e.preventDefault();
       console.log("submit", name,email)
    }
    return (
        <div>
            <form onSubmit={handeleOnSubmit}>
                <input placeholder='name:' defaultValue={name} name='naem' type="text" onChange={setonChangeValue} />
                <br />
                <input type="email" placeholder='email:' defaultValue={email} name="email" onChange={setEmail} id="" />
                <br />
                <input type="submit" value="submit" />

            </form>
        </div>
    );
};

export default HooksFrom;