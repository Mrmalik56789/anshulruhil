/**
 * Gallery photographs from anshulruhil.com/gallery (same order).
 * Captions only for assets that already have titles in project data (site.gallery).
 * Remaining original-site photos have no published captions — fields left empty.
 */
export type GalleryPhoto = {
  id: string;
  src: string;
  width: number;
  height: number;
  title: string;
  caption: string;
  location?: string;
};

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: "g01",
    src: "/images/gallery/event-01.jpeg",
    width: 904,
    height: 1200,
    title: "Leadership in conversation",
    caption: "Convening with distinguished guests at a professional forum.",
  },
  {
    id: "g02",
    src: "/images/gallery/event-02.jpeg",
    width: 904,
    height: 1200,
    title: "Stage presence",
    caption: "Thought leadership at international gatherings.",
  },
  {
    id: "g03",
    src: "/images/gallery/orig-03.jpg",
    width: 1600,
    height: 1200,
    title: "",
    caption: "",
  },
  {
    id: "g04",
    src: "/images/gallery/orig-04.jpg",
    width: 1600,
    height: 1200,
    title: "",
    caption: "",
  },
  {
    id: "g05",
    src: "/images/gallery/orig-05.jpg",
    width: 900,
    height: 1200,
    title: "",
    caption: "",
  },
  {
    id: "g06",
    src: "/images/gallery/orig-06.jpg",
    width: 768,
    height: 1024,
    title: "",
    caption: "",
  },
  {
    id: "g07",
    src: "/images/gallery/orig-07.jpg",
    width: 768,
    height: 1024,
    title: "",
    caption: "",
  },
  {
    id: "g08",
    src: "/images/gallery/orig-08.jpg",
    width: 1024,
    height: 682,
    title: "",
    caption: "",
  },
  {
    id: "g09",
    src: "/images/gallery/orig-09.jpg",
    width: 1024,
    height: 768,
    title: "",
    caption: "",
  },
  {
    id: "g10",
    src: "/images/gallery/orig-10.jpg",
    width: 900,
    height: 1200,
    title: "",
    caption: "",
  },
  {
    id: "g11",
    src: "/images/gallery/orig-11.jpg",
    width: 1600,
    height: 1200,
    title: "",
    caption: "",
  },
  {
    id: "g12",
    src: "/images/gallery/event-03.jpeg",
    width: 1594,
    height: 1200,
    title: "Community & culture",
    caption: "CIF and Canada–India collaboration in practice.",
    location: "Canada",
  },
  {
    id: "g13",
    src: "/images/gallery/event-04.jpeg",
    width: 1600,
    height: 1200,
    title: "Recognition night",
    caption: "Celebrating teams, partners, and shared wins.",
  },
  {
    id: "g14",
    src: "/images/gallery/event-05.jpeg",
    width: 1600,
    height: 1200,
    title: "Global rooms",
    caption: "Building bridges between markets and institutions.",
  },
];
