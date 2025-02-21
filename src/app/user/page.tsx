"use client";
//orignal is deployed on home page ,this is just to know the original code
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import UserButton from "@/components/ui/user-button";
import { SessionProvider } from "next-auth/react";

const user = () => {
  const handleLogin = async () => {
    console.log("Login button clicked - connect backend here");
  };

  const handleSignup = async () => {
    console.log("Signup button clicked - connect backend here");
  };

  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      if (currentScrollY > lastScrollY) {
        // Scroll down by 25% of viewport height
        window.scrollTo({
          top: Math.min(
            Math.ceil((currentScrollY + viewportHeight * 0.25) / viewportHeight) *
              viewportHeight,
            document.body.scrollHeight
          ),
          behavior: "smooth",
        });
      } else if (currentScrollY < lastScrollY) {
        // Scroll up by 25% of viewport height
        window.scrollTo({
          top: Math.floor((currentScrollY - viewportHeight * 0.25) / viewportHeight) *
            viewportHeight,
          behavior: "smooth",
        });
      }

      lastScrollY = currentScrollY;
    };

    // Attach event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Section */}
      <div className="relative w-full lg:w-1/2 h-screen bg-[#001F54] flex items-center justify-center p-6">
        <div className="text-left space-y-2 lg:space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFD700] leading-tight">
         Wanna Legal Funda
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#D4AF37]">
            for legal fraternity
            <span className="inline-block h-4 w-4 bg-[#FFD700] rounded-full ml-1"></span>
          </p>
        </div>

{/* Scroll Down - Visible Only on Mobile */}
<p className="text-sm text-[#D4AF37] absolute bottom-16 left-1/2 transform -translate-x-1/2 lg:hidden"> 
  scroll down<span className="blinking-dots">.</span><span className="blinking-dots">.</span><span className="blinking-dots">.</span>
</p>


{/* CSS */}
<style jsx>{`
  .blinking-dots {
    animation: blink 1.5s infinite;
  }

  .blinking-dots:nth-child(1) {
    animation-delay: 0s;
  }

  .blinking-dots:nth-child(2) {
    animation-delay: 0.5s;
  }

  .blinking-dots:nth-child(3) {
    animation-delay: 1s;
  }

  @keyframes blink {
    0%, 100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
`}</style>

      </div>
      <SessionProvider>
      {/* Right Section */}
      <div className="w-full lg:w-1/2 h-screen bg-[#F8F9FA] flex flex-col items-center justify-center px-6 py-12 space-y-6">
        {/* Get Started Heading */}
        <h2 className="text-2xl font-semibold text-[#001F54]">Get started</h2>

 {/* Small Try First Link */}
 <p className="text-[#6C757D] text-sm hover:underline cursor-pointer mt-4">
          Try it first
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-4 w-full max-w-sm">
        <UserButton />
         
        </div>

       

        {/* Footer */}
        <div className="flex items-center justify-center text-[#6C757D] text-xs gap-2 mt-8">
          <a href="#" className="hover:underline">
            Terms of use
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Privacy policy
          </a>
        </div>
        
      </div>
      </SessionProvider>
    </div>
  );
};

export default user;
