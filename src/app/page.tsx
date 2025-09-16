'use client';

import { useEffect, useState } from 'react';

// function component
const AnimatedCard = ({ animation, digit }: { animation: string; digit: string }) => {
  return(
    <div className={`flipCard ${animation}`}>
      <span>{digit}</span>
    </div>
  );
};

// function component
const StaticCard = ({ position, digit }: { position: string; digit: string }) => {
  return(
    <div className={position}>
      <span>{digit}</span>
    </div>
  );
};

// function component
const FlipUnitContainer = ({ digit, shuffle, unit }: { digit: number; shuffle: boolean; unit: string }) => {	
  
  // assign digit values
  let currentDigit: number | string = digit;
  let previousDigit: number | string = digit - 1;

  // to prevent a negative value
  if ( unit !== 'hours') {
    previousDigit = previousDigit === -1 
      ? 59 
      : previousDigit;
  } else {
    previousDigit = previousDigit === -1 
      ? 23 
      : previousDigit;
  }

  // add zero (convert to strings with padding)
  if ( currentDigit < 10 ) {
    currentDigit = `0${currentDigit}`;
  } 
  if ( previousDigit < 10 ) {
    previousDigit = `0${previousDigit}`;
  }

  // shuffle digits
  const digit1 = shuffle 
    ? previousDigit 
    : currentDigit;
  const digit2 = !shuffle 
    ? previousDigit 
    : currentDigit;

  // shuffle animations
  const animation1 = shuffle 
    ? 'fold' 
    : 'unfold';
  const animation2 = !shuffle 
    ? 'fold' 
    : 'unfold';

  return(
    <div className={'flipUnitContainer'}>
      <StaticCard 
        position={'upperCard'} 
        digit={currentDigit.toString()} 
        />
      <StaticCard 
        position={'lowerCard'} 
        digit={previousDigit.toString()} 
        />
      <AnimatedCard 
        digit={digit1.toString()}
        animation={animation1}
        />
      <AnimatedCard 
        digit={digit2.toString()}
        animation={animation2}
        />
      <div className="timer-label">{unit.toUpperCase()}</div>
    </div>
  );
};

export default function MaintenancePage() {
  const [typedText, setTypedText] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [daysShuffle, setDaysShuffle] = useState(true);
  const [hoursShuffle, setHoursShuffle] = useState(true);
  const [minutesShuffle, setMinutesShuffle] = useState(true);
  const [secondsShuffle, setSecondsShuffle] = useState(true);
  const fullText = 'BIG UPDATE COMING SOON';
  const subtitleText = 'Currently in Maintenance';

  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
        // Start typing subtitle after main text is done
        let subtitleIndex = 0;
        const subtitleInterval = setInterval(() => {
          if (subtitleIndex < subtitleText.length) {
            setSubtitle(subtitleText.slice(0, subtitleIndex + 1));
            subtitleIndex++;
          } else {
            clearInterval(subtitleInterval);
          }
        }, 50);
      }
    }, 80);

    return () => clearInterval(typeInterval);
  }, []);

  // Countdown timer effect with server-side persistence
  useEffect(() => {
    let targetDate: Date;
    let timerInterval: NodeJS.Timeout;
    
    const fetchTargetDate = async () => {
      try {
        const response = await fetch('/api/timer');
        const data = await response.json();
        
        if (data.success && data.targetDate) {
          targetDate = new Date(data.targetDate);
          startTimer();
        } else {
          console.error('Failed to fetch timer:', data.error);
          // Fallback to client-side timer
          targetDate = new Date();
          targetDate.setDate(targetDate.getDate() + 8);
          startTimer();
        }
      } catch (error) {
        console.error('Timer fetch error:', error);
        // Fallback to client-side timer
        targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 8);
        startTimer();
      }
    };
    
    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      
      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // on day change, update days and shuffle state
        if(timeLeft.days !== days) {
          setDaysShuffle(!daysShuffle);
        }
        // on hour change, update hours and shuffle state
        if(timeLeft.hours !== hours) {
          setHoursShuffle(!hoursShuffle);
        }
        // on minute change, update minutes and shuffle state
        if(timeLeft.minutes !== minutes) {
          setMinutesShuffle(!minutesShuffle);
        }
        // on second change, update seconds and shuffle state
        if(timeLeft.seconds !== seconds) {
          setSecondsShuffle(!secondsShuffle);
        }
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const startTimer = () => {
      timerInterval = setInterval(updateTimer, 1000);
      updateTimer(); // Run immediately
    };

    fetchTargetDate();

    return () => {
      if (timerInterval) {
        clearInterval(timerInterval);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Animated diffused light spots */}
      <div className="absolute inset-0">
        {/* Blue light spots - responsive sizes */}
        <div className="absolute rounded-full blur-2xl lg:blur-3xl light-spot-1" 
             style={{
               width: 'clamp(200px, 40vw, 500px)', 
               height: 'clamp(200px, 40vw, 500px)',
               background: 'radial-gradient(circle, rgba(147, 197, 253, 0.4) 0%, rgba(147, 197, 253, 0.1) 70%, transparent 100%)',
               top: '10%', 
               left: 'clamp(5%, 20vw, 20%)'
             }} />
        <div className="absolute rounded-full blur-2xl lg:blur-3xl light-spot-2" 
             style={{
               width: 'clamp(180px, 35vw, 450px)', 
               height: 'clamp(180px, 35vw, 450px)',
               background: 'radial-gradient(circle, rgba(164, 202, 254, 0.3) 0%, rgba(164, 202, 254, 0.1) 70%, transparent 100%)',
               top: '60%', 
               left: 'clamp(60%, 70vw, 70%)'
             }} />
        <div className="absolute rounded-full blur-2xl lg:blur-3xl light-spot-3" 
             style={{
               width: 'clamp(160px, 32vw, 400px)', 
               height: 'clamp(160px, 32vw, 400px)',
               background: 'radial-gradient(circle, rgba(219, 234, 254, 0.5) 0%, rgba(219, 234, 254, 0.2) 70%, transparent 100%)',
               top: '80%', 
               left: '10%'
             }} />
        
        {/* Yellow light spots - responsive sizes */}
        <div className="absolute rounded-full blur-2xl lg:blur-3xl light-spot-4" 
             style={{
               width: 'clamp(190px, 38vw, 480px)', 
               height: 'clamp(190px, 38vw, 480px)',
               background: 'radial-gradient(circle, rgba(254, 240, 138, 0.4) 0%, rgba(254, 240, 138, 0.1) 70%, transparent 100%)',
               top: '30%', 
               right: 'clamp(5%, 15vw, 15%)'
             }} />
        <div className="absolute rounded-full blur-2xl lg:blur-3xl light-spot-5" 
             style={{
               width: 'clamp(140px, 28vw, 350px)', 
               height: 'clamp(140px, 28vw, 350px)',
               background: 'radial-gradient(circle, rgba(253, 224, 71, 0.3) 0%, rgba(253, 224, 71, 0.1) 70%, transparent 100%)',
               top: '5%', 
               left: '60%'
             }} />
        <div className="absolute rounded-full blur-2xl lg:blur-3xl light-spot-6" 
             style={{
               width: 'clamp(210px, 42vw, 520px)', 
               height: 'clamp(210px, 42vw, 520px)',
               background: 'radial-gradient(circle, rgba(254, 249, 195, 0.4) 0%, rgba(254, 249, 195, 0.15) 70%, transparent 100%)',
               bottom: '20%', 
               right: '40%'
             }} />
        
        {/* Red/Pink light spots - responsive sizes */}
        <div className="absolute rounded-full blur-2xl lg:blur-3xl light-spot-7" 
             style={{
               width: 'clamp(185px, 37vw, 460px)', 
               height: 'clamp(185px, 37vw, 460px)',
               background: 'radial-gradient(circle, rgba(254, 202, 202, 0.3) 0%, rgba(254, 202, 202, 0.1) 70%, transparent 100%)',
               top: '50%', 
               left: '5%'
             }} />
        <div className="absolute rounded-full blur-2xl lg:blur-3xl light-spot-8" 
             style={{
               width: 'clamp(170px, 34vw, 420px)', 
               height: 'clamp(170px, 34vw, 420px)',
               background: 'radial-gradient(circle, rgba(251, 207, 232, 0.35) 0%, rgba(251, 207, 232, 0.1) 70%, transparent 100%)',
               bottom: '10%', 
               left: '50%'
             }} />
        <div className="absolute rounded-full blur-2xl lg:blur-3xl light-spot-9" 
             style={{
               width: 'clamp(175px, 35vw, 440px)', 
               height: 'clamp(175px, 35vw, 440px)',
               background: 'radial-gradient(circle, rgba(254, 226, 226, 0.4) 0%, rgba(254, 226, 226, 0.15) 70%, transparent 100%)',
               top: '20%', 
               right: '5%'
             }} />
        
        {/* Overlay for subtle blending */}
        <div className="absolute inset-0 bg-white/10" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8">
        <div className="text-center space-y-4 sm:space-y-6 lg:space-y-8 max-w-7xl mx-auto w-full">

          {/* Main heading with typing effect */}
          <div className="space-y-3 sm:space-y-4 lg:space-y-6 px-2">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight text-stroke break-words">
              {typedText}
              <span className="animate-pulse">|</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-600 font-light tracking-wider opacity-80 break-words">
              {subtitle}
              {subtitle && <span className="animate-pulse">|</span>}
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="max-w-6xl mx-auto mt-8 sm:mt-12 lg:mt-16 px-2">
            <div className={'flipClock flex flex-wrap justify-center gap-2 sm:gap-4 lg:gap-6'}>
              <FlipUnitContainer 
                unit={'days'}
                digit={timeLeft.days} 
                shuffle={daysShuffle} 
              />
              <FlipUnitContainer 
                unit={'hours'}
                digit={timeLeft.hours} 
                shuffle={hoursShuffle} 
              />
              <FlipUnitContainer 
                unit={'minutes'}
                digit={timeLeft.minutes} 
                shuffle={minutesShuffle} 
              />
              <FlipUnitContainer 
                unit={'seconds'}
                digit={timeLeft.seconds} 
                shuffle={secondsShuffle} 
              />
            </div>
          </div>

          {/* Floating elements */}
          <div className="flex justify-center space-x-4 sm:space-x-6 lg:space-x-8 mt-8 sm:mt-12 lg:mt-16">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full animate-bounce"
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '1.5s'
                }}
              />
            ))}
          </div>

          {/* Bottom text */}
          <div className="mt-8 sm:mt-12 lg:mt-16 space-y-4 px-4">
            <p className="text-gray-500 text-xs sm:text-sm lg:text-base">
              We&apos;re working hard to bring you something amazing
            </p>
          </div>
        </div>
      </div>

      {/* Corner decorations - responsive sizes */}
      <div className="absolute top-0 left-0 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border-l-2 border-t-2 border-blue-400/40" />
      <div className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border-r-2 border-t-2 border-blue-400/40" />
      <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border-l-2 border-b-2 border-blue-400/40" />
      <div className="absolute bottom-0 right-0 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border-r-2 border-b-2 border-blue-400/40" />

      {/* Additional CSS for flip clock responsiveness */}
      <style jsx>{`
        .flipClock {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.5rem;
        }
        
        @media (min-width: 640px) {
          .flipClock {
            gap: 1rem;
          }
        }
        
        @media (min-width: 1024px) {
          .flipClock {
            gap: 1.5rem;
          }
        }
        
        .flipUnitContainer {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 60px;
        }
        
        @media (min-width: 640px) {
          .flipUnitContainer {
            min-width: 80px;
          }
        }
        
        @media (min-width: 1024px) {
          .flipUnitContainer {
            min-width: 100px;
          }
        }
        
        .timer-label {
          font-size: 0.75rem;
          margin-top: 0.5rem;
          color: #6b7280;
          font-weight: 500;
          letter-spacing: 0.05em;
        }
        
        @media (min-width: 640px) {
          .timer-label {
            font-size: 0.875rem;
            margin-top: 0.75rem;
          }
        }
        
        @media (min-width: 1024px) {
          .timer-label {
            font-size: 1rem;
            margin-top: 1rem;
          }
        }
        
        .flipCard, .upperCard, .lowerCard {
          width: 100%;
          height: 40px;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: bold;
          color: #1e293b;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        
        @media (min-width: 640px) {
          .flipCard, .upperCard, .lowerCard {
            height: 50px;
            font-size: 1.875rem;
          }
        }
        
        @media (min-width: 1024px) {
          .flipCard, .upperCard, .lowerCard {
            height: 60px;
            font-size: 2.25rem;
          }
        }
        
        /* Animation styles */
        .fold {
          animation: flipDown 0.6s ease-in-out;
        }
        
        .unfold {
          animation: flipUp 0.6s ease-in-out;
        }
        
        @keyframes flipDown {
          0% { transform: rotateX(0deg); }
          50% { transform: rotateX(-90deg); }
          100% { transform: rotateX(0deg); }
        }
        
        @keyframes flipUp {
          0% { transform: rotateX(0deg); }
          50% { transform: rotateX(90deg); }
          100% { transform: rotateX(0deg); }
        }
        
        .text-stroke {
          text-shadow: 
            -1px -1px 0 #e2e8f0,  
            1px -1px 0 #e2e8f0,
            -1px 1px 0 #e2e8f0,
            1px 1px 0 #e2e8f0,
            2px 2px 4px rgba(0,0,0,0.1);
        }
        
        @media (max-width: 639px) {
          .text-stroke {
            text-shadow: 
              -1px -1px 0 #e2e8f0,  
              1px -1px 0 #e2e8f0,
              -1px 1px 0 #e2e8f0,
              1px 1px 0 #e2e8f0,
              1px 1px 2px rgba(0,0,0,0.1);
          }
        }
      `}</style>
    </div>
  );
}