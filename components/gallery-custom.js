"use client";

import React, { useState, useCallback } from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

export default function GalleryCustom() {
  const photos = [
    {
      src: "/images/gallery/01.webp",
      width: 4,
      height: 3,
      title: "Fotka Marušky a Jiříka",
    },
    {
      src: "/images/gallery/02.webp",
      width: 4,
      height: 3,
      title: "Fotka Marušky a Jiříka",
    },
    {
      src: "/images/gallery/03.webp",
      width: 4,
      height: 3,
      title: "Fotka Marušky a Jiříka",
    },
    {
      src: "/images/gallery/04.webp",
      width: 4,
      height: 3,
      title: "Fotka Marušky a Jiříka",
    },
    {
      src: "/images/gallery/05.webp",
      width: 4,
      height: 3,
      title: "Fotka Marušky a Jiříka",
    },
    {
      src: "/images/gallery/06.webp",
      width: 4,
      height: 3,
      title: "Fotka Marušky a Jiříka",
    },
    {
      src: "/images/gallery/07.webp",
      width: 4,
      height: 3,
      title: "Fotka Marušky a Jiříka",
    },
    {
      src: "/images/gallery/08.webp",
      width: 4,
      height: 3,
      title: "Fotka Marušky a Jiříka",
    },
    {
      src: "/images/gallery/09.webp",
      width: 4,
      height: 3,
      title: "Fotka Marušky a Jiříka",
    },
    {
      src: "/images/gallery/10.webp",
      width: 4,
      height: 3,
      title: "Fotka Marušky a Jiříka",
    },
    {
      src: "/images/gallery/11.webp",
      width: 4,
      height: 3,
      title: "Fotka Marušky a Jiříka",
    },
    {
      src: "/images/gallery/12.webp",
      width: 4,
      height: 3,
      title: "Fotka Marušky a Jiříka",
    },
    {
      src: "/images/gallery/13.webp",
      width: 4,
      height: 3,
      title: "Fotka Marušky a Jiříka",
    },
    {
      src: "/images/gallery/14.webp",
      width: 4,
      height: 3,
      title: "Fotka Marušky a Jiříka",
    },
    {
      src: "/images/gallery/15.webp",
      width: 4,
      height: 3,
      title: "Fotka Marušky a Jiříka",
    },
    {
      src: "/images/gallery/16.webp",
      width: 4,
      height: 3,
      title: "Fotka Marušky a Jiříka",
    },
    {
      src: "/images/gallery/17.webp",
      width: 4,
      height: 3,
      title: "Fotka Marušky a Jiříka",
    },
    {
      src: "/images/gallery/18.webp",
      width: 4,
      height: 3,
      title: "Fotka Marušky a Jiříka",
    },
    {
      src: "/images/gallery/19.webp",
      width: 4,
      height: 3,
      title: "Fotka Marušky a Jiříka",
    },
    {
      src: "/images/gallery/20.webp",
      width: 4,
      height: 3,
      title: "Fotka Marušky a Jiříka",
    },
    {
      src: "/images/gallery/21.webp",
      width: 4,
      height: 3,
      title: "Fotka Marušky a Jiříka",
    },
    {
      src: "/images/gallery/22.webp",
      width: 4,
      height: 3,
      title: "Fotka Marušky a Jiříka",
    },
    {
      src: "/images/gallery/23.webp",
      width: 4,
      height: 3,
      title: "Fotka Marušky a Jiříka",
    },
    {
      src: "/images/gallery/24.webp",
      width: 4,
      height: 3,
      title: "Fotka Marušky a Jiříka",
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
      <h2 className="font-light text-5xl mt-24 mb-8 uppercase tracking-wide text-[#1a110a] text-center">
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
