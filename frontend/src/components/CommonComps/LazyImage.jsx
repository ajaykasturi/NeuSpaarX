import React, { useEffect, useRef, useState } from "react";

function LazyImage(props) {
  const [inView, setInView] = useState(false);
  const ref = useRef();
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setInView(true);
      }
    });
  };
  useEffect(() => {
    let observer = new IntersectionObserver(callback);
    if (ref?.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  return inView ? <img ref={ref} {...props} /> : <img ref={ref} src={""} />;
}

export default LazyImage;
