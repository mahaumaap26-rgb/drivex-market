"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function MessagesPage() {
  const { data: session } = useSession();
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    if (!session?.user) return;

    fetch(`/api/messages?userId=${session.user.email}`)
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, [session]);

  return (
    <main className="min-h-screen bg-[#050816] text-white p-10">
      <h1 className="text-3xl font-bold mb-6">
        Inbox 💬
      </h1>

      <div className="space-y-3">
        {messages.length === 0 ? (
          <p className="text-gray-400">No messages yet</p>
        ) : (
          messages.map((msg: any) => (
            <div
              key={msg._id}
              className="p-4 bg-[#0d1323] rounded-lg border border-white/10"
            >
              <p className="text-sm text-gray-400">
                Vehicle ID: {msg.vehicleId}
              </p>
              <p>{msg.message}</p>
            </div>
          ))
        )}
      </div>
    </main>
  );
}