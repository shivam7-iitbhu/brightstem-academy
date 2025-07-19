import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Clock, CheckCircle } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import useEmblaCarousel from 'embla-carousel-react';

interface Bootcamp {
  title: string;
  description: string;
  ageGroup: string;
  duration: string;
  sessions: string;
  topics: string[];
  icon: React.ComponentType<any>;
  color: 'blue' | 'purple' | 'green';
}

interface BootcampCarouselProps {
  bootcamps: Bootcamp[];
}

export const BootcampCarousel: React.FC<BootcampCarouselProps> = ({ bootcamps }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % bootcamps.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + bootcamps.length) % bootcamps.length);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  // Get the indices for visible cards (previous, current, next)
  const getVisibleCards = () => {
    const prevIndex = (currentIndex - 1 + bootcamps.length) % bootcamps.length;
    const nextIndex = (currentIndex + 1) % bootcamps.length;
    return { prevIndex, currentIndex, nextIndex };
  };

  const { prevIndex, nextIndex } = getVisibleCards();

  // Update Embla carousel when currentIndex changes
  useEffect(() => {
    if (emblaApi) {
      emblaApi.scrollTo(currentIndex);
    }
  }, [currentIndex, emblaApi]);

  return (
    <div className="relative w-full">
      {/* Desktop Grid (hidden on mobile) */}
      <div className="hidden md:grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {bootcamps.map((bootcamp, index) => (
          <BootcampCard key={index} bootcamp={bootcamp} isActive={false} />
        ))}
      </div>

      {/* Mobile and Tablet View - Carousel */}
      <div className="relative md:hidden">
        {/* Fade overlays for scroll affordance */}
        <div className="pointer-events-none absolute top-0 left-0 h-full w-8 z-10 bg-gradient-to-r from-white via-white/80 to-transparent" />
        <div className="pointer-events-none absolute top-0 right-0 h-full w-8 z-10 bg-gradient-to-l from-white via-white/80 to-transparent" />
        <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-2xl mx-auto overflow-visible" ref={emblaRef}>
          <CarouselContent className="-ml-8 md:-ml-4 pr-8 md:pr-4">
            {bootcamps.map((bootcamp, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 transition-transform duration-500" style={{
                marginLeft: index === 0 ? '8px' : undefined,
                marginRight: index === bootcamps.length - 1 ? '8px' : undefined,
              }}>
                <div className={index === 0 ? "animate-shake-x" : ""}>
                  <BootcampCard bootcamp={bootcamp} isActive={index === currentIndex} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        {/* Only one swipe or tap arrows to explore label, with working arrows */}
        <div className="text-center mt-4 flex items-center justify-center gap-2">
          <button onClick={() => emblaApi && emblaApi.scrollPrev()} aria-label="Previous bootcamp" className="p-1 rounded-full hover:bg-gray-100 transition">
            <ChevronLeft className="h-4 w-4 text-gray-500" />
          </button>
          <span className="text-sm text-gray-500">Swipe or tap arrows to explore</span>
          <button onClick={() => emblaApi && emblaApi.scrollNext()} aria-label="Next bootcamp" className="p-1 rounded-full hover:bg-gray-100 transition">
            <ChevronRight className="h-4 w-4 text-gray-500" />
          </button>
        </div>
        <style>{`
          @keyframes shake-x {
            0%, 100% { transform: translateX(0); }
            20% { transform: translateX(-8px); }
            40% { transform: translateX(8px); }
            60% { transform: translateX(-6px); }
            80% { transform: translateX(6px); }
          }
          .animate-shake-x {
            animation: shake-x 1.2s cubic-bezier(.36,.07,.19,.97) both 1;
          }
        `}</style>

        {/* Dots indicator */}
        <div className="flex justify-center mt-6 gap-2">
          {bootcamps.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-purple-600 w-6' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to bootcamp ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Separate component for individual bootcamp cards
const BootcampCard: React.FC<{ bootcamp: Bootcamp; isActive: boolean }> = ({ bootcamp, isActive }) => {
  return (
    <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
      <CardHeader className={`text-center pb-6 bg-gradient-to-br ${
        bootcamp.color === 'blue' ? 'from-blue-500 to-blue-600' :
        bootcamp.color === 'purple' ? 'from-purple-500 to-purple-600' :
        'from-green-500 to-green-600'
      } text-white`}>
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <bootcamp.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
        </div>
        <CardTitle className="text-xl sm:text-2xl font-bold mb-2">{bootcamp.title}</CardTitle>
        <CardDescription className="text-blue-100">
          {bootcamp.ageGroup} • {bootcamp.duration}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="p-6 sm:p-8">
        <p className="text-gray-600 mb-6 text-sm sm:text-base">{bootcamp.description}</p>
        
        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-gray-400" />
            <span className="text-gray-700 text-sm sm:text-base">{bootcamp.sessions}</span>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">What you'll learn:</h4>
          <ul className="space-y-2">
            {bootcamp.topics.map((topic, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{topic}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};