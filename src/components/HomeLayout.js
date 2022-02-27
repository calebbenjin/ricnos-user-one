import React, { useState } from "react";
import Sticky from "react-stickynode";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  const [isSticky, setIsSticky] = useState(false);

  const handleSticky = (status) => {
    if (status.status === Sticky.STATUS_FIXED) {
      setIsSticky(true);
    } else if (status.status === Sticky.STATUS_ORIGINAL) {
      setIsSticky(false);
    }
  };

  return (
    <main className="main">
      <ToastContainer
        position="top-center"
        autoClose={8000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Sticky innerZ={1001} top={0} onStateChange={handleSticky}>
        <Navbar className={`${isSticky ? "sticky" : "unStick"}`} />
      </Sticky>
      {children}
      <Footer />
    </main>
  );
}
