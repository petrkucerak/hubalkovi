"use client";

import React, { useState, useCallback } from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

export default function GalleryCustom() {
  const photos = [
    {
      src: "/images/gallery/01.jpg",
      width: 4,
      height: 3,
    },
    {
      src: "/images/gallery/02.jpg",
      width: 4,
      height: 3,
    },
    {
      src: "/images/gallery/03.jpg",
      width: 4,
      height: 3,
    },
    {
      src: "/images/gallery/04.jpg",
      width: 4,
      height: 3,
    },
    {
      src: "/images/gallery/05.jpg",
      width: 4,
      height: 3,
    },
    {
      src: "/images/gallery/06.jpg",
      width: 4,
      height: 3,
    },
    {
      src: "/images/gallery/07.jpg",
      width: 4,
      height: 3,
    },
    {
      src: "/images/gallery/08.jpg",
      width: 4,
      height: 3,
    },
    {
      src: "/images/gallery/09.jpg",
      width: 4,
      height: 3,
    },
    {
      src: "/images/gallery/10.jpg",
      width: 4,
      height: 3,
    },
    {
      src: "/images/gallery/11.jpg",
      width: 4,
      height: 3,
    },
    {
      src: "/images/gallery/12.jpg",
      width: 4,
      height: 3,
    },
    {
      src: "/images/gallery/13.jpg",
      width: 4,
      height: 3,
    },
    {
      src: "/images/gallery/14.jpg",
      width: 4,
      height: 3,
    },
    {
      src: "/images/gallery/15.jpg",
      width: 4,
      height: 3,
    },
    {
      src: "/images/gallery/16.jpg",
      width: 4,
      height: 3,
    },
    {
      src: "/images/gallery/17.jpg",
      width: 4,
      height: 3,
    },
    {
      src: "/images/gallery/18.jpg",
      width: 4,
      height: 3,
    },
    {
      src: "/images/gallery/19.jpg",
      width: 4,
      height: 3,
    },
    {
      src: "/images/gallery/20.jpg",
      width: 4,
      height: 3,
    },
    {
      src: "/images/gallery/21.jpg",
      width: 4,
      height: 3,
    },
    {
      src: "/images/gallery/22.jpg",
      width: 4,
      height: 3,
    },
    {
      src: "/images/gallery/23.jpg",
      width: 4,
      height: 3,
    },
    {
      src: "/images/gallery/24.jpg",
      width: 4,
      height: 3,
    },
  ];
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className="w-full">
      <h2 className="mt-24 mb-8 text-3xl uppercase font-quicksand font-semibold text-center">
        Galerie
      </h2>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}
