import React from "react";

const Container = ({ 
  children, 
  className = ""
}) => {
  return (
    <section className={`container mx-auto px-4 ${className}`}>
      {children}
    </section>
  );
};

export default Container;

