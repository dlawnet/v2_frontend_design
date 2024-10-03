import { useEffect, useRef, useState } from "react";

function LazyImage({ src, alt, classStyle, ...props }) {
  const [isInView, setIsInView] = useState(false);
  const imageRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      });
    });

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <img
      ref={imageRef}
      src={isInView ? src : ""}
      alt={alt}
      {...props}
      className={`${classStyle} transition-opacity duration-700 ease-in-out opacity-0`}
      onLoad={(e) => (e.target.style.opacity = 1)}
    />
  );
}

export default LazyImage;
