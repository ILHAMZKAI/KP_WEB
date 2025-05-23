import React from "react";

export const Newsletter = () => {
  return (
    <section
      id="newsletter"
      className="newsletter py-20 px-4 flex flex-col items-center justify-center text-center"
    >
      <div className="max-w-4xl bg-black bg-opacity-40 p-6 sm:p-10 rounded-md text-white">
        <h2 className="text-3xl sm:text-4xl font-bold uppercase mb-6">
          Tiket Masuk
        </h2>
        <p className="text-lg sm:text-xl mb-2">
          Nikmati wisata alam hijau Bukit Kebo dengan harga tiket terjangkau dan suasana segar.
        </p>
        <ul className="text-lg sm:text-xl font-medium mt-4 space-y-2">
          <li>Anak-anak: <span className="font-bold">Rp 5.000</span></li>
          <li>Dewasa: <span className="font-bold">Rp 10.000</span></li>
        </ul>
      </div>
    </section>
  );
};
