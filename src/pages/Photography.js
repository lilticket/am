import React, { useEffect, useState } from 'react'
import Card from './Card';
import Collections from '../data/Collections';
import Component_Select from './Component_Select';

export default function Photography() {

    const [collections, setCollections] = useState(null);
    const [selected, setSelected] = useState(null);
    const [modal, setModal] = useState(null);
    const [titles, setTitles] = useState(null);

    useEffect(() => {
        if (collections == null) {
            Collections.forEach(c => {
                let i = 1;
                while (i < c.Count) {
                    if (i.toString().length < 2) {
                        i = "0" + i
                    }
                    c.Photos.push(require(`../collections/${c.Folder}/${c.Prefix}${i}${c.Extension}`));
                    i++;
                }
            });
            setCollections(Collections)
        }
        if (collections !== null && titles == null) {
            let titles = collections.map(c => c.Title);
            setTitles(titles)
        }
        if (titles !== null && selected == null) {
            setSelected(titles[0]);
        }
    })


    const RenderSelect = () => {
        if (collections !== null && selected !== null) {
            return (
                <Component_Select
                    options={titles}
                    selected={selected}
                    setSelected={(s) => setSelected(s)}
                />
            )
        }
        return (
            <div></div>
        )
    }

    const RenderCollection = () => {
        if (selected != null) {
            return (
                collections.find(c => c.Title == selected).Photos.map(sp => {
                    return (
                        <li key={sp}>
                            <a href='#photography' onClick={() => setModal(sp)}>
                                <img src={sp} className='collection_img' />
                            </a>
                        </li>
                    )
                })
            )
        }
        return (
            <div></div>
        )
    }

    const RenderModal = () => {
        if (modal !== null) {
            return (
                <Modal src={modal} dismiss={() => setModal(null)} />
            )
        }
        return (
            <div></div>
        )
    }

    return (
        <div className='container' id="photography">
            <div className='p_container'>
                <div className='l_container'>
                    <RenderSelect />
                </div>
                <div className='r_container'>
                    <ul>
                        <RenderCollection />
                    </ul>
                </div>
            </div>
            <RenderModal />
        </div>
    )
}


function Modal({ src, dismiss }) {
    return (
        <a href="#photography" onClick={() => dismiss()} className='modal_container'>
            <div className='modal_img_container'>
                <img src={src} className='modal_img' />
            </div>
        </a>
    )
}