
import { ReactNode } from 'react';
import { useInView } from '../hooks/useInView';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale';
  delay?: number;
}

const AnimatedSection = ({ 
  children, 
  className = '', 
  animation = 'fade-up',
  delay = 0 
}: AnimatedSectionProps) => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const animationClasses = {
    'fade-up': isInView ? 'animate-fade-in-up' : 'opacity-0 translate-y-8',
    'fade-left': isInView ? 'animate-slide-in-left' : 'opacity-0 -translate-x-8',
    'fade-right': isInView ? 'animate-slide-in-right' : 'opacity-0 translate-x-8',
    'scale': isInView ? 'animate-scale-in' : 'opacity-0 scale-95',
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${animationClasses[animation]} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
