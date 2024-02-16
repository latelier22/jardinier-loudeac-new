"use client";
import { useEffect } from "react";

const ImagesBar = () => {
  useEffect(() => {
    const init = async () => {
      const { Tooltip, initTE } = await import("tw-elements");
      initTE({ Tooltip });
    };
    init();
  }, []);

  // Déclarer les photos dans un tableau d'objets
  const photos = [
    { url: "picto-camion.png", text:"Intervention rapide", alt: "Intervention rapide" },
    { url: "picto-bulle.png", text:"Réponse rapide", alt: "Réponse rapide" },
    { url: "picto-travail.png", text:"7j/7", alt: "Intervention 7j/7" },
  ];

  return (
    <header>
 
      <div>
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12 animate-slideRight">
  <div className="-m-1 flex flex-wrap md:-m-2">
    {/* Utiliser une boucle pour générer les éléments d'image */}
    {photos.map((photo, index) => (
      <div
        key={index}
        className="flex justify-around sm:w-full md:w-1/2 lg:w-1/3 flex-wrap items-center"
      >
        <div className="flex justify-center items-center">
        <div className="w-full">
          <img
            alt={photo.alt}
            className="block h-full w-full object-cover object-center"
            src={photo.url}
          />
          {/* Make sure the h3 element is properly styled and visible */}
          
        </div>
        <h3 className="text-green-900 text-center mt-2 ">{photo.text}</h3>
        </div>
      </div>
    ))}
  </div>
</div>
      </div>
    </header>
  );
};

export default ImagesBar;
