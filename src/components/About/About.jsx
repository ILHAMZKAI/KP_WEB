import React, { useEffect, useRef, useState } from "react";
import bukitKebo1 from "../../assets/videos/about-video.mp4";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export const About = ({ setSectionInView }) => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const videoRef = useRef(null);

  const [headingInView, setHeadingInView] = useState(false);

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

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 2, ease: "easeOut" },
    },
  };

  return (
    <section ref={ref} id="about" className="abouts px-5 py-10 mx-auto">
      <h1 className="uppercase text-center font-bold text-3xl pb-10 text-white">
        <span className="text-warning">t</span>entang{" "}
        <span className="text-warning">b</span>ukit{" "}
        <span className="text-warning">k</span>ebo
      </h1>
      <div className="flex flex-col lg:flex-row gap-10">
        <video
          ref={videoRef}
          src={bukitKebo1}
          muted
          playsInline
          loop
          className="rounded-lg shadow-lg object-cover w-screen lg:h-[85vh]"
        />
        <div className="text-center xl:text-left flex flex-col justify-center">
          <motion.h2
            className="text-3xl lg:text-5xl font-bold uppercase text-white mb-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            onViewportEnter={() => {
              if (!headingInView) setHeadingInView(true);
            }}
          >
            Mengapa Memilih Bukit Kebo?
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={headingInView ? "visible" : "hidden"}
          >
            <motion.p className="my-3 lg:text-left lg:text-lg leading-relaxed text-white" variants={itemVariants}>
              Bukit Kebo adalah destinasi wisata alam yang sangat populer di Balikpapan,
              Kalimantan Timur. Terkenal dengan pemandangan hijau yang memukau dan udara
              yang sejuk, tempat ini menjadi pilihan utama untuk melepas penat dari
              kesibukan kota.
            </motion.p>
            <motion.p className="my-3 lg:text-left lg:text-lg leading-relaxed text-white" variants={itemVariants}>
              Aktivitas yang bisa dilakukan di Bukit Kebo sangat beragam, mulai dari hiking
              ringan, camping, piknik bersama keluarga, hingga fotografi alam yang menakjubkan.
              Bukit Kebo juga menjadi spot favorit untuk menikmati sunrise dan sunset yang
              luar biasa indah.
            </motion.p>
            <motion.p className="my-3 lg:text-left lg:text-lg leading-relaxed text-white" variants={itemVariants}>
              Fasilitas yang tersedia cukup lengkap dengan area parkir yang luas, warung makan
              kecil, dan jalur trekking yang mudah diakses oleh semua usia. Lokasinya yang
              strategis, hanya sekitar 15 menit dari pusat kota Balikpapan, membuat Bukit Kebo
              mudah dijangkau.
            </motion.p>
            <motion.p className="my-3 lg:text-left lg:text-lg leading-relaxed text-white" variants={itemVariants}>
              Datang dan rasakan sendiri keindahan alam serta ketenangan yang ditawarkan Bukit Kebo.
              Tempat ini sangat cocok untuk kamu yang mencari tempat refreshing sekaligus petualangan
              alam yang menyenangkan.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
