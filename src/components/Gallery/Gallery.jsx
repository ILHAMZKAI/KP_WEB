import { useInView } from "react-intersection-observer";
import g_image_1 from "../../assets/images/gallery-img-1.jpg";
import g_image_2 from "../../assets/images/gallery-img-2.jpg";
import g_image_3 from "../../assets/images/gallery-img-3.jpg";
import g_image_4 from "../../assets/images/gallery-img-4.jpg";
import g_image_5 from "../../assets/images/gallery-img-5.jpg";
import g_image_6 from "../../assets/images/gallery-img-6.jpg";
import { useEffect } from "react";

const images = [
  g_image_1,
  g_image_2,
  g_image_3,
  g_image_4,
  g_image_5,
  g_image_6,
];

export const Gallery = ({ setSectionInView }) => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) setSectionInView("gallery");
  }, [inView]);

  return (
    <section ref={ref} id="gallery" className="py-16 px-4 bg-white">
      <h1 className="uppercase text-center font-bold text-3xl pb-10">
        <span className="text-accent">g</span>allery
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {images.map((img, index) => (
          <div
            key={index}
            className={`relative rounded-md overflow-hidden group shadow-md transform transition duration-500 ease-in-out 
              ${inView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          >
            <img
              className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
              src={img}
              alt={`gallery ${index}`}
            />
            {/* Optional overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition duration-300 z-10" />
          </div>
        ))}
      </div>
    </section>
  );
};
