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
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  useEffect(() => {
    if (inView) {
      setSectionInView("gallery");
    }
  }, [inView]);

  return (
    <section ref={ref} id="gallery">
      <h1 className="uppercase text-center font-bold text-3xl pb-10">
        <span className="text-accent">g</span>allery
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative rounded-md overflow-hidden cursor-pointer group"
          >
            <img className="h-full w-full" src={img} alt={`g_image_${index}`} />
            <div
              className={`absolute top-0 left-0 w-full h-full z-20`}
            >
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

