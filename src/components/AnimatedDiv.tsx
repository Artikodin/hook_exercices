import { useEffect, useRef } from "react";
import "./AnimatedDiv.css";

type Props = {
  color: string | null;
};

const lerp = (progress: number) => Math.sin(progress / 1000);

const AnimatedDiv = ({ color }: Props) => {
  const animatedDiv = useRef<any>();

  useEffect(() => {
    let animationId: number;

    const start = performance.now();
    function animateTranslate(timestamp: number) {
      const progress = timestamp - start;
      animatedDiv.current.style.translate = `${lerp(progress) * 100}%`;
      animationId = requestAnimationFrame(animateTranslate);
    }

    animationId = requestAnimationFrame(animateTranslate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return <div ref={animatedDiv} className={`animated ${color}`}></div>;
};

export default AnimatedDiv;
