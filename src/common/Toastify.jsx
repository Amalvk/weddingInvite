import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Toastify({ open }) {
  useEffect(() => {
    if (open !== null) {
      toast[open ? "success" : "error"](open ? "This is a success toast! 🎉" : "Error Message! ❌", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  }, [open]); // ✅ Runs only when 'open' changes

  return <ToastContainer />;
}
