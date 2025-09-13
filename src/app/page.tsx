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
        {/* Blue light spots */}
        <div className="absolute rounded-full blur-3xl light-spot-1" 
             style={{
               width: '500px', 
               height: '500px',
               background: 'radial-gradient(circle, rgba(147, 197, 253, 0.4) 0%, rgba(147, 197, 253, 0.1) 70%, transparent 100%)',
               top: '10%', 
               left: '20%'
             }} />
        <div className="absolute rounded-full blur-3xl light-spot-2" 
             style={{
               width: '450px', 
               height: '450px',
               background: 'radial-gradient(circle, rgba(164, 202, 254, 0.3) 0%, rgba(164, 202, 254, 0.1) 70%, transparent 100%)',
               top: '60%', 
               left: '70%'
             }} />
        <div className="absolute rounded-full blur-3xl light-spot-3" 
             style={{
               width: '400px', 
               height: '400px',
               background: 'radial-gradient(circle, rgba(219, 234, 254, 0.5) 0%, rgba(219, 234, 254, 0.2) 70%, transparent 100%)',
               top: '80%', 
               left: '10%'
             }} />
        
        {/* Yellow light spots */}
        <div className="absolute rounded-full blur-3xl light-spot-4" 
             style={{
               width: '480px', 
               height: '480px',
               background: 'radial-gradient(circle, rgba(254, 240, 138, 0.4) 0%, rgba(254, 240, 138, 0.1) 70%, transparent 100%)',
               top: '30%', 
               right: '15%'
             }} />
        <div className="absolute rounded-full blur-3xl light-spot-5" 
             style={{
               width: '350px', 
               height: '350px',
               background: 'radial-gradient(circle, rgba(253, 224, 71, 0.3) 0%, rgba(253, 224, 71, 0.1) 70%, transparent 100%)',
               top: '5%', 
               left: '60%'
             }} />
        <div className="absolute rounded-full blur-3xl light-spot-6" 
             style={{
               width: '520px', 
               height: '520px',
               background: 'radial-gradient(circle, rgba(254, 249, 195, 0.4) 0%, rgba(254, 249, 195, 0.15) 70%, transparent 100%)',
               bottom: '20%', 
               right: '40%'
             }} />
        
        {/* Red/Pink light spots */}
        <div className="absolute rounded-full blur-3xl light-spot-7" 
             style={{
               width: '460px', 
               height: '460px',
               background: 'radial-gradient(circle, rgba(254, 202, 202, 0.3) 0%, rgba(254, 202, 202, 0.1) 70%, transparent 100%)',
               top: '50%', 
               left: '5%'
             }} />
        <div className="absolute rounded-full blur-3xl light-spot-8" 
             style={{
               width: '420px', 
               height: '420px',
               background: 'radial-gradient(circle, rgba(251, 207, 232, 0.35) 0%, rgba(251, 207, 232, 0.1) 70%, transparent 100%)',
               bottom: '10%', 
               left: '50%'
             }} />
        <div className="absolute rounded-full blur-3xl light-spot-9" 
             style={{
               width: '440px', 
               height: '440px',
               background: 'radial-gradient(circle, rgba(254, 226, 226, 0.4) 0%, rgba(254, 226, 226, 0.15) 70%, transparent 100%)',
               top: '20%', 
               right: '5%'
             }} />
        
        {/* Overlay for subtle blending */}
        <div className="absolute inset-0 bg-white/10" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-8">
        <div className="text-center space-y-8 max-w-4xl mx-auto">

          {/* Main heading with typing effect */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight text-stroke">
              {typedText}
              <span className="animate-pulse">|</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-2xl md:text-4xl text-gray-600 font-light tracking-wider opacity-80">
              {subtitle}
              {subtitle && <span className="animate-pulse">|</span>}
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className={'flipClock'}>
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
          <div className="flex justify-center space-x-8 mt-16">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-4 h-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full animate-bounce"
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '1.5s'
                }}
              />
            ))}
          </div>

          {/* Bottom text */}
          <div className="mt-16 space-y-4">
            <p className="text-gray-500 text-sm">
              We&apos;re working hard to bring you something amazing
            </p>
          </div>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-blue-400/40" />
      <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-blue-400/40" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-blue-400/40" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-blue-400/40" />

    </div>
  );
}