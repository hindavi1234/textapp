// import React, { useState } from 'react'

export default function Alert(props) {
    const capitalise = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
    return (
        <div className="container" style={{height:'50px'}}>
      {  props.alert && <div className={`alert alert-${props.alert.type} alert-success alert-dismissible fade show`} role="alert">
            <strong>{capitalise(props.alert.Type)}</strong>:{props.alert.msg}
            {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>}
        </div>
    )
}
