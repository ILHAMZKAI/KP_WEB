import React, { useEffect, useRef } from "react";
import bukitKebo1 from "../../assets/videos/about-video.mp4";
import { useInView } from "react-intersection-observer";

export const About = ({ setSectionInView }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const videoRef = useRef(null);

  useEffect(() => {
    if (inView) {
      setSectionInView("about");
      if (videoRef.current) {
        videoRef.current.play().catch((e) => {
          console.log("Autoplay error:", e);
        });
      }
    } else {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
  }, [inView, setSectionInView]);

  return (
    <section
      ref={ref}
      id="about"
      className="bg-base-200 px-5 py-10 mx-auto"
    >
      <h1 className="uppercase text-center font-bold text-3xl pb-10">
        <span className="text-accent">t</span>entang{" "}
        <span className="text-accent">b</span>ukit{" "}
        <span className="text-accent">k</span>ebo
      </h1>
      <div className="flex flex-col lg:flex-row gap-10">
        <video
          ref={videoRef}
          src={bukitKebo1}
          muted
          playsInline
          loop
          className="rounded-lg shadow-lg object-cover w-screen lg:h-[80vh]"
        />
        <div className="text-center xl:text-left flex flex-col justify-center">
          <h2 className="text-3xl lg:text-5xl font-bold uppercase text-accent mb-6">
            Mengapa Memilih Bukit Kebo?
          </h2>
          <p className="my-3 lg:text-left lg:text-lg leading-relaxed text-gray-700">
            Bukit Kebo adalah destinasi wisata alam yang sangat populer di Balikpapan,
            Kalimantan Timur. Terkenal dengan pemandangan hijau yang memukau dan udara
            yang sejuk, tempat ini menjadi pilihan utama untuk melepas penat dari
            kesibukan kota.
          </p>
          <p className="my-3 lg:text-left lg:text-lg leading-relaxed text-gray-700">
            Aktivitas yang bisa dilakukan di Bukit Kebo sangat beragam, mulai dari hiking
            ringan, camping, piknik bersama keluarga, hingga fotografi alam yang menakjubkan.
            Bukit Kebo juga menjadi spot favorit untuk menikmati sunrise dan sunset yang
            luar biasa indah.
          </p>

          <p className="my-3 lg:text-left lg:text-lg leading-relaxed text-gray-700">
            Fasilitas yang tersedia cukup lengkap dengan area parkir yang luas, warung makan
            kecil, dan jalur trekking yang mudah diakses oleh semua usia. Lokasinya yang
            strategis, hanya sekitar 15 menit dari pusat kota Balikpapan, membuat Bukit Kebo
            mudah dijangkau.
          </p>

          <p className="my-3 lg:text-left lg:text-lg leading-relaxed text-gray-700">
            Datang dan rasakan sendiri keindahan alam serta ketenangan yang ditawarkan Bukit Kebo.
            Tempat ini sangat cocok untuk kamu yang mencari tempat refreshing sekaligus petualangan
            alam yang menyenangkan.
          </p>
        </div>
      </div>
    </section>
  );
};
