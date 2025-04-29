import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import image1 from "../../assets/images/image-1.jpg";
import image2 from "../../assets/images/image-2.jpg";
import image3 from "../../assets/images/image-3.jpg";
import image4 from "../../assets/images/image-4.jpg";
import image5 from "../../assets/images/image-5.jpg";
import image6 from "../../assets/images/image-6.jpg";
import image7 from "../../assets/images/image-7.jpg";
import image8 from "../../assets/images/image-8.jpg";

const fasilitas = [
  {
    name: "Spot Foto Instagramable",
    desc: "Bukit Kebo menawarkan banyak spot foto menarik berlatar hutan dan pemandangan kota Balikpapan.",
    image: image1,
  },
  {
    name: "Gazebo & Tempat Duduk",
    desc: "Tersedia gazebo dan tempat duduk untuk bersantai menikmati udara segar dan pemandangan.",
    image: image2,
  },
  {
    name: "Warung & Kafe",
    desc: "Ada warung dan kafe sederhana yang menyediakan makanan ringan dan minuman.",
    image: image3,
  },
  {
    name: "Area Camping",
    desc: "Tersedia area camping untuk pengunjung yang ingin bermalam dan menikmati suasana malam di bukit.",
    image: image4,
  },
  {
    name: "Sewa Tenda dan Alat Camping",
    desc: "Tersedia layanan sewa tenda dan perlengkapan camping untuk pengunjung yang ingin bermalam tanpa membawa peralatan sendiri.",
    image: image5,
  },
  {
    name: "Parkir Luas",
    desc: "Area parkir yang luas dan mudah diakses kendaraan roda dua maupun empat.",
    image: image6,
  },
  {
    name: "Villa Bukit Kebo",
    desc: "Villa nyaman dengan 1-2 kamar, cocok untuk menginap dengan fasilitas seperti AC, tempat tidur, dapur + peralatan, dispenser. Harga mulai dari Rp750.000 (Weekdays).",
    image: image7,
  },
  {
    name: "Kamar Kecil Umum",
    desc: "Tersedia kamar kecil bersih dan terawat untuk kenyamanan pengunjung selama berwisata di Bukit Kebo.",
    image: image8,
  },
];

const FeaturedFacilities = ({ setSectionInView }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      setSectionInView("feature");
    }
  }, [inView, setSectionInView]);

  return (
    <section ref={ref} className="" id="feature">
      <h1 className="uppercase text-center font-bold text-3xl pb-10">
        <span className="text-accent">f</span>asilitas{" "}
        <span className="text-accent">b</span>ukit kebo
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {fasilitas.map((item, index) => (
          <div key={index} className="card card-compact bg-base-100 shadow-xl rounded-xl overflow-hidden">
          <figure className="relative h-60">
            <img
              className="w-full h-full object-cover image-zoom"
              src={item.image}
              alt={item.name}
              style={{ filter: "brightness(80%)" }}
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 duration-300 hover:scale-105">
              <h2 className="text-white text-xl font-bold mb-1 drop-shadow">{item.name}</h2>
              <p className="text-white text-sm drop-shadow line-clamp-2">{item.desc}</p>
            </div>
          </figure>
        </div>
        
        ))}
      </div>
    </section>
  );
};

export default FeaturedFacilities;
