"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const achievementsList = [
  {
    prefix: "+",
    metric: "Projects",
    value: 10,
    postfix: "",
  },
  {
    prefix: "",
    metric: "Master's degree",
    value: 5,
    postfix: "%",
  },
  {
    metric: "Working for",
    text: "PwC",
  },
  {
    prefix: "+",
    metric: "Years of experience",
    value: 2,
    postfix: "",
  },
];

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

const ScrambleLetter = ({ finalChar, delay = 0 }) => {
  const [char, setChar] = useState("");

  useEffect(() => {
    if (finalChar === " ") {
      setChar(" ");
      return;
    }

    let iterations = 0;
    const maxIterations = 8;

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setChar(CHARS[Math.floor(Math.random() * CHARS.length)]);

        iterations++;
        if (iterations >= maxIterations) {
          clearInterval(interval);
          setChar(finalChar);
        }
      }, 40);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [finalChar, delay]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-white text-3xl font-bold"
    >
      {char}
    </motion.span>
  );
};

const AchievementsSection = () => {
  return (
    <div className="xl:mt-10 py-8 px-4 sm:py-16 xl:px-16">
      <div className="border-[#33353F] border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4 my-4 sm:mx-4 sm:my-2"
          >
            <h2 className="text-white text-4xl font-bold flex">
              {achievement.text ? (
                <div className="flex">
                  {achievement.text.split("").map((char, i) => (
                    <ScrambleLetter key={i} finalChar={char} delay={i * 80} />
                  ))}
                </div>
              ) : (
                <>
                  {achievement.prefix}
                  <AnimatedNumbers
                    includeComma
                    animateToNumber={achievement.value}
                    locale="sp-SP"
                    className="text-white text-4xl font-bold"
                    configs={(_, i) => ({
                      mass: 1,
                      friction: 100,
                      tension: 140 * (i + 1),
                      delay: 0.8,
                      duration: 1,
                    })}
                  />
                  {achievement.postfix}
                </>
              )}
            </h2>

            <p className="text-[#ADB7BE] text-base mt-2">
              {achievement.metric}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
