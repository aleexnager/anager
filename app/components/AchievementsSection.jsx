"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: 50,
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: 1000,
  },
  {
    metric: "Awards",
    value: 10,
  },
  {
    metric: "Years",
    value: 5,
    postfix: "+",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-[#33353F] border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:mx-4 sm:my-2"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row ">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={achievement.value}
                  locale="sp-SP"
                  className="text-white text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tension: 140 * (index + 1),
                      delay: 0.8,
                      duration: 1,
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
