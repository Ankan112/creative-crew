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
