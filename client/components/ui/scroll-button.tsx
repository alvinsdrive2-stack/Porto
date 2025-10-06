import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface ScrollButtonProps {
  sectionId: string;
  className?: string;
  showThreshold?: number;
}

export function ScrollButton({
  sectionId,
  className,
  showThreshold = 0.8
}: ScrollButtonProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const sectionElement = document.getElementById(sectionId);

      if (!sectionElement) {
        setIsVisible(false);
        return;
      }

      const rect = sectionElement.getBoundingClientRect();
      const sectionTop = rect.top + scrollY;
      const sectionHeight = rect.height;

      // Check if section is in view
      if (rect.top <= windowHeight * 0.8 && rect.bottom >= windowHeight * 0.2) {
        // Calculate how much of section has been scrolled
        const scrollProgress = (scrollY - sectionTop) / sectionHeight;

        // Show button if scrolled past threshold
        const shouldShow = scrollProgress >= showThreshold && scrollProgress < 1;
        setIsVisible(shouldShow);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionId, showThreshold]);

  const scrollToBottom = () => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      // Scroll to bottom of current section
      const targetY = sectionElement.offsetTop + sectionElement.offsetHeight - window.innerHeight + 100;
      window.scrollTo({
        top: targetY,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Button
      onClick={scrollToBottom}
      className={cn(
        "fixed bottom-8 right-8 z-50 h-12 w-12 rounded-full bg-accent/90 text-background shadow-lg hover:bg-accent hover:shadow-xl transition-all duration-300 hover:scale-110",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none",
        className
      )}
      aria-label={`Scroll to bottom of ${sectionId} section`}
    >
      <ChevronDown className="h-5 w-5 animate-bounce" />
    </Button>
  );
}