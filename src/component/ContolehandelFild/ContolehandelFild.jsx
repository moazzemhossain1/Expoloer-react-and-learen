import React from 'react';

const ContolehandelFild = () => {

    const handleOneChange=(e) =>{
        e.preventDefault();
        console.log(e.target.emain.value);
        console.log(e.target.password.value)

    }
    return (
        <div>
            <form onSubmit={handleOneChange}>
                <input type="email" name="emain" id="" placeholder='Email:' required />
                <br />
                <input type="password" name="password" id="" placeholder='Password:' required />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default ContolehandelFild;