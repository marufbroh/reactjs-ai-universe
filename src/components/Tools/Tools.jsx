import React, { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';
import Tool from '../Tool/Tool';

const Tools = ({ tools, showAll }) => {
    const [modal, setModal] = useState({})
    const [id, setId] = useState(null)
    // console.log(id);
    useEffect(() => {
        fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`).then(res => res.json()).then(data => setModal(data.data))
    }, [id])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:px-24'>
            {
                tools.slice(0, showAll ? 12 : 6).map(tool => <Tool tool={tool} key={tool.id} setId={setId} />)
            }
            <Modal modal={modal} />
        </div>
    );
};

export default Tools;