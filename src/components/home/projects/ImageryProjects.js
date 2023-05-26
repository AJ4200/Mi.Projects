import React, { useState } from "react";
import Imagery from "../image/Imagery";
import ImageModal from "../image/ImageModal";
import { PhotoSwipeGallery } from "react-photoswipe";
import "photoswipe/dist/photoswipe.css";


const images = [
  {
    id: 0,
    label: 'Image 0',
    imageUrl: 'https://via.placeholder.com/300x200?text=Image0',
  },
  {
    id: 1,
    label: 'Image 1',
    imageUrl: 'https://via.placeholder.com/300x200?text=Image1',
  },
  // Add more images as needed
];

const ImageryProjects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);

  const openGallery = (index) => {
    setIsOpen(true);
    setInitialIndex(index);
  };

  const closeGallery = () => {
    setIsOpen(false);
  };

  const openModal = (index) => {
    setInitialIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="imagery-gallery">
        {isOpen && (
          <PhotoSwipeGallery
            items={images}
            options={{
              index: initialIndex,
              bgOpacity: 0.8,
              shareEl: false,
            }}
            onClose={closeGallery}
          />
        )}
      </div>
      <div className="imagery-images">
        {images.map((image, index) => (
          <div key={image.id} className="imagery-image" onClick={() => openModal(index)}>
            <Imagery {...image} />
          </div>
        ))}
      </div>
      {isOpen && <ImageModal image={images[initialIndex]} onClose={closeModal} />}
    </div>
  );
};

export default ImageryProjects;
