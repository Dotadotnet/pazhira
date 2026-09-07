

import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const OutsideClick = ({ children, setIsOpen , isOpen, className , targetRef}) => {
  const wrapperRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target) && !targetRef.current.contains(event.target)) {         
        setIsOpen(false);
        console.log(event.target);
        
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };


  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.3 }}
          ref={wrapperRef}
          className={"z-20" + (className ? ` ${className}` : "")} >
          {children}
        </motion.section>
      )}
    </AnimatePresence>

  );
};

export default OutsideClick;
