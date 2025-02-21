"use client";

import { SessionProvider } from "next-auth/react";
import { UserDropdown } from "@/components/ui/user-button";

import { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";



const Profile = () => {
  const [messages, setMessages] = useState([
    {
      role: "system",
      content:
        "Welcome to LA-BETA created by ahsan and shafiullah.",
    },
    { role: "assistant", content: "Hi there! How can I assist you today?" },
  ]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const chatEndRef = useRef<HTMLDivElement | null>(null);

  const sendMessage = async () => {
    if (!userInput.trim()) return;

    const newMessage = { role: "user", content: userInput };
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    setUserInput("");
    setError(null);
    setLoading(true);

    const additionalVariable = "Act as a Legal Assistant";

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages,
          additionalVariable,
        }),
      });

      const data = await response.json();

      if (data.response) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.response },
        ]);
      }
    } catch (error) {
      console.error("Error fetching API:", error);
      setError(
        "An error occurred while processing your request. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <SessionProvider>
      <div className="min-h-screen flex flex-col bg-white">
        {/* Navbar */}
        <div className="bg-[#002A6B] shadow p-4 flex items-center justify-between fixed top-0 w-full z-10">
          <h1 className="text-lg font-semibold text-white">LA-(BETA)</h1>
          <UserDropdown />
        </div>

        {/* Disclaimer Section */}
        <div className="mt-16 bg-[#F0F4FF] border-l-4 border-[#002A6B] text-[#002A6B] text-sm px-4 py-2">
          <ReactMarkdown>
            {messages.find((msg) => msg.role === "system")?.content}
          </ReactMarkdown>
        </div>

        {/* Chat Section */}
        <div className="flex-1 overflow-y-auto px-4 py-6 mt-4 mb-16 space-y-4 relative">
          {messages
            .filter((msg) => msg.role !== "system")
            .map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                } mb-4`}
              >
                <div
                  className={`max-w-full w-full px-4 py-2 rounded-lg ${
                    msg.role === "user"
                      ? "bg-[#ADD8E6] text-black"
                      : "bg-[#F0F4FF] text-[#002A6B]"
                  }`}
                >
                  <ReactMarkdown >
                    {msg.content}
                  </ReactMarkdown>
                </div>
              </div>
            ))}
          <div ref={chatEndRef} />

          {/* Loading Spinner */}
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 bg-gray-700 z-20">
              <div className="loader"></div>
            </div>
          )}
        </div>

        {/* Error Message */}
        {error && (
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-red-100 text-red-700 px-4 py-2 rounded-lg shadow-md">
            {error}
          </div>
        )}

        {/* Input Section */}
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[80%] bg-white p-4 flex items-center space-x-2 shadow">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.ctrlKey) {
                e.preventDefault();  
                sendMessage();
              }
            }}
            className="flex-1 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-[#002A6B] text-base font-sans"
            placeholder="Type your message (Enter is send)..."
          />
          <button
            onClick={sendMessage}
            className="px-4 py-2 bg-[#002A6B] text-white rounded-lg hover:bg-[#003580] text-base font-semibold"
          >
            Send
          </button>
        </div>
      </div>

      {/* Loader Styles */}
      <style jsx>{`
        .loader {
          width: 50px;
          height: 50px;
          border: 6px solid rgba(0, 42, 107, 0.2);
          border-top: 6px solid #002A6B;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </SessionProvider>
  );
};

export default Profile;