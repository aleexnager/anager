import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { svgList } from "../lib/svgs";
import Image from "next/image";

const svgsList = [
  {
    id: "html",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    id: "css",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    id: "tailwind",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    id: "bootstrap",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    id: "javascript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    id: "typescript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    id: "react",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    id: "next",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    id: "dotnet",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
  },
];

const handleSvg = (svgs) => {
  return svgs.map((svg, index) => {
    const svgData = svgList.find((item) => item.id === svg);
    return (
      <Image
        key={index}
        src={svgData.src}
        alt={svgData.id}
        width={40}
        height={40}
        className=""
      />
    );
  });

  /*return svgs.map((svg, index) => {
    const svgData = svgList.find((item) => item.id === svg);
    return (
      <svg
        key={index}
        id={svgData.id}
        className="w-10 h-10 text-white"
        aria-hidden="true"
        viewBox="0 0 128 128"
        fill="currentColor"
      >
        {svgData.paths &&
          svgData.paths.map((path, pathIndex) => (
            <path key={pathIndex} fill={path.fill} d={path.d} />
          ))}
        {svgData.groups &&
          svgData.groups.map((group, groupIndex) => (
            <g key={groupIndex} fill={group.fill}>
              {group.elements &&
                group.elements.map((element, elementIndex) => {
                  if (element.type === "circle") {
                    return (
                      <circle
                        key={elementIndex}
                        cx={element.cx}
                        cy={element.cy}
                        r={element.r}
                      />
                    );
                  } else if (element.type === "path") {
                    return <path key={elementIndex} d={element.d} />;
                  }
                  return null;
                })}
            </g>
          ))}
        {svgData.gradientDefs &&
          svgData.gradientDefs.map((gradientDef, gradientIndex) => (
            <defs key={gradientIndex}>
              <linearGradient
                id={gradientDef.id}
                x1={gradientDef.x1}
                x2={gradientDef.x2}
                y1={gradientDef.y1}
                y2={gradientDef.y2}
                gradientTransform={gradientDef.gradientTransform}
                gradientUnits={gradientDef.gradientUnits}
              >
                {gradientDef.stops &&
                  gradientDef.stops.map((stop, stopIndex) => (
                    <stop
                      key={stopIndex}
                      offset={stop.offset}
                      stopColor={stop.stopColor}
                      stopOpacity={stop.stopOpacity}
                    />
                  ))}
              </linearGradient>
            </defs>
          ))}
      </svg>
    );
  });*/
};

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  svgs,
}) => {
  return (
    <div>
      <div
        className="h-60 md:h-72 rounded-t-xl relative group"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="flex justify-end p-2">
          <div className="flex bg-[#181818] bg-opacity-95 rounded-full gap-2 px-6 py-2">
            {handleSvg(svgs)}
          </div>
        </div>
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 group-hover:rounded-t-xl transition-all duration-1000">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-6 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ABD7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ABD7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <div className="flex justify-between">
          <div>
            <h5 className="text-white text-xl font-semibold mb-2">{title}</h5>
            <p className="text-[#ADB7BE]">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
