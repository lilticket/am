import React from 'react'
import Card from './Card';

export default function Home() {

    const url = require("../photos/RockCoast.jpg");
    return (
        <div className='container'>
            <Card url={url} />
            <div className='home_container'>
                <div className='container_title'>
                    <p className='title_txt'>Andrew McCranie</p>
                    {/* <img src={require("../SignatureSmooth.gif")} className='gif' id='gif' /> */}
                </div>
                <div className='container_subTitle'>
                    <a href="#photography" className='subTitle_a'>Photographer</a>
                    <p className='subTitle_a'></p>
                    <a href="#developer" className='subTitle_a'>Developer</a>
                </div>
            </div>
        </div>
    )
}


// <div className='home_container'>
// <div className='container_title'>
//     <p className='title_txt'>Andrew McCranie</p>
//     {/* <img src={require("../SignatureSmooth.gif")} className='gif' id='gif' /> */}
// </div>
// <div className='container_subTitle'>
//     <a href="#photography" className='subTitle_a'>Photographer</a>
//     <a href="#developer" className='subTitle_a'>Developer</a>
// </div>
// </div>