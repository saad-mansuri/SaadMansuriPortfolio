import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Saad Mansuri | Senior Fullstack Developer",
    short_name: "Saad Mansuri",
    description:
      "Personal portfolio of Saad Mansuri - Senior Fullstack Developer with 5+ years of enterprise SaaS architecture experience.",
    start_url: "/",
    display: "standalone",
    background_color: "#050505",
    theme_color: "#050505",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
