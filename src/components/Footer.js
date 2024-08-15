import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-600 p-4 text-white text-center mt-8">
      <p>
        &copy; {new Date().getFullYear()} Readme Generator. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
