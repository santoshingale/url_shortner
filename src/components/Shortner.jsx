import { Button } from 'bootstrap'
import React from 'react'

const Shortner = () => {
    return (
        <>
        
            <h5> Enter a long URL to make a TinyURL</h5>
            <div className="input-group mb-3">
                <input type="text" className="form-control" 
                placeholder="Add Link" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            <h5>Customize your link</h5>
            <button type="button" className="btn btn-primary">Primary</button>
        </>
    )
}

export default Shortner