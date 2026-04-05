import React from 'react';

const SimpleFrom = () => {



    const handleClike=(e) =>{
        e.preventDefault();


        console.log(e.target.name.value);
        console.log(e.target.email.value)
        
    

    }
    return (
        <div>
            <form onSubmit={handleClike}>
                <input type="text" name='name' placeholder='Enter your name:' />
                <br />
                <input type="email"  placeholder='Enter your mail:' />
                <br></br>
                <input  type="submit" value="submit" />
            
        </form>
        </div>
    );
};

export default SimpleFrom;