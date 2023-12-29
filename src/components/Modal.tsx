import React from 'react';

interface ModalProps {
    imageUrl: string | any;
    closeModal: () => void;
    download: string;
}

const Modal: React.FC<ModalProps> = ({ imageUrl, closeModal, download }) => {
    return (
        <section className={`modal ${imageUrl ? 'active' : ''}`}>
            <div className="container">
                <div className="modal-header">
                    <ul>
                        <div>
                            <li>
                                <a href={download} download={download}>
                                    Download
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" /></svg>
                                </a>
                            </li>
                        </div>
                        <button onClick={closeModal} id='close'> <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg> </button>
                    </ul>
                </div>
                <div className="image">
                    <img src={imageUrl} />
                </div>
            </div>
        </section>
    );
};

export default Modal;
