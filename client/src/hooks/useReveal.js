import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useReveal = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const elements = document.querySelectorAll(".reveal");

    elements.forEach((el) => {
      el.classList.remove("visible"); // reset
      io.observe(el);
    });

    return () => io.disconnect();
  }, [pathname]);
};

export default useReveal;