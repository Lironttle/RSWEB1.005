import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';

const SQRT_5000 = Math.sqrt(5000);

type Testimonial = {
  tempId: number;
  testimonial: string;
  by: string;
  imgSrc: string;
};

const testimonials: Testimonial[] = [
  {
    tempId: 0,
    testimonial:
      'RS Construction have consistently provided excellent workmanship with a proven track record of completing projects to high standards, on time and within budget.',
    by: 'London Borough of Newham, Local Authority Partner',
    imgSrc: '/images/clients/newham-london.png',
  },
  {
    tempId: 1,
    testimonial:
      'Outstanding quality of workmanship throughout their projects. Their attention to detail and health & safety standards are exceptional.',
    by: 'Wates, Construction Partner',
    imgSrc: '/images/clients/wates.png',
  },
  {
    tempId: 2,
    testimonial: 'To be filled',
    by: 'Rakesh Parmar, Maintenance Team Manager – Voids (East & North East)',
    imgSrc: 'https://ui-avatars.com/api/?name=Rakesh+Parmar&background=DC2626&color=fff&bold=true&size=128',
  },
  {
    tempId: 3,
    testimonial: 'To be filled',
    by: 'Barry Hay, Legal Disrepair Surveyor London South Region | Peabody',
    imgSrc: '/images/clients/peabody.png',
  },
  {
    tempId: 4,
    testimonial: 'To be filled',
    by: 'Samantha Thompson, Contracts Officer | C&C London Homes',
    imgSrc: 'https://ui-avatars.com/api/?name=Samantha+Thompson&background=DC2626&color=fff&bold=true&size=128',
  },
];

interface TestimonialCardProps {
  position: number;
  testimonial: Testimonial;
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  position,
  testimonial,
  handleMove,
  cardSize,
}) => {
  const isCenter = position === 0;
  const [personName, ...roleParts] = testimonial.by.split(',');
  const role = roleParts.join(',').trim();

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        'absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out',
        isCenter
          ? 'z-10 bg-primary text-white border-primary-700'
          : 'z-0 bg-white dark:bg-surface text-dark dark:text-white border-gray-200 dark:border-surface-border hover:border-primary/50'
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath:
          'polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)',
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter
          ? '0px 8px 0px 4px rgba(10, 10, 10, 0.1)'
          : '0px 0px 0px 0px transparent',
      }}
    >
      <span
        className={cn(
          'absolute block origin-top-right rotate-45',
          isCenter ? 'bg-white/30' : 'bg-gray-200 dark:bg-surface-border'
        )}
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2,
        }}
      />
      <div
        className="mb-4 flex h-14 w-14 items-center justify-center overflow-hidden bg-white p-1"
        style={{ boxShadow: '3px 3px 0px rgba(10, 10, 10, 0.12)' }}
      >
        <img
          src={testimonial.imgSrc}
          alt={personName}
          className="h-full w-full object-contain"
          loading="lazy"
        />
      </div>
      <h3
        className={cn(
          'font-serif text-base sm:text-xl leading-snug',
          isCenter ? 'text-white' : 'text-dark dark:text-white'
        )}
      >
        &ldquo;{testimonial.testimonial}&rdquo;
      </h3>
      <p
        className={cn(
          'absolute bottom-8 left-8 right-8 mt-2 text-xs sm:text-sm italic leading-relaxed',
          isCenter ? 'text-white/80' : 'text-muted dark:text-gray-400'
        )}
      >
        <span className="font-semibold not-italic">{personName}</span>
        {role && <>, {role}</>}
      </p>
    </div>
  );
};

export default function StaggerTestimonials() {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState<Testimonial[]>(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia('(min-width: 640px)');
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: cardSize + 235 }}
    >
      {testimonialsList.map((testimonial, index) => {
        const position =
          testimonialsList.length % 2
            ? index - (testimonialsList.length + 1) / 2
            : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            'flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center transition-colors',
            'bg-white dark:bg-surface border-2 border-gray-200 dark:border-surface-border',
            'text-dark dark:text-white hover:bg-primary hover:text-white hover:border-primary',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            'flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center transition-colors',
            'bg-white dark:bg-surface border-2 border-gray-200 dark:border-surface-border',
            'text-dark dark:text-white hover:bg-primary hover:text-white hover:border-primary',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
