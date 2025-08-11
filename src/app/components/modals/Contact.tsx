"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface ContactCoreProps {
  onClose: () => void;
}

export default function ContactCore({ onClose }: ContactCoreProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed to send");
      const data = await res.json();

      if (data?.fallback) {
        const subject = encodeURIComponent(
          String(payload.subject || "Message from CS+SG site")
        );
        const body = encodeURIComponent(
          `New message from CS+SG website\n\nName: ${payload.name}\nEmail: ${payload.email}\n\n${payload.message}`
        );
        window.location.href = `mailto:cssgunc@gmail.com?subject=${subject}&body=${body}`;
      }

      setStatus("sent");
      (document.getElementById("contact-form") as HTMLFormElement).reset();
    } catch (e) {
      console.error(e);
      setStatus("error");
    }
  }

  return (
    <div className="max-w-2xl w-full mx-auto bg-white text-black rounded-lg p-8 space-y-6">
      <div className="flex flex-row justify-between items-center mb-6">
        <div className="text-xl font-semibold font-geist-mono text-[#16dbbc]">
          Contact CS+SG
        </div>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#16dbbc]/40 bg-[#16dbbc]/10 px-4 py-2 text-sm text-[#16dbbc] hover:bg-[#16dbbc]/20 transition-colors"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>

      <p className="text-gray-600">
        Have a question, partnership idea, or project request? Send us a message
        and we&apos;ll get back to you at the email you provide.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4" id="contact-form">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="flex flex-col gap-1">
            <span className="text-sm text-gray-600">Your name</span>
            <input
              required
              name="name"
              type="text"
              className="rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[#16dbbc]"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-sm text-gray-600">Email</span>
            <input
              required
              name="email"
              type="email"
              className="rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[#16dbbc]"
            />
          </label>
        </div>
        <label className="flex flex-col gap-1">
          <span className="text-sm text-gray-600">Subject</span>
          <input
            required
            name="subject"
            type="text"
            className="rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[#16dbbc]"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-sm text-gray-600">Message</span>
          <textarea
            required
            name="message"
            rows={6}
            className="rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[#16dbbc]"
          />
        </label>
        <div className="flex items-center gap-3">
          <button
            disabled={status === "sending"}
            type="submit"
            className="inline-flex items-center gap-2 rounded-full border border-[#16dbbc]/40 bg-[#16dbbc]/10 px-5 py-2.5 text-sm font-semibold text-[#16dbbc] hover:bg-[#16dbbc]/20 transition-colors disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : "Send message"}
          </button>
          {status === "sent" && (
            <span className="text-sm text-[#16dbbc]">Message sent!</span>
          )}
          {status === "error" && (
            <span className="text-sm text-red-600">
              Failed to send. Try again
            </span>
          )}
        </div>
      </form>

      <div className="text-sm text-gray-500">
        Or email us directly at
        <a
          className="text-[#16dbbc] ml-1 underline"
          href="mailto:cssgunc@gmail.com"
        >
          cssgunc@gmail.com
        </a>
      </div>
    </div>
  );
}
