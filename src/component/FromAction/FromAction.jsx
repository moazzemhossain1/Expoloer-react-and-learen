import React from 'react';

const FromAction = () => {

    const handelFrom=(formData) =>{
        console.log( formData.get("name"));
        console.log(formData.get("email"))
    }
    return (
        <div>
            
                <form action={handelFrom}>
                <input type="text " name='name' placeholder='name' />
                <br />
                <input type="email" name='email' placeholder='Emain:' />
                <br />
                <input type="submit" value={"submit"} />
                </form>
            
        </div>
    );
};

export default FromAction;