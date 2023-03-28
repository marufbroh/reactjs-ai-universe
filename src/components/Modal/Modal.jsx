import React from 'react';

const Modal = (props) => {
    // console.log(props.modal)
    const { tool_name, accuracy, description, features, image_link, input_output_examples, integrations, pricing, use_cases, } = props.modal
    return (
        <>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn fixed top-0 right-0">Yay!</label>
                    </div>
                    <div className='grid grid-cols-2'>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="" alt="" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                            </div>
                        </div>

                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="" alt="" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;