import React, { useState } from 'react';
import Modal from './Modal';
interface Image {
    urls: {
        small: string;
    };
    user: {
        first_name: string;
        profile_image: {
            large: string;
        };
    };
    links: {
        download: string;
    };
    alt_description: string;
    type: string;
    description: string;
}
export interface ImageListProps {
    image: Image[];
}

const ImageList: React.FC<ImageListProps> = ({ image }) => {
    const [imageUrl, setImageUrl] = useState<string | boolean>("");
    const [download, setDownload] = useState('');

    const handleDownload = (url: string) => {
        setDownload(url);
    };

    const openModal = (url: string) => {
        setImageUrl(url);
    };

    const closeModal = () => {
        setImageUrl(false);
    };

    return (
        <section id='image-list'>
            <div className="container">
                <div className="row">
                    {image.map((el: Image, idx: number) => (
                        <div onClick={() => handleDownload(el.links.download)} className={`img-col ${idx % 3 === 1 ? 'tall' : ''}`} key={idx}>
                            <img
                                onClick={() => openModal(el.urls.small)}
                                src={el?.urls.small}
                                alt={el?.alt_description}
                                title={`Type: ${el.type}, Description: ${el?.description}`}
                            />

                            <div onClick={() => openModal(el.urls.small)} className="profile-detail">
                                <div>
                                    <img src={el?.user.profile_image.large} alt={el?.user.first_name} />
                                    <span>{el?.user.first_name}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Modal download={download} closeModal={closeModal} imageUrl={imageUrl} />
        </section>
    );
};

export default ImageList;
