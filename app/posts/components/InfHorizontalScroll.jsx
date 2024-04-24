import React from "react";
import { svgList } from "../../lib/svgs";

const InfHorizontalScroll = () => {
  const handleSvg = () => {
    return svgList.map((svg, index) => (
      <li key={index}>
        <svg
          id={svg.id}
          className="w-12 h-12 text-white"
          aria-hidden="true"
          viewBox="0 0 128 128"
          fill="currentColor"
        >
          {svg.paths &&
            svg.paths.map((path, pathIndex) => (
              <path key={pathIndex} fill={path.fill} d={path.d} />
            ))}
          {svg.groups &&
            svg.groups.map((group, groupIndex) => (
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
          {svg.gradientDefs &&
            svg.gradientDefs.map((gradientDef, gradientIndex) => (
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
      </li>
    ));
  };

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {handleSvg()}
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        {handleSvg()}
      </ul>
    </div>
  );
};

export default InfHorizontalScroll;
