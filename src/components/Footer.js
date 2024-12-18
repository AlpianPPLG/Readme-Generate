import React, { useState } from "react";

function Footer() {
  const [isModalOpenPolicy, setIsModalOpenPolicy] = useState(false);
  const [isModalOpenHelp, setIsModalOpenHelp] = useState(false);

  const handleOpenModalPolicy = () => {
    setIsModalOpenPolicy(true);
  };

  const handleCloseModalPolicy = () => {
    setIsModalOpenPolicy(false);
  };

  const handleOpenModalHelp = () => {
    setIsModalOpenHelp(true);
  };

  const handleCloseModalHelp = () => {
    setIsModalOpenHelp(false);
  };

  return (
    <footer className="bg-blue-600 p-4 text-white text-center mt-8">
      <p>
        &copy; {new Date().getFullYear()} Readme Generator. All Rights Reserved.
      </p>
      <div className="mt-2">
        <button
          onClick={handleOpenModalPolicy}
          className="text-white underline hover:text-blue-300 mr-4"
        >
          Kebijakan
        </button>
        <button
          onClick={handleOpenModalHelp}
          className="text-white underline hover:text-blue-300"
        >
          Bantuan
        </button>
      </div>

      {/* Modal Kebijakan */}
      {isModalOpenPolicy && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white text-black p-4 rounded shadow-lg w-11/12 md:w-1/3">
            <h2 className="text-lg font-bold mb-2">Kebijakan</h2>
            <p>
              Ini adalah kebijakan yang menjelaskan bagaimana kami mengumpulkan,
              menggunakan, dan melindungi informasi Anda.
            </p>
            <p>
              Kami berkomitmen untuk menjaga privasi Anda dan hanya akan
              menggunakan informasi pribadi yang Anda berikan sesuai dengan
              kebijakan ini.
            </p>
            <button
              onClick={handleCloseModalPolicy}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Tutup
            </button>
          </div>
        </div>
      )}

      {/* Modal Bantuan */}
      {isModalOpenHelp && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white text-black p-4 rounded shadow-lg w-11/12 md:w-1/3">
            <h2 className="text-lg font-bold mb-2">Bantuan</h2>
            <p>
              Jika Anda membutuhkan bantuan, silakan hubungi kami di email
              support@readmegenerator.com.
            </p>
            <p>
              Anda juga dapat mengunjungi halaman FAQ untuk mendapatkan jawaban
              atas pertanyaan umum.
            </p>
            <button
              onClick={handleCloseModalHelp}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}

export default Footer;
