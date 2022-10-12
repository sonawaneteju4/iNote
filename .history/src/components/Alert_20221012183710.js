import React from 'react'

function Alert(props) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div style={{height: '50px'}}>
        {props.alert && <div className={`${props.alert.type} rounded-lg py-5 px-6 mb-4 text-base text-blue-700`} role="alert">
           <strong></strong>: {props.alert.msg} 
        </div>}
        </div>
    )
}

export default Alert