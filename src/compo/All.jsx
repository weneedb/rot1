import React from "react";
// import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import { texts } from "../data";

function All(props) {
  const text = "McDonald".split("");
  const text2 = " 123 ".split("");
  const text3 = " 123 ".split("");
  const text4 = " OFF THE WALL ".split("");
  const text5 = " Home ".split("");
  const text6 = " Project ".split("");
  const text7 = " ETC ".split("");
  const text8 = " About ".split("");

  const variants = {
    start: { pathLength: 0, fill: "current" },
    end: { pathLength: 1, fill: "current" },
  };

  //start: { pathLength: 0, fill: "rgba(255, 255, 255,0)" },     end: { pathLength: 1, fill: "rgba(255,255,255,1)" },

  return (
    <div className="App">
      <div className="project">
        <div className="project_title">
          <h2>Project</h2>
        </div>
        <div className="project_item">
          <div className="item01">
            <Link to="/page4">
              <motion.div className="img" whileHover={{ scale: 1.2 }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="2.096 -27.722 295.809 295.809"
                >
                  <motion.path
                    variants={variants}
                    initial="start"
                    animate="end"
                    transition={{
                      default: { duration: 1.8 },
                      fill: { duration: 1, delay: 1.1 },
                    }}
                    d="M196.489 18.773c23.334 0 42.253 98.376 42.253 219.73h33.81c0-130.692-34.059-236.635-76.062-236.635-23.899 0-45.221 31.84-59.163 81.629-13.939-49.789-35.268-81.629-59.165-81.629-42.003 0-76.066 105.943-76.066 236.635H35.91c0-121.354 18.921-219.73 42.252-219.73 23.338 0 42.264 90.809 42.264 202.834h33.802c.001-112.025 18.921-202.834 42.261-202.834M289.475 221.607c4.586 0 8.43 3.631 8.43 8.408 0 4.853-3.844 8.486-8.43 8.486-4.602 0-8.478-3.635-8.478-8.486 0-4.777 3.876-8.408 8.478-8.408m0 15.661c3.884 0 6.9-3.121 6.9-7.25 0-4.057-3.018-7.174-6.9-7.174-3.932 0-6.945 3.117-6.945 7.174-.001 4.128 3.013 7.25 6.945 7.25zm-3.287-12.159h3.809c2.331 0 3.43.928 3.43 2.82 0 1.785-1.114 2.531-2.574 2.686l2.804 4.367h-1.646l-2.672-4.248h-1.616v4.248h-1.533l-.002-9.873zm1.534 4.386h1.597c1.345 0 2.584-.067 2.584-1.632 0-1.313-1.124-1.519-2.157-1.519h-2.022l-.002 3.151z"
                  />
                </svg>
              </motion.div>
            </Link>
            <div className="item_text">
              {text.map((el, i) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.25,
                    delay: i / 10,
                  }}
                  key={i}
                >
                  {el}
                  {""}
                </motion.span>
              ))}
            </div>
          </div>
          <div className="item02">
            <Link to="/page4">
              <motion.div className="img" whileHover={{ scale: 1.2 }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="2.096 -27.722 295.809 295.809"
                >
                  <motion.path
                    variants={variants}
                    initial="start"
                    animate="end"
                    transition={{
                      default: { duration: 1.8 },
                      fill: { duration: 1, delay: 1.1 },
                    }}
                    d="M196.489 18.773c23.334 0 42.253 98.376 42.253 219.73h33.81c0-130.692-34.059-236.635-76.062-236.635-23.899 0-45.221 31.84-59.163 81.629-13.939-49.789-35.268-81.629-59.165-81.629-42.003 0-76.066 105.943-76.066 236.635H35.91c0-121.354 18.921-219.73 42.252-219.73 23.338 0 42.264 90.809 42.264 202.834h33.802c.001-112.025 18.921-202.834 42.261-202.834M289.475 221.607c4.586 0 8.43 3.631 8.43 8.408 0 4.853-3.844 8.486-8.43 8.486-4.602 0-8.478-3.635-8.478-8.486 0-4.777 3.876-8.408 8.478-8.408m0 15.661c3.884 0 6.9-3.121 6.9-7.25 0-4.057-3.018-7.174-6.9-7.174-3.932 0-6.945 3.117-6.945 7.174-.001 4.128 3.013 7.25 6.945 7.25zm-3.287-12.159h3.809c2.331 0 3.43.928 3.43 2.82 0 1.785-1.114 2.531-2.574 2.686l2.804 4.367h-1.646l-2.672-4.248h-1.616v4.248h-1.533l-.002-9.873zm1.534 4.386h1.597c1.345 0 2.584-.067 2.584-1.632 0-1.313-1.124-1.519-2.157-1.519h-2.022l-.002 3.151z"
                  />
                </svg>
              </motion.div>
            </Link>
            <div className="item_text">
              {text.map((el, i) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.25,
                    delay: i / 10,
                  }}
                  key={i}
                >
                  {el}
                  {""}
                </motion.span>
              ))}
            </div>
          </div>
          <div className="item03">
            <Link to="/page4">
              <motion.div className="img" whileHover={{ scale: 1.2 }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="2.096 -27.722 295.809 295.809"
                >
                  <motion.path
                    variants={variants}
                    initial="start"
                    animate="end"
                    transition={{
                      default: { duration: 1.8 },
                      fill: { duration: 1, delay: 1.1 },
                    }}
                    d="M196.489 18.773c23.334 0 42.253 98.376 42.253 219.73h33.81c0-130.692-34.059-236.635-76.062-236.635-23.899 0-45.221 31.84-59.163 81.629-13.939-49.789-35.268-81.629-59.165-81.629-42.003 0-76.066 105.943-76.066 236.635H35.91c0-121.354 18.921-219.73 42.252-219.73 23.338 0 42.264 90.809 42.264 202.834h33.802c.001-112.025 18.921-202.834 42.261-202.834M289.475 221.607c4.586 0 8.43 3.631 8.43 8.408 0 4.853-3.844 8.486-8.43 8.486-4.602 0-8.478-3.635-8.478-8.486 0-4.777 3.876-8.408 8.478-8.408m0 15.661c3.884 0 6.9-3.121 6.9-7.25 0-4.057-3.018-7.174-6.9-7.174-3.932 0-6.945 3.117-6.945 7.174-.001 4.128 3.013 7.25 6.945 7.25zm-3.287-12.159h3.809c2.331 0 3.43.928 3.43 2.82 0 1.785-1.114 2.531-2.574 2.686l2.804 4.367h-1.646l-2.672-4.248h-1.616v4.248h-1.533l-.002-9.873zm1.534 4.386h1.597c1.345 0 2.584-.067 2.584-1.632 0-1.313-1.124-1.519-2.157-1.519h-2.022l-.002 3.151z"
                  />
                </svg>
              </motion.div>
            </Link>
            <div className="item_text">
              {text.map((el, i) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.25,
                    delay: i / 10,
                  }}
                  key={i}
                >
                  {el}
                  {""}
                </motion.span>
              ))}
            </div>
          </div>
          <div className="item04">
            <Link to="/page4">
              <motion.div className="img" whileHover={{ scale: 1.2 }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 443.8 197.4"
                >
                  <motion.path
                    variants={variants}
                    initial="start"
                    animate="end"
                    transition={{
                      default: { duration: 1.8 },
                      fill: { duration: 1, delay: 1.1 },
                    }}
                    d="M374.4,66.4h-18.1c-1.8-4.4-3.7-7.9-13.8-7.9c-7,0-10,2.9-10,5.8c0,3.2,2.5,5.8,10.2,7.5l16.4,4.4
                c10.7,2.9,15.9,11.4,15.9,20.3c0,5-1.1,11-5.8,16c-3.5,3.7-8.9,8.6-26.7,8.6c-24.4,0-32.5-15.4-32.5-24.8h19
                c1.9,6.8,6.5,9.4,15.8,9.4c6.4,0,11.9-2.3,11.9-7.2c0-4.7-4-6.4-9.1-7.8l-12.9-3.5c-6.2-1.9-11.4-3.4-15.1-6.5
                c-9.6-8.2-8.9-22.9,1.5-30.5c5.8-4.2,11.7-6.4,21.2-6.4c11.1,0,17.4,3.2,22.4,6.6C369,53.2,374.3,60.6,374.4,66.4 M69.3,14.2
                c0.2,0.6,37.8,106,37.8,106h22.5l34.6-87.7h215l1.6-18.3H147.7L119,86.9L93.2,14.2L69.3,14.2 M255.2,82.3l28.1,37.9h17.6V45.2h-20.2
                V86l-25.4-40.7h-19.4v74.9h19.4V82.3L255.2,82.3z M381.5,116.3c0-2.2-1.8-4-4-4s-4,1.8-4,4s1.8,4,4,4
                C379.7,120.3,381.6,118.5,381.5,116.3C381.6,116.3,381.6,116.3,381.5,116.3L381.5,116.3z M381.1,116.3c0,1.9-1.6,3.5-3.5,3.5
                c-1.9,0-3.5-1.6-3.5-3.5s1.6-3.5,3.5-3.5C379.5,112.7,381.1,114.2,381.1,116.3C381.1,116.2,381.1,116.2,381.1,116.3L381.1,116.3z
                 M379.4,115.4c0-0.8-0.7-1.4-1.4-1.4c-0.1,0-0.1,0-0.2,0h-1.9v4.2h0.9v-1.4h0.7l0.9,1.4h1.1l-1-1.5
                C379.1,116.6,379.5,116,379.4,115.4L379.4,115.4z M378.5,115.5c0,0.3-0.3,0.6-0.6,0.6c0,0-0.1,0-0.1,0h-0.9v-1.2h0.9
                c0.3-0.1,0.7,0.1,0.8,0.4C378.5,115.4,378.6,115.4,378.5,115.5L378.5,115.5z M148.2,120.2h21.6l4-11.7h28.5l4.1,11.7h21.2
                l-27.2-74.9h-22.9L148.2,120.2z M179.8,94.9l8.4-24.9l8.2,24.9H179.8L179.8,94.9z"
                  />
                </svg>
              </motion.div>
            </Link>
            <div className="item_text">
              {text4.map((el, i) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.25,
                    delay: i / 10,
                  }}
                  key={i}
                >
                  {el}
                  {""}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="etc">
        <div className="etc_title">
          <h2>ETC</h2>
        </div>
        <div className="etc_item">
          <div className="item05">
            <Link to="/all">
              <motion.div className="img" whileHover={{ scale: 1.2 }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                  <motion.path
                    variants={variants}
                    initial="start"
                    animate="end"
                    transition={{
                      default: { duration: 1.8 },
                      fill: { duration: 1, delay: 1.1 },
                    }}
                    d="M124.9,10.6c-1.1,0.5-17.2,19.5-58,68.4c-44.9,53.8-56.5,68.1-56.8,69.4c-0.4,2.4,0.1,4.7,1.5,6.3c2.2,2.6,3.1,2.7,16,2.7h11.8v41.8c0,46.3-0.1,44,3,45.9c1.3,0.8,2.8,0.9,26.7,0.9h25.2l1.5-1.2c2.8-2.4,2.7-1.6,2.7-32.5c0-31.8,0-32,3.3-38.6c4.8-9.6,15.3-16.1,26.2-16.1c11,0,21.4,6.5,26.2,16.2c3.3,6.6,3.3,6.8,3.3,38.5c0,26.8,0,28.2,0.9,30.1c0.5,1.2,1.5,2.4,2.4,2.9c1.5,0.9,2.3,0.9,26.5,0.9h24.9l1.5-1.2c2.9-2.4,2.7-0.4,2.7-45.8v-41.5h11.8c13,0,13.9-0.1,16-2.7c1.5-1.8,2-4.2,1.4-6.5c-0.3-1.2-4.6-6.7-14.7-18.8l-14.3-17.1l-0.2-34.1c-0.2-33.5-0.2-34.1-1.2-35.4c-2.4-3.1-2.4-3.2-13.6-3.2s-11.2,0-13.6,3.2c-0.9,1.2-1,2-1.2,17.4l-0.2,16.1l-27.1-32.6C139,19,132.2,11.1,131,10.6C129,9.7,126.9,9.8,124.9,10.6z"
                  />
                </svg>
              </motion.div>
            </Link>
            <div className="item_text">
              {text5.map((el, i) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.25,
                    delay: i / 10,
                  }}
                  key={i}
                >
                  {el}
                  {""}
                </motion.span>
              ))}
            </div>
          </div>
          <div className="item05">
            <Link to="/project">
              <motion.div className="img" whileHover={{ scale: 1.2 }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                  <motion.path
                    variants={variants}
                    initial="start"
                    animate="end"
                    transition={{
                      default: { duration: 1.8 },
                      fill: { duration: 1, delay: 1.1 },
                    }}
                    d="M10.1,115.5h101.2V5.5H10.1V115.5z M27,23.8h67.5v73.3H27V23.8z
                    M145.3,5.5v109.9H246V5.5H145.3z M229.6,95.6h-67.5V22.3h67.5V95.6z
                    M10,250.5h101.2V140.5H10V250.5z M27,159h67.5v73.3H27V159z
                    M145.1,250.5h100.7V140.5H145.1V250.5z M162.1,157.4h67.5v73.3h-67.5V157.4z"
                  />
                </svg>
              </motion.div>
            </Link>
            <div className="item_text">
              {text6.map((el, i) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.25,
                    delay: i / 10,
                  }}
                  key={i}
                >
                  {el}
                  {""}
                </motion.span>
              ))}
            </div>
          </div>
          <div className="item05">
            <Link to="/etc">
              <motion.div className="img" whileHover={{ scale: 1.2 }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                  <motion.path
                    variants={variants}
                    initial="start"
                    animate="end"
                    transition={{
                      default: { duration: 1.8 },
                      fill: { duration: 1, delay: 1.1 },
                    }}
                    d="M29.1,136H77v-19.1H25.9V84.9h54.2V65.8H10v124.4h73.4v-19.1H29.1V136z M245.9,168c-0.1-0.9-0.2-1.7-0.4-2.2c-0.2-0.5-0.5-0.9-0.8-1.1c-0.3-0.2-0.7-0.3-1.2-0.3c-1,0-2.3,0.6-3.9,1.8c-1.7,1.2-3.8,2.5-6.4,4c-2.6,1.5-5.8,2.9-9.5,4c-3.7,1.2-1.5,0-6.4,0c-5.8,0-11.4-1.2-15.9-3.2c-4.6-2-8.1-3.2-11.2-7.2c-3.2-4-5.6-8.9-7.3-14.8c-1.7-5.9-3.9-11.8-3.9-19.5c0-7.8,2.2-15.6,3.9-21.7c1.8-6,4.2-11.2,7.4-15.4c3.2-4.2,6.5-5.5,11-7.7c4.5-2.2,10.5-3.2,15.9-3.2c5,0,2.8-1.2,6.4,0c3.6,1.2,6.4,2.5,8.9,4c2.5,1.5,4.6,2.8,6.2,4s2.8,1.8,3.7,1.8c0.5,0,0.9-0.1,1.3-0.4c0.4-0.3,0.7-0.7,0.9-1.3s0.4-1.3,0.6-2.2c0.1-0.9,0.2-1.9,0.2-3.2c0-1.1,0-2.1-0.1-2.9c-0.1-0.8-0.2-1.5-0.4-2.1s-0.4-1.1-0.6-1.5c-0.2-0.4-0.8-1.1-1.7-1.9c-0.9-0.8-2.4-1.9-4.6-3.3c-2.2-1.3-4.8-2.5-7.6-3.5c-2.8-1-5.9-1.8-9.3-2.5c-3.4-0.7-0.4-1-4-1c-8,0-15.4,1.4-22,4.3c-6.6,2.9-12.3,7.1-17.1,12.5c-4.8,5.5-8.5,12.2-11.1,20.1c-2.6,7.9-4,16.9-4,26.9c0,9.8,1.2,18.5,3.7,26.1c2.4,7.5,5.9,13.9,10.5,19c4.5,5.1,10,9,16.4,11.7c6.4,2.6,13.7,3.9,21.7,3.9c4.6,0,2.5-0.4,6.4-1.3c3.9-0.8,7.3-1.9,10.4-3.1c3-1.2,5.5-2.5,7.6-3.8c2-1.3,3.4-2.2,4-2.9c0.6-0.6,1.1-1.2,1.3-1.6c0.3-0.4,0.5-0.9,0.6-1.5c0.2-0.6,0.3-1.2,0.3-2c0.1-0.7,0.1-1.6,0.1-2.6C246,170.1,246,168.9,245.9,168z M163.1,65.8H86.6v19.1h28.7v105.3h19.1V84.9h28.7V65.8z"
                  />
                </svg>
              </motion.div>
            </Link>
            <div className="item_text">
              {text7.map((el, i) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.25,
                    delay: i / 10,
                  }}
                  key={i}
                >
                  {el}
                  {""}
                </motion.span>
              ))}
            </div>
          </div>
          <div className="item05">
            <Link to="/about">
              <motion.div className="img" whileHover={{ scale: 1.2 }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                  <motion.path
                    variants={variants}
                    initial="start"
                    animate="end"
                    transition={{
                      default: { duration: 1.8 },
                      fill: { duration: 1, delay: 1.1 },
                    }}
                    d="M126.4,10C61.3,10.9,9.1,64.4,10,129.6c0.9,65.1,54.4,117.3,119.6,116.4c65.2-0.9,117.3-54.4,116.4-119.6C245.1,61.3,191.6,9.1,126.4,10L126.4,10z M139.5,49.3c12,0,15.5,7,15.5,14.9c0,9.9-8,19.1-21.6,19.1c-11.4,0-16.8-5.7-16.4-15.2C117.1,60.3,123.7,49.3,139.5,49.3z M108.8,201.7c-8.2,0-14.2-5-8.5-26.9l9.4-38.8c1.6-6.2,1.9-8.7,0-8.7c-2.5,0-13.1,4.3-19.4,8.5l-4.1-6.7c19.9-16.6,42.9-26.4,52.7-26.4c8.2,0,9.6,9.7,5.5,24.6l-10.8,40.8c-1.9,7.2-1.1,9.7,0.8,9.7c2.5,0,10.5-3,18.4-9.2l4.6,6.2C138.1,194.3,117,201.7,108.8,201.7L108.8,201.7z"
                  />
                </svg>
              </motion.div>
            </Link>
            <div className="item_text">
              {text8.map((el, i) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.25,
                    delay: i / 10,
                  }}
                  key={i}
                >
                  {el}
                  {""}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default All;
