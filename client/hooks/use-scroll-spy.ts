import { useEffect, useState } from "react";

export function useScrollSpy<T extends string>(
  sectionIds: T[],
  offsetRatio = 0.33,
) {
  const [activeId, setActiveId] = useState<T>(() => sectionIds[0] ?? ("" as T));

  useEffect(() => {
    if (sectionIds.length === 0) {
      return;
    }

    let animationFrame: number | null = null;

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + window.innerHeight * offsetRatio;
      let currentId = sectionIds[0];

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (!element) {
          continue;
        }

        if (scrollPosition >= element.offsetTop) {
          currentId = id;
        }
      }

      if (currentId) {
        setActiveId(currentId);
      }
    };

    const handleScroll = () => {
      if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame);
      }

      animationFrame = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame);
      }
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [offsetRatio, sectionIds]);

  return activeId;
}
