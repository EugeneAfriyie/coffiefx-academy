// src/components/Home/SeminarHighlight.tsx
import  { useEffect, useRef } from "react";

const CLOUDINARY_CLOUD = "dzqdfaghg";
const CLOUDINARY_PUBLIC_ID =
  "SnapInsta.to_AQMpQmG3g_9Al3k25-LfRZkEq6JEbtpWYT-fVyNlGZ8o4QiDlxfqsAJG0CKq2U0YB4ama5M5g9AoYTx7akojN20A0S-8_Btwq23_3t0_iq74ns";

const VIDEO_URL = `https://player.cloudinary.com/embed/?cloud_name=${CLOUDINARY_CLOUD}&public_id=${CLOUDINARY_PUBLIC_ID}&profile=cld-default`;

export default function SeminarHighlight() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Optional: lazy-load the iframe when it enters the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && iframeRef.current) {
            iframeRef.current.src = VIDEO_URL;
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "200px" }
    );

    if (iframeRef.current) observer.observe(iframeRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-[#001F3F] to-[#001022] text-white">
      <div className="max-w-4xl mx-auto text-center px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#00c896] mb-4">
          Highlights from Our Exness Forex Seminar
        </h2>

        {/* Description */}
        <p className="text-xl text-white/80 mb-8">
          Big Coffie live at National Theatre – entry strategies, live trades,
          and Q&A with 250+ young traders.
        </p>

        {/* Responsive 16:9 container */}
        <div className="relative w-full overflow-hidden rounded-xl shadow-2xl aspect-video">
          {/* Fallback thumbnail (replace with your own Cloudinary thumbnail) */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `ur[](https://res.cloudinary.com/${CLOUDINARY_CLOUD}/image/upload/w_1200,h_675,c_fill/${CLOUDINARY_PUBLIC_ID}.jpg)`,
            }}
          />

          {/* Cloudinary iframe – lazy-loaded */}
          <iframe
            ref={iframeRef}
            className="absolute inset-0 w-full h-full"
            title="CoffieFX Exness Seminar – National Theatre"
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowFullScreen
            frameBorder="0"
            // src will be set by IntersectionObserver
          />
        </div>

        {/* CTA */}
        <p className="mt-6 text-sm text-white/60">
          Missed it? Join our next live session on Telegram:{" "}
          <a
            href="https://t.me/bigCoffie"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00c896] hover:underline"
          >
            t.me/bigCoffie
          </a>
        </p>
      </div>
    </section>
  );
}