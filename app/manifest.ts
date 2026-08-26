import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Anshul Ruhil",
    short_name: "Anshul Ruhil",
    description:
      "Technology Leader, AI Architect, Philanthropist and Entrepreneur.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbfafe",
    theme_color: "#7c4dff",
  };
}
