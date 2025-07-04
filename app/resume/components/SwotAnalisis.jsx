"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { swotTabs } from "../../lib/constants";

const SwotAnalisis = () => {
  const [selectedTab, setSelectedTab] = useState("S");

  return (
    <section id="about" className="lg:mx-10 text-white">
      <br />
      <br />
      <h1 className="text-4xl font-bold flex justify-center pt-12 lg:pb-4">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 mr-2">
          SWOT{" "}
        </span>
        Analysis
      </h1>

      <div className="grid grid-cols-1 my-12 gap-y-1 md:gap-y-2 lg:gap-y-3">
        <div className="grid grid-cols-4 gap-1 md:gap-2 lg:gap-3">
          {swotTabs.map((tab) => (
            <motion.button
              key={tab.title}
              className={`w-100 md:w-full py-4 px-2 text-xl text-black font-bold rounded-lg ${
                tab.color
              } ${
                selectedTab === tab.title ? "rounded-none rounded-t-lg" : ""
              }`}
              onClick={() => setSelectedTab(tab.title)}
              whileHover={{
                scaleX: 1,
                scaleY:
                  typeof window !== "undefined" && window.innerWidth >= 1024
                    ? 1.2
                    : typeof window !== "undefined" && window.innerWidth >= 768
                    ? 1.15
                    : 1.075,
                originY: 0,
                transition: { duration: 0.3 },
              }}
              animate={
                selectedTab === tab.title
                  ? {
                      scaleX: 1,
                      originX: 0,
                      scaleY:
                        typeof window !== "undefined" &&
                        window.innerWidth >= 1024
                          ? 1.2
                          : typeof window !== "undefined" &&
                            window.innerWidth >= 768
                          ? 1.15
                          : 1.1,
                      originY: 0,
                    }
                  : { scale: 1 }
              }
            >
              {tab.title}
            </motion.button>
          ))}
        </div>

        {swotTabs.map((tab) => (
          <div
            key={tab.title}
            className={`col-span-3 rounded-b-lg ${tab.class} ${
              selectedTab === tab.title ? tab.color : "hidden"
            }`}
          >
            <div className="mx-8 my-4 text-black">
              <h1 className="text-xl font-bold">{tab.head}</h1>
              <ul className="list-disc mx-6 mt-4 mb-8">
                {Array.isArray(tab.content) ? (
                  tab.content.map((item, index) => <li key={index}>{item}</li>)
                ) : (
                  <li>{tab.content}</li>
                )}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SwotAnalisis;
