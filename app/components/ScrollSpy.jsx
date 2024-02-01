import { useEffect } from "react";

const ScrollSpy = ({ id, onEnter, onLeave }) => {
  useEffect(() => {
    const element = document.getElementById(id);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onEnter();
        } else {
          onLeave();
        }
      },
      { threshold: 0.1 }
    );
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [id, onEnter, onLeave]);

  return null;
};

export default ScrollSpy;
