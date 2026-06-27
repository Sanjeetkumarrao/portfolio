import { useEffect, useRef } from 'react';

/**
 * useTyping
 * Attaches a typewriter loop to a ref element.
 * @param {string[]} words
 * @param {{ typeSpeed?: number, deleteSpeed?: number, pauseMs?: number }} opts
 */
const useTyping = (words, { typeSpeed = 100, deleteSpeed = 55, pauseMs = 2000 } = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current || !words.length) return;

    let wi = 0, ci = 0, deleting = false, timer;

    const tick = () => {
      const word = words[wi];
      if (!ref.current) return;

      if (deleting) {
        ref.current.textContent = word.slice(0, ci - 1);
        ci--;
      } else {
        ref.current.textContent = word.slice(0, ci + 1);
        ci++;
      }

      let delay = deleting ? deleteSpeed : typeSpeed;

      if (!deleting && ci === word.length)   { delay = pauseMs; deleting = true; }
      else if (deleting && ci === 0)          { deleting = false; wi = (wi + 1) % words.length; delay = 350; }

      timer = setTimeout(tick, delay);
    };

    timer = setTimeout(tick, 800);
    return () => clearTimeout(timer);
  }, [words, typeSpeed, deleteSpeed, pauseMs]);

  return ref;
};

export default useTyping;
