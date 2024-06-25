import React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";

function Project() {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        window.location.href = "/";
      } else if (e.key === "Backspace") {
        window.location.href = "/";
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <section>
        <motion.div
          className="se1"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <img src="../public/mac.svg" alt="" />
        </motion.div>

        <motion.div
          className="se2"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <img src="../public/vans2.svg" alt="" />
        </motion.div>
        <motion.div
          className="se3"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <img src="../public/vans2.svg" alt="" />
        </motion.div>

        <motion.div
          className="se4"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <img src="../public/vans2.svg" alt="" />
        </motion.div>
      </section>
    </>
  );
}

export default Project;
