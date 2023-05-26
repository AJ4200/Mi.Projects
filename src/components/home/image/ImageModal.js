import React, { useState, useEffect } from "react";

const ImageModal = ({ image, onClose }) => {
    const { label, imageUrl } = image;
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 300000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="image-modal">
            {isLoading && <div class="imgloader">
                <div class="inner_loader"></div>
            </div>}
            <div className="image-modal__overlay" onClick={isLoading ? undefined : onClose} />
            <div className="image-modal__content">
                <div className="image-modal__close" onClick={onClose}>
                    &times;
                </div>
                {!isLoading && (
                    <>
                        <div className="image-modal__image">
                            <img src={imageUrl} alt={label} />
                        </div>
                        <div className="image-modal__label">{label}</div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ImageModal;
