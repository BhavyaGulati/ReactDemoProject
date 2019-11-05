import React from 'react';

const userOutput = (props) => {
    return ( 
        <div className = 'UserOutput' >
            <p>{props.usrName} First Paraghraph</p>
            <p>Second Paraghraph</p>
        </div>
    )
};

export default userOutput;