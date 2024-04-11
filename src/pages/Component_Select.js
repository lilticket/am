import React from 'react'

export default function Component_Select({ options, selected, setSelected }) {

    const showOptions = () => {
        document.getElementById("sc_options_list").classList.remove('sc_HideList')
        document.getElementById("sc_options_list").classList.add('sc_ShowList')
    }
    const hideOptions = () => {
        document.getElementById("sc_options_list").classList.remove('sc_ShowList')
        document.getElementById("sc_options_list").classList.add('sc_HideList')
    }

    const RenderOptions = () => {
        return options.map(o => {
            console.log(o)
            return (
                <div
                    className='sc_option_container'
                    onClick={() => setSelected(o)}
                >
                    <a href="#" className='sc_option_txt'>{o}</a>
                </div>
            )
        })
    }
    return (
        <div className='sc_container' onMouseLeave={() => hideOptions()}>
            <p
                className='sc_selected_txt'
                onMouseOver={() => showOptions()}
            >
                {selected}
            </p>
            <div className='sc_options_list' id="sc_options_list">
                <RenderOptions />
            </div>
        </div>
    )
}
