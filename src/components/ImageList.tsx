import React from 'react';

interface Image {
    urls: {
        small: string;
    };
    alt_description: string;
    type: string;
    description: string;
}

interface ImageListProps {
    image: Image[];
}

const ImageList: React.FC<ImageListProps> = ({ image }) => {
    return (
        <section id='image-list'>
            <div className="container">
                <div className="row">
                    {image.map((el: Image, idx: number) => (
                        <div className='img-col' key={idx}>
                            <img
                                src={el.urls.small}
                                alt={el.alt_description}
                                title={`Type: ${el.type}, Description: ${el.description}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImageList;
