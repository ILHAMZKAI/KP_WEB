import React from "react";

export const Footer = () => {
  return (
    <footer className="footer items-center p-5 bg-neutral text-neutral-content flex flex-col md:flex-row justify-between">
      <div className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
        <p className="text-sm md:text-base">Copyright © 2023 - All rights reserved</p>
      </div>
      <div className="flex space-x-6 justify-center md:justify-end">
        {/* Facebook */}
        <a
          href="https://www.facebook.com/profile.php?id=61555039001296&locale=id_ID"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:text-accent transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M22 12a10 10 0 10-11.5 9.87v-7h-2v-3h2v-2a3 3 0 013-3h2v3h-2a1 1 0 00-1 1v2h3l-1 3h-2v7A10 10 0 0022 12z" />
          </svg>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/bukitkebo/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-accent transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37a4 4 0 11-5.63-5.63 4 4 0 015.63 5.63z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
