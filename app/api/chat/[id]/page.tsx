"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useSession } from "next-auth/react";

export default function ChatPage() {
  const { id } = useParams();
  const { data: session } = useSession();

  const [messages, setMessages] = useState<any[]>([]);
  const [text, setText] = useState("");

  // Load messages
  useEffect(() => {
  const fetchMessages = async () => {
    const res = await fetch(`/api/messages?chatId=${id}`);
    const data = await res.json();
    setMessages(data);
  };

  // initial load
  fetchMessages();

  // 🔥 auto refresh every 2 seconds
  const interval = setInterval(fetchMessages, 2000);

  return () => clearInterval(interval);
}, [id]);

  // Send message
  const sendMessage = async () => {
  if (!text.trim()) return;

  const res = await fetch("/api/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chatId: id,
      senderId: session?.user?.email,
      text,
    }),
  });

  if (res.ok) {
    setText("");
    // 🔥 IMPORTANT: do NOT manually update messages
    // auto-refresh (useEffect polling) will load new messages
  }
};

    const res = await fetch("/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chatId: id,
        senderId: session?.user?.email,
        text,
      }),
    });

    if (res.ok) {
      const newMsg = await res.json();
      setMessages((prev) => [...prev, newMsg]);
      setText("");
    }
  };

  return (
    <main className="min-h-screen bg-[#050816] text-white flex flex-col">
      
      {/* HEADER */}
      <div className="p-4 border-b border-white/10">
        <h1 className="text-xl font-bold">Chat</h1>
      </div>

      {/* MESSAGES */}
      <div className="flex-1 p-4 space-y-3 overflow-y-auto">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-xs p-3 rounded-lg ${
              msg.senderId === session?.user?.email
                ? "bg-indigo-600 ml-auto"
                : "bg-[#0d1323]"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* INPUT */}
      <div className="p-4 border-t border-white/10 flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 p-3 rounded bg-[#0d1323] border border-white/10"
        />

        <button
          onClick={sendMessage}
          className="bg-indigo-600 px-6 rounded"
        >
          Send
        </button>
      </div>
    </main>
  );
}