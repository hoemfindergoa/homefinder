// components/ThankYouPage.tsx
"use client"
import { useEffect, useState } from "react";

const ThankYouPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex pt-[400px] justify-center min-h-screen bg-white overflow-hidden relative">
      {/* Background Confetti Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="confetti"
            style={{
              animationDelay: `${Math.random() * 2}s`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Thank You Message */}
      <div
        className={`transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        } text-center max-w-lg mx-4 p-8 rounded-lg shadow-lg bg-white relative z-10`}
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Thank You!</h1>
        <p className="text-lg text-gray-600">
          We  will Notify when we will ready.
        </p>
        <button
          className="mt-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none"
          onClick={() => (window.location.href = "/")}
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default ThankYouPage;
