import React from 'react';

const Modal = (props) => {
    // console.log(props.modal)
    const { tool_name, accuracy, description, features, image_link, input_output_examples, integrations, pricing, use_cases, } = props.modal;

    return (
        <>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn fixed top-0 right-0">Close!</label>
                    </div>
                    <div className='grid grid-cols-2'>
                        <div className="card w-96 bg-base-100 shadow-xl">

                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-start">{description}</h2>
                                <div className='flex justify-between'>
                                    <div>
                                        <h3>Features</h3>
                                        {
                                            Object.values(features || {}).map((value, index) => <p key={index}>{value.feature_name}</p> )
                                        }
                                    </div>
                                    <div>
                                        <h3>Integrations</h3>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={image_link ? image_link[0] : null} alt="" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{input_output_examples? input_output_examples[0].input : 'Can you give any example?'}</h2>
                                <p>{input_output_examples? input_output_examples[0].output : 'No! Not Yet! Take a break!!!'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;