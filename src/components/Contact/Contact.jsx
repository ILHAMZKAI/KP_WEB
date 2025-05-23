import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

// import gambar
import iconAddress from "../../assets/images/location-pin.png";
import iconEmail from "../../assets/images/gmail.png";
import iconPhone from "../../assets/images/whatsapp.png";
import iconInstagram from "../../assets/images/instagram.png";

const Contact = ({ setSectionInView }) => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) setSectionInView("contact");
  }, [inView]);

  return (
    <section ref={ref} id="contact" className="py-10 px-6 bg-gray-50">
      <h1 className="uppercase text-center font-bold text-3xl pb-10">
        <span className="text-accent">k</span>ontak
      </h1>

      {/* MAP */}
      <div className="flex justify-center mb-10">
        <iframe
          width="100%"
          height="450"
          className="rounded-md max-w-7xl shadow-xl"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.949370008243!2d116.9314673!3d-1.1958217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df14f18a4761d75%3A0x296da5398c550e11!2sBukit%20Kebo%20Km%208!5e0!3m2!1sid!2sid!4v1746377783662!5m2!1sid!2sid"
        ></iframe>
      </div>

      {/* CONTACT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {/* ADDRESS */}
        <div className="bg-white p-6 rounded-lg text-center" style={{ boxShadow: '0 5px 20px rgba(0,0,0,0.15)' }}>
          <img
            src={iconAddress}
            alt="address icon"
            className="w-12 h-12 mx-auto mb-3"
          />
          <h3 className="text-xl font-bold text-green-700 mb-2">Alamat</h3>
          <p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Bukit+Kebo+Km+8+Balikpapan+Kalimantan+Timur"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Bukit Kebo Km 8, Tembus TPA Manggar, Balikpapan, Kalimantan Timur
            </a>
          </p>
        </div>

        {/* EMAIL */}
        <div className="bg-white p-6 rounded-lg text-center" style={{ boxShadow: '0 5px 20px rgba(0,0,0,0.15)' }}>
          <img
            src={iconEmail}
            alt="email icon"
            className="w-12 h-12 mx-auto mb-3"
          />
          <h3 className="text-xl font-bold text-green-700 mb-2">E-mail</h3>
          <p>
            <a
              href="mailto:bukitkebobalikpapan@gmail.com"
              target="_blank"
              className="text-blue-600 underline"
            >
              bukitkebobalikpapan@gmail.com
            </a>
          </p>
        </div>

        {/* PHONE */}
        <div className="bg-white p-6 rounded-lg text-center" style={{ boxShadow: '0 5px 20px rgba(0,0,0,0.15)' }}>
          <img
            src={iconPhone}
            alt="phone icon"
            className="w-12 h-12 mx-auto mb-3"
          />
          <h3 className="text-xl font-bold text-green-700 mb-2">Telepon</h3>
          <p>
            <a
              href="https://wa.me/+6282148837192"
              target="_blank"
              className="text-blue-600 underline"
            >
              0821 4883 7192
            </a>
          </p>
        </div>

        {/* INSTAGRAM */}
        <div className="bg-white p-6 rounded-lg text-center" style={{ boxShadow: '0 5px 20px rgba(0,0,0,0.15)' }}>
          <img
            src={iconInstagram}
            alt="Instagram icon"
            className="w-12 h-12 mx-auto mb-3"
          />
          <h3 className="text-xl font-bold text-green-700 mb-2">Instagram</h3>
          <p>
            <a
              href="https://instagram.com/bukitkebo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              @bukitkebo
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
