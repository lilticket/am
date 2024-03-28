import React from 'react'
import Card from './Card';

export default function Developer() {

    const url = require("../photos/bg2.jpg");
    return (
        <div className='container' id='developer'>
            <Card url={url} />
        </div>
    )
}
