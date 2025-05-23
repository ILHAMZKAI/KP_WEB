import React, { useEffect } from "react";
import author_1_img from "../../assets/images/user.png";
import author_2_img from "../../assets/images/user.png";
import author_3_img from "../../assets/images/user.png";
import googleImg from "../../assets/images/google-img.png"; 
import { useInView } from "react-intersection-observer";

// Data review 
const reviews = [
  {
    author_name: "Maisa Qonitha Nuzband",
    author_img: author_1_img,
    text: "INDAH SEKALIIII. Saya lebih menyarankan datang pagi, karena masih dingin dan sepi. Tapi kalau datang pagi harus bersabar dengan rumput yang masih basah. Saya sarankan datang sebelum sunrise. Wc ada, musholla ada, gazebo sekarang ada penyewaan, camping bisa. Keren",
    rate: 5,
    author_url: "https://www.google.com/maps/contrib/112386317565897914233/reviews?hl=id", // Link Google 
  },
  {
    author_name: "Kuswandi Arifin",
    author_img: author_2_img,
    text: "Gunakan saja google map untuk mencari tempat ini. Cukup lumayan jauh dari poros jalan, tapi akses jalan masuk bagus banget karena dekat dengan jalan tol balsam. Tempat asik sekali. Biaya masuk 10rb per orang. Hehe, emang ada kebo nya ternyata..wkwk",
    rate: 5,
    author_url: "https://www.google.com/maps/contrib/113525657242906341978/reviews?hl=id", // Link Google 
  },
  {
    author_name: "Rafika Fitri",
    author_img: author_3_img,
    text: "Ramah anak dan seru mengajak keluarga, kalo kesini syaa jangan pas habis hujan karena pasti sangat becek. Tersedia musholla dan toilet, tiket masuk dewasa 10.000 dan anak 5.000 tersedia gazebo (sepertinya sewa tapi ga tau berapa, dan ada villa nya juga.. Rekomendasi untuk bersantai bersama keluarga",
    rate: 4,
    author_url: "https://www.google.com/maps/contrib/102965388876549632063/reviews?hl=id", // Link Google 
  },
];

export const Reviews = ({ setSectionInView }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      setSectionInView("reviews");
    }
  }, [inView]);

  return (
    <section ref={ref} id="reviews" className="relative reviews py-20 bg-gray-50">
      <h1 className="uppercase text-center font-bold text-3xl text-white pb-20">
        <span className="text-warning">T</span>injauan
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="card bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            {/* Avatar */}
            <div className="avatar flex justify-center mt-[-2rem]">
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-green-500">
                <img src={review.author_img} alt={review.author_name} className="object-cover w-full h-full" />
              </div>
            </div>

            <div className="card-body p-6">
              {/* Author Name */}
              <h2 className="card-title text-center text-xl font-semibold text-accent mb-3">
                {review.author_name}
              </h2>

              {/* Review Text */}
              <p className="text-gray-700 text-sm text-center mb-4">{review.text}</p>

              {/* Rating Stars */}
              <div className="card-actions flex justify-center items-center space-x-1">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`w-5 h-5 ${index < review.rate ? "fill-yellow-400" : "fill-transparent"} stroke-yellow-400`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                ))}
              </div>

              {/* Google Logo and Link */}
              <div className="text-center mt-4">
                <a href={review.author_url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-blue-500 hover:underline">
                  <img
                    src={googleImg}
                    alt="Google Logo"
                    className="w-5 h-5 mr-2"
                  />
                  Posted on Google
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
