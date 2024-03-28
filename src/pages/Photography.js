import React, { useEffect, useState } from 'react'
import Card from './Card';
import Collections from '../data/Collections';

export default function Photography() {

    const [collectons, setCollections] = useState(null);
    const [selected, setSelected] = useState(null);
    const [modal, setModal] = useState(null);

    useEffect(() => {
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
    })


    const RenderSelect = () => {
        if (Collections != null) {
            let titles = Collections.map(c => c.Title);
            return (
                <select className='select_collection' id='select_collection' value={selected} onChange={e => setSelected(e.target.value)}>
                    <option></option>
                    {titles.map(t => {
                        return (
                            <option key={t} value={t}>{t}</option>
                        )
                    })}
                </select>
            )
        }
        return (
            <div></div>
        )
    }

    const RenderCollection = () => {
        if (selected != null) {
            return (
                collectons.find(c => c.Title == selected).Photos.map(sp => {
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
                    <p className='photography_title'>Some Pics!</p>
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