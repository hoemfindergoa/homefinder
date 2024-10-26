import { useEffect, useState } from "react";

interface GlowingTextProps {
  text: string;
}

const GlowingText: React.FC<GlowingTextProps> = ({ text }) => {
  const [glowingWordIndices, setGlowingWordIndices] = useState<number[]>([]);

  useEffect(() => {
    // Split the text into words
    const words = text.split(" ");
    
    // Generate random indices to apply glow effect
    const indices = new Set<number>();
    while (indices.size < Math.min(words.length, 5)) {  // Limit glowing words to 5 or less
      indices.add(Math.floor(Math.random() * words.length));
    }

    setGlowingWordIndices(Array.from(indices));

    // Remove glow effect after 3 seconds
    const timer = setTimeout(() => setGlowingWordIndices([]), 3000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [text]);

  return (
    <p className="text-xl leading-relaxed">
      {text.split(" ").map((word, index) => (
        <span
          key={index}
          className={glowingWordIndices.includes(index) ? "glow" : ""}
        >
          {word}{" "}
        </span>
      ))}
    </p>
  );
};

export default GlowingText;
