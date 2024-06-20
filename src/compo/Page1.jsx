import React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";

function Page1() {
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
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
            cupiditate fugit, magnam, nam inventore modi dolorem eius nemo nisi
            at consectetur, animi possimus minus sint! Quis quibusdam beatae
            molestiae saepe?
          </p>
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
          1
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
          1
        </motion.div>
      </section>
    </>
  );
}

export default Page1;
