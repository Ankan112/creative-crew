export const categories = [
  {
    package: "Silver Package",
    price: "$ 400",
    duration: "6 hours of coverage",
    services: {
      photographer: "1 Professional Photographer",
      consultation: "Pre-wedding consultation",
      images: "High Resolution digital images",
      gallery: "Online Gallery for easy sharing and downloading",
    },
  },
  {
    package: "Gold Package",
    price: "$ 600",
    duration: "6 hours of coverage",
    services: {
      photographer: "2 Professional Photographer",
      consultation: "Pre-wedding consultation",
      images: "High Resolution digital images",
      gallery: "Online Gallery for easy sharing and downloading",
    },
  },
  {
    package: "Platinum Package",
    price: "$ 1000",
    duration: "12 hours of coverage",
    services: {
      photographer: "4 Professional Photographer",
      consultation: "Pre-wedding consultation",
      images: "High Resolution digital images",
      gallery: "Online Gallery for easy sharing and downloading",
    },
  },
];

export function getUser() {
  if (typeof window !== "undefined") {
    const storedJsonString = localStorage.getItem("user");
    const result = JSON.parse(storedJsonString);
    return result;
  }
  return null;
}

const services = [
  {
    image: "/service1.jpg",
    title: "Wedding Photography",
    description:
      "Every click a timeless memory, every shot a love story unfolded.",
    path: "wedding-photography",
    packageBanner: "p1.jpg",
  },
  {
    image: "/service2.jpg",
    title: "Outdoor Photography",
    description:
      "In the heart of every photograph lies the love that binds two souls.",
    path: "outdoor-photography",
    packageBanner: "p1.jpg",
  },
  {
    image: "/service3.jpg",
    title: "Birthday Photography",
    description: "With each click, we etch the timeless tale of love and joy.",
    path: "birthday-photography",
    style: "flex flex-col md:flex-row-reverse ",
    packageBanner: "p1.jpg",
  },
  {
    image: "/service4.jpg",
    title: "Mehendi Photography",
    description: "Each click, a chapter of love written in light and emotion.",
    path: "mehendi-photography",
    style: "flex flex-col md:flex-row-reverse ",
    packageBanner: "p1.jpg",
  },
];
