"use client";

import { useState } from "react";
import { useParams } from "next/navigation";

export default function ChatPage() {
  const params = useParams();
  const id = params.id as string;

  const [messages, setMessages] = useState<any[]>([]);
  const [text, setText] = useState("");

  const sendMessage = async () => {
    if (!text.trim()) return;

    try {
      const res = await fetch(`/api/chat/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      if (res.ok) {
        const newMsg = await res.json();
        setMessages((prev) => [...prev, newMsg]);
        setText("");
      }
    } catch (err) {
      console.error("Chat error:", err);
    }
  };

  return (
    <main className="min-h-screen bg-[#050816] text-white flex flex-col p-6">
      <h1 className="text-xl font-bold mb-4">Chat</h1>

      {/* Messages */}
      <div className="flex-1 space-y-2 overflow-y-auto mb-4">
        {messages.map((msg, i) => (
          <div key={i} className="bg-white/10 p-2 rounded">
            {msg.text || JSON.stringify(msg)}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type message..."
          className="flex-1 p-2 rounded bg-black/40 border border-white/20"
        />

        <button
          onClick={sendMessage}
          className="px-4 py-2 bg-indigo-600 rounded"
        >
          Send
        </button>
      </div>
    </main>
  );
}
