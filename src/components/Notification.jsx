import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import confetti from "canvas-confetti";
import victorySound from "../assets/victory.mp3";

const Notification = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);

  const handleShowNotification = () => {
    setHasInteracted(true);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  useEffect(() => {
    let interval;

    if (isOpen && !isClosing && hasInteracted) {
      // Play sound
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch((err) => {
          console.error("Audio failed to play:", err);
        });
      }

      interval = setInterval(() => {
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

    return () => clearInterval(interval);
  }, [isOpen, isClosing, hasInteracted]);

  return (
    <>
      <audio ref={audioRef} src={victorySound} preload="auto" />

      {!hasInteracted && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-40">
          <button
            onClick={handleShowNotification}
            className="bg-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition"
          >
            🎉 View Notification
          </button>
        </div>
      )}

      {isOpen && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 transition-opacity duration-300 ${
            isClosing ? "opacity-0" : "opacity-100"
          }`}
        >
          <div
            className={`bg-white rounded-lg max-w-4xl w-full max-h-[90vh] min-h-[50vh] overflow-y-auto relative border-2 border-gray-200 shadow-2xl transition-all duration-300 ${
              isClosing
                ? "scale-95 opacity-0 transform translate-y-4"
                : "scale-100 opacity-100 transform translate-y-0"
            }`}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors duration-200 z-10 hover:bg-gray-100 rounded-full p-1"
            >
              <X size={20} />
            </button>

            <div className="p-6 md:p-8 pt-12 md:pt-10">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                <div
                  className={`transition-all duration-500 delay-100 ${
                    isClosing
                      ? "opacity-0 transform translate-x-4"
                      : "opacity-100 transform translate-x-0"
                  }`}
                >
                  <h2 className="text-[39.81px] font-bold text-[#28009E] mb-4">
                    Hey, did you know?
                  </h2>
                  <p className="text-sm text-gray-800 mb-4">
                    I'm graduating on August 25, 2025 with a degree in
                    Information Technology from the University of Mindanao.
                  </p>
                  <p className="text-sm text-gray-800 mb-6">
                    If you'd like to congratulate, send a message, or even
                    donate a small graduation gift, feel free to reach out — I'd
                    truly appreciate it!
                  </p>
                  <button
                    className="inline-block bg-[#28009E] text-white px-6 py-2 rounded hover:bg-[#1e007a] transition-colors duration-200 hover:shadow-lg transform hover:scale-105"
                    onClick={closeModal}
                  >
                    Gift Rome
                  </button>
                </div>

                <div
                  className={`flex justify-center transition-all duration-500 delay-150 ${
                    isClosing
                      ? "opacity-0 transform translate-x-4"
                      : "opacity-100 transform translate-x-0"
                  }`}
                >
                  <img
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Graduation"
                    className="max-w-full h-auto rounded-lg shadow-md border border-gray-200"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Notification;
