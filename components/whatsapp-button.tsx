"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  // Automatically show the tooltip after 3 seconds, then hide after 8 seconds
  useEffect(() => {
    const timerShow = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    const timerHide = setTimeout(() => {
      setShowTooltip(false);
    }, 11000);

    return () => {
      clearTimeout(timerShow);
      clearTimeout(timerHide);
    };
  }, []);

  const handleClick = () => {
    const phoneNumber = "919249027951"; // Official Vedhya School contact number
    const message = "Hello Vedhya School.";
    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setShowTooltip(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {/* Floating Action Button */}
      <div className="relative flex items-center">
        {/* Tooltip Popup on Hover/Load */}
        <AnimatePresence>
          {showTooltip && (
            <motion.button
              onClick={handleClick}
              initial={{ opacity: 0, x: 20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.95 }}
              className="absolute right-16 mr-2 bg-ink text-cream border border-gold/30 px-4 py-2.5 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-xl whitespace-nowrap z-40 flex items-center gap-2 hover:border-gold transition-all cursor-pointer"
            >
              <span>Chat with us</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* The Button */}
        <motion.button
          onClick={handleClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-2xl transition-shadow cursor-pointer relative z-50 group overflow-hidden border border-emerald-500"
          aria-label="Contact via WhatsApp"
        >
          <span className="absolute inset-0 rounded-full border border-emerald-400 opacity-0 group-hover:animate-ping group-hover:opacity-40" />
          <svg
            viewBox="0 0 24 24"
            className="w-7 h-7 fill-current"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.588 1.485 5.362 1.486 5.489 0 9.954-4.469 9.958-9.96.002-2.661-1.034-5.163-2.92-7.05-1.884-1.884-4.385-2.92-7.05-2.921-5.496 0-9.96 4.468-9.964 9.96-.001 1.874.499 3.702 1.446 5.31l-.992 3.626 3.722-.976zm11.236-6.425c-.279-.14-1.65-.814-1.906-.906-.256-.093-.443-.14-.63.14-.188.28-.724.908-.887 1.093-.163.186-.326.21-.605.07-1.147-.574-1.921-1.012-2.684-2.326-.201-.344.201-.32.576-1.073.101-.205.051-.383-.026-.523-.075-.14-.63-1.517-.863-2.078-.228-.547-.46-.473-.63-.481-.163-.008-.35-.01-.537-.01-.186 0-.49.07-.746.353-.256.282-.98.957-.98 2.33 0 1.373 1 2.7 1.139 2.89.139.186 1.968 3.005 4.767 4.213.665.287 1.184.458 1.588.587.668.213 1.278.183 1.758.11.536-.08 1.65-.674 1.884-1.326.233-.652.233-1.21.163-1.325-.07-.11-.256-.15-.536-.29z" />
          </svg>
        </motion.button>
      </div>
    </div>
  );
}
