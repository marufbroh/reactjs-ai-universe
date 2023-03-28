import React from 'react';

const Footer = ({ setShowAll, showAll }) => {
    return (
        <div className='my-12'>
            {
                !showAll && (
                    <div className='text-center my-12'>
                        <button onClick={() => setShowAll(true)} className="btn btn-primary">See More</button>
                    </div>
                )
            }
        </div>
    );
};

export default Footer;