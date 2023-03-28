import React, { useEffect, useState } from 'react';
import Tool from '../Tool/Tool';

const Tools = ({tools, showAll}) => {
    // console.log(props.tools)
    // const [tools, setTools] = useState([]);
    // const [showAll, setShowAll] = useState(false)

    // useEffect(() => {
    //     fetch(`https://openapi.programming-hero.com/api/ai/tools`).then(res => res.json()).then(data => setTools(data.data.tools))
    // }, [])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:px-24'>
            {
                tools.slice(0, showAll? 12 : 6).map(tool => <Tool tool={tool} key={tool.id} />)
            }
        </div>
    );
};

export default Tools;