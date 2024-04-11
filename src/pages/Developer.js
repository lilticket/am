import React from 'react'
import Card from './Card';

export default function Developer() {

    const url = require("../photos/bg2.jpg");
    return (
        <div className='container' id='developer'>
            <Card url={url} />
            <div className='dev_container'>
                <p className='dev_title'>It's a conversation,
                    <b> that's all it is.</b>
                </p>
                {/* <p className='dev_subTitle'>And that's all it takes to make yours.</p> */}
                <p className='dev_body'> With <b>SEO Optimization </b>
                    and a <b>Hand-Crafted Website</b>,
                    you can start yours with more people than ever.
                </p>
                {/* <p className='dev_body'>You make the music, I'll bring the speakers.</p> */}
                <p className='dev_subTitle'>It starts with a conversation</p>
                <a className='dev_btn' href="#contact_container">
                    Start Yours
                </a>
            </div>
        </div>
    )
}
