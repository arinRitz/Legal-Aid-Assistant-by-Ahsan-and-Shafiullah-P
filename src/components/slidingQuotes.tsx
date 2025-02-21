import { useEffect, useState } from "react";

const quotes: string[] = [
  "Justice for all, not just for the privileged.",
  "The law is a tool for justice, not a weapon of oppression.",
  "Every voice deserves to be heard in the court of law.",
  "Equal rights under the law is the foundation of freedom.",
  "Empower the voiceless; the law belongs to everyone.",
  "Access to justice is not a privilege, it is a right.",
  "Justice is the bridge between law and fairness.",
  "Legal aid is a lifeline for those in need.",
  "The power of the law is best seen in its service to the weakest.",
  "Your rights matter, and the law is here to protect them.",
  "No case is too small for justice to prevail.",
  "Legal help for the needy is the cornerstone of equality.",
  "Everyone deserves a chance to stand tall in the face of justice.",
  "The scales of justice weigh the same for rich and poor alike.",
  "Legal support is a step toward dignity and fairness.",
  "Bringing light to the shadows of injustice.",
  "The law empowers those who know it.",
  "Every question deserves a fair answer in the eyes of the law.",
  "Building bridges to justice for all.",
  "Knowledge of the law is power; sharing it is justice.",
  "Justice is the protector of the powerless.",
  "A fair trial is the cornerstone of true justice.",
  "The law is the voice of reason and the shield of the weak.",
  "True justice serves humanity, not just the powerful.",
  "Every case deserves careful attention and fair judgment.",
  "Justice knows no social or financial boundaries.",
  "Legal aid is not charity; it is justice in action.",
  "Empowering the underserved through the power of the law.",
  "Access to justice opens the door to equality.",
  "Fair laws create a fair society.",
  "Justice begins with understanding and ends with fairness.",
  "The law is a ladder; it helps everyone rise to equality.",
  "Stand firm for your rights; the law is your ally.",
  "A society grows strong when justice is accessible to all.",
  "The legal system exists to serve truth and fairness.",
  "Justice is the light that guides a society through darkness.",
  "Every person has the right to be heard and defended.",
  "Empower the weak, strengthen the law, and ensure justice.",
  "Justice is not just a concept—it’s a commitment.",
  "The law is not just for the few; it’s for every one of us.",
];

const SlidingQuotes: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 6000); // Change quote every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen bg-[#001F54] text-[#FFD700] flex flex-col items-center justify-center p-6 overflow-hidden">
      <div className="text-center text-xl sm:text-2xl md:text-3xl font-bold animate-fade">
        {quotes[currentIndex]}
      </div>
      <style jsx>{`
        @keyframes fade {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
        .animate-fade {
          animation: fade 6s infinite;
        }
      `}</style>
    </div>
  );
};

export default SlidingQuotes;
