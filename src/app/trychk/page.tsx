"use client"
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  const [query, setQuery] = useState(""); // User's input
  const [response, setResponse] = useState(""); // Backend response
  const [loading, setLoading] = useState(false); // Loading state

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!query.trim()) return; // Prevent empty submissions

    setLoading(true);
    setResponse(""); // Clear previous response

    // Backend connection needed here
    /*
    Replace this placeholder with an API call to your backend.
    Example:
    const res = await fetch("/api/your-backend-endpoint", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });

    const data = await res.json();
    setResponse(data.result); // Set the response from backend
    */

    // Placeholder response for frontend demo
    setTimeout(() => {
      setResponse("This is a placeholder response from the backend.");
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-gray-800">
        ChatGPT-Like Interface
      </h1>

      {/* Input Form */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Ask Your Question</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Textarea
              placeholder="Type your query here..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="resize-none"
              rows={5}
              required
            />
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Processing..." : "Submit"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Response Box */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Response</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <p className="text-gray-500">Generating response...</p>
          ) : response ? (
            <p className="text-gray-700">{response}</p>
          ) : (
            <p className="text-gray-400">No response yet. Ask a question!</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
