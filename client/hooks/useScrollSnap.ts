import { useEffect, useRef } from 'react';

interface ScrollSection {
  id: string;
  element: HTMLElement | null;
}

export function useScrollSnap() {
  const sectionsRef = useRef<ScrollSection[]>([]);
  const isScrollingRef = useRef(false);
  const lastUserScrollTimeRef = useRef(Date.now());
  const userScrollDirectionRef = useRef<'up' | 'down' | null>(null);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const updateSections = () => {
      const sections = document.querySelectorAll('section[id]');
      sectionsRef.current = Array.from(sections).map(section => ({
        id: section.id,
        element: section as HTMLElement
      }));
    };

    updateSections();

    // Handle section content changes
    const observer = new MutationObserver(updateSections);
    observer.observe(document.body, { childList: true, subtree: true });

    const handleScroll = () => {
      if (isScrollingRef.current) return;

      const currentScrollY = window.scrollY;
      const currentTime = Date.now();

      // Detect user scroll direction
      if (currentScrollY !== lastScrollYRef.current) {
        userScrollDirectionRef.current = currentScrollY > lastScrollYRef.current ? 'down' : 'up';
        lastUserScrollTimeRef.current = currentTime;
        lastScrollYRef.current = currentScrollY;
      }

      // Only snap if user hasn't scrolled for 200ms
      if (currentTime - lastUserScrollTimeRef.current < 200) return;

      // Find current section
      let currentSectionIndex = -1;
      for (let i = 0; i < sectionsRef.current.length; i++) {
        const section = sectionsRef.current[i];
        if (!section.element) continue;

        const rect = section.element.getBoundingClientRect();
        const sectionTop = rect.top + currentScrollY;
        const sectionHeight = rect.height;

        // Calculate how much of the section has been scrolled past
        const scrollProgress = (currentScrollY - sectionTop) / sectionHeight;

        // Check if this is the current section
        if (scrollProgress >= 0 && scrollProgress <= 1) {
          currentSectionIndex = i;

          // Check if we should snap based on scroll direction and progress
          if (userScrollDirectionRef.current === 'down' && scrollProgress > 0.7) {
            // Scroll down to next section
            const nextSection = sectionsRef.current[i + 1];
            if (nextSection?.element) {
              performSmoothScroll(nextSection.element.offsetTop);
            }
            break;
          } else if (userScrollDirectionRef.current === 'up' && scrollProgress < 0.2) {
            // Scroll up to previous section
            const prevSection = sectionsRef.current[i - 1];
            if (prevSection?.element) {
              performSmoothScroll(prevSection.element.offsetTop);
            }
            break;
          }
        }
      }
    };

    const performSmoothScroll = (targetY: number) => {
      if (isScrollingRef.current) return;

      isScrollingRef.current = true;
      const startScrollY = window.scrollY;
      const distance = targetY - startScrollY;
      const duration = 800; // 0.8 seconds

      let startTime: number | null = null;

      const smoothScroll = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Faster easing function
        const easeOutCubic = (t: number) => {
          return 1 - Math.pow(1 - t, 3);
        };

        const currentY = startScrollY + (distance * easeOutCubic(progress));
        window.scrollTo(0, currentY);

        if (progress < 1) {
          requestAnimationFrame(smoothScroll);
        } else {
          // End of scroll - reset flag
          isScrollingRef.current = false;
        }
      };

      requestAnimationFrame(smoothScroll);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return sectionsRef;
}