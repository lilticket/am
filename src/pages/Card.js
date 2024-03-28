import React from 'react'

export default function Card({ url }) {
    const RenderCard = () => {
        if (url != null) {
            return (
                <div className='card' >
                    <img src={url} className='main_img' />
                </div>
            )
        }
        return (
            <div></div>
        )
    }
    return (
        <RenderCard />
    )
}
