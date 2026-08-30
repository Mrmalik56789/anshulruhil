/**
 * Gallery photographs only — real project assets.
 * Studio headshot duplicates removed so the mosaic stays dense and balanced.
 */
export type GalleryPhoto = {
  id: string;
  src: string;
  width: number;
  height: number;
  alt: string;
};

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: "g1",
    src: "/images/gallery/event-01.jpeg",
    width: 904,
    height: 1200,
    alt: "Gallery photograph",
  },
  {
    id: "g2",
    src: "/images/gallery/event-02.jpeg",
    width: 904,
    height: 1200,
    alt: "Gallery photograph",
  },
  {
    id: "g3",
    src: "/images/gallery/event-03.jpeg",
    width: 1594,
    height: 1200,
    alt: "Gallery photograph",
  },
  {
    id: "g4",
    src: "/images/gallery/event-04.jpeg",
    width: 1600,
    height: 1200,
    alt: "Gallery photograph",
  },
  {
    id: "g5",
    src: "/images/gallery/event-05.jpeg",
    width: 1600,
    height: 1200,
    alt: "Gallery photograph",
  },
  {
    id: "g6",
    src: "/images/gallery/event-06.jpg",
    width: 1080,
    height: 718,
    alt: "Gallery photograph",
  },
];
