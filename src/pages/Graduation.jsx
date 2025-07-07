import { useRef, useState, useEffect } from "react";
import confetti from "canvas-confetti";
import victorySound from "../assets/victory.mp3";
import GraduationImage from "../assets/graduation.jpg";
import GCashImage from "../assets/gcash.jpg";

const Graduation = () => {
  const audioRef = useRef(null);
  const confettiIntervalRef = useRef(null);
  const [isGifted, setIsGifted] = useState(false);
  const [countdown, setCountdown] = useState("");

  // 🎓 Countdown to August 26, 2025
  useEffect(() => {
    const targetDate = new Date(Date.UTC(2025, 7, 25, 16, 0, 0));

    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        setCountdown("🎉 It's graduation day!");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setCountdown(
        `🎓 Graduation in: ${days}d ${hours}h ${minutes}m ${seconds}s`
      );
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleGiftClick = () => {
    if (isGifted) return;
    setIsGifted(true);

    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((err) => {
        console.error("Audio failed to play:", err);
      });
    }

    const bursts = [
      { angle: 60, origin: { x: 0.4, y: 0.5 } },
      { angle: 120, origin: { x: 0.6, y: 0.5 } },
      { angle: 90, origin: { x: 0.5, y: 0.5 } },
      { angle: 45, origin: { x: 0.3, y: 0.5 } },
      { angle: 135, origin: { x: 0.7, y: 0.5 } },
    ];

    bursts.forEach((burst) => {
      confetti({
        particleCount: 40,
        spread: 80,
        startVelocity: 55,
        ...burst,
      });
    });

    if (!confettiIntervalRef.current) {
      confettiIntervalRef.current = setInterval(() => {
        confetti({
          particleCount: 5,
          angle: 90,
          spread: 60,
          origin: { x: Math.random(), y: 0 },
          gravity: 1.2,
          ticks: 200,
        });
      }, 200);
    }
  };

  useEffect(() => {
    return () => {
      if (confettiIntervalRef.current) {
        clearInterval(confettiIntervalRef.current);
      }
    };
  }, []);

  return (
    <>
      <audio ref={audioRef} src={victorySound} preload="auto" />
      <div
        className="py-8 md:py-16 flex items-center justify-center mt-8 md:mt-16 px-4"
        style={{
          cursor: isGifted
            ? 'url("data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 height=%2232%22 width=%2232%22><text y=%2222%22 font-size=%2224%22>🎓</text></svg>") 16 16, auto'
            : "auto",
        }}
      >
        <div className="max-w-6xl w-full">
          <div className="flex items-center justify-between mb-8 flex-col md:flex-row gap-6 md:gap-8">
            <div className="flex-1 text-center md:text-left">
              <p className="text-gray-600 text-xs sm:text-sm mb-2">
                {countdown}
              </p>
              {!isGifted ? (
                <>
                  <div className="mb-4">
                    <h2 className="text-black text-2xl sm:text-3xl md:text-[39.81px] leading-tight mb-0">
                      Hey, did you know?
                    </h2>
                    <h2 className="text-[#28009E] font-bold text-2xl sm:text-3xl md:text-[39.81px] leading-tight mt-1">
                      Rome Francis is graduating!
                    </h2>
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-3 max-w-none md:max-w-lg">
                    I'm graduating on <strong>August 26, 2025</strong> with a
                    degree in Information Technology from the University of
                    Mindanao.
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-6 max-w-none md:max-w-lg">
                    If you'd like to congratulate, send a message, or even
                    donate a small graduation gift, feel free to reach out — I'd
                    truly appreciate it!
                  </p>
                  <button
                    onClick={handleGiftClick}
                    className="bg-[#28009E] text-white px-4 py-2 sm:px-6 sm:py-3 rounded text-sm sm:text-base hover:bg-[#1e007a] transition-colors duration-200 hover:shadow-lg transform hover:scale-105"
                  >
                    Gift Rome
                  </button>
                </>
              ) : (
                <>
                  <h2 className="text-[#28009E] font-bold text-2xl sm:text-3xl md:text-[39.81px] leading-tight mb-4">
                    Thank you so much!
                  </h2>
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg max-w-none md:max-w-lg">
                    Your support means the world to me. I'm truly grateful for
                    your generosity and encouragement!
                  </p>
                </>
              )}
            </div>

            <div className="flex-shrink-0 ml-0 md:ml-8 mt-4 md:mt-0 transform scale-100 sm:scale-125 md:scale-150">
              <img
                src={isGifted ? GCashImage : GraduationImage}
                alt={isGifted ? "GCash QR" : "Graduation"}
                className="w-60 h-48 sm:w-72 sm:h-56 md:w-80 md:h-64 object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Graduation;
