import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../data/logo";
import { motion } from "framer-motion";
import "../scss/layout/main.scss";

function Home(props) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        window.location.href = "/all";
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <>
      <motion.div
        className="overlay"
        initial={{ clipPath: "circle(100%)" }}
        animate={{ clipPath: "circle(20%)" }}
        transition={{
          delay: 2.15,
          duration: 0.5,
          type: "spring",
          bounce: 0.25,
        }}
      >
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 2.2,
            type: "spring",
            stiffness: 400,
            damping: 20,
          }}
        >
          <Logo fill="var(--background)" />
        </motion.div>
      </motion.div>
      <motion.div
        className="overlay white"
        animate={{
          clipPath: ["circle(100%)", "circle(100%)", "circle(0%)"],
        }}
        transition={{
          delay: 1,
          duration: 1.2,
          times: [0, 0.4, 1],
          ease: ["circOut", "circIn"],
        }}
        style={{ willChange: "clipPath" }}
      >
        <motion.div
          animate={{ scale: [1, 1.2, 0.6] }}
          transition={{
            duration: 1.2,
            delay: 1,
            times: [0, 0.6, 1],
            ease: ["circOut", "circIn"],
          }}
        >
          <Logo fill="var(--foreground)" />
        </motion.div>
      </motion.div>
      <p className="blink">Please press Enter</p>;
    </>
  );
}

export default Home;
