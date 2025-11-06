// components/Resources/ResourceModal.tsx
import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Link2, Copy, ArrowLeft, Share2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Resource {
  id: number;
  title: string;
  category: string;
  description: string;
  fullText?: string;
  link?: string;
  image: string;
  video?: string;
  author?: string;
  date?: string;
}

const getYouTubeEmbedSrc = (url?: string) => {
  if (!url) return null;
  const m = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})(?:\?|&|$)/);
  if (m?.[1]) return `https://www.youtube.com/embed/${m[1]}`;
  const short = url.match(/youtu\.be\/([0-9A-Za-z_-]{11})/);
  if (short?.[1]) return `https://www.youtube.com/embed/${short[1]}`;
  return null;
};

const getCloudinaryVideoSrc = (url?: string) => {
  if (!url?.includes("cloudinary")) return null;
  const match = url.match(/public_id=([^&]+)/);
  if (match?.[1]) {
    return `https://res.cloudinary.com/dzqdfaghg/video/upload/${match[1]}.mp4`;
  }
  return null;
};

const formatDate = (date?: string) =>
  date
    ? new Date(date).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "Oct 2025";

export default function ResourceModal({
  resource,
  onClose,
}: {
  resource: Resource;
  onClose: () => void;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Lock scroll + ESC
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  // Click outside
  useEffect(() => {
    const onMouseDown = (e: MouseEvent) => {
      if (modalRef.current?.contains(e.target as Node)) return;
      onClose();
    };
    overlayRef.current?.addEventListener("mousedown", onMouseDown);
    return () => overlayRef.current?.removeEventListener("mousedown", onMouseDown);
  }, [onClose]);

  // Focus trap
  useEffect(() => {
    const modal = modalRef.current;
    if (!modal) return;
    modal.focus();

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const focusable = modal.querySelectorAll(
        'button, [href], input, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const first = focusable[0] as HTMLElement;
      const last = focusable[focusable.length - 1] as HTMLElement;

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleTab);
    return () => document.removeEventListener("keydown", handleTab);
  }, [onClose]);

  const youtubeSrc = getYouTubeEmbedSrc(resource.video);
  const cloudinarySrc = getCloudinaryVideoSrc(resource.video);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(
        `${window.location.origin}#/resources/${resource.id}`
      );
      alert("Link copied!");
    } catch {}
  };

  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(resource.fullText || resource.description);
      alert("Text copied!");
    } catch {}
  };

  const share = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: resource.title,
          text: resource.description,
          url: window.location.href,
        });
      } catch {}
    } else {
      copyLink();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        key="resource-modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center"
      >
        <motion.div
          ref={overlayRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.75 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black"
        />

        <motion.div
          ref={modalRef}
          onClick={(e) => e.stopPropagation()}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ type: "spring", stiffness: 250, damping: 25 }}
          className="relative z-10 w-full h-full bg-[#0b0f19] overflow-auto text-white"
          role="dialog"
          aria-modal="true"
          aria-labelledby="resource-title"
          tabIndex={-1}
        >
          {/* Header */}
          <header className="sticky top-0 z-20 bg-[#0b0f19]/90 backdrop-blur-md border-b border-white/10">
            <div className="flex items-center justify-between px-4 py-3 md:px-6">
              <button
                onClick={onClose}
                className="flex items-center gap-1 text-white/80 hover:text-white transition"
                aria-label="Go back"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="text-sm md:hidden">Back</span>
              </button>

              <div className="hidden md:flex items-center gap-3">
                {resource.link && (
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 text-sm"
                  >
                    <Link2 className="w-4 h-4" /> Open Source
                  </a>
                )}
                <button
                  onClick={copyLink}
                  className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 text-sm"
                >
                  <Copy className="w-4 h-4" /> Copy Link
                </button>
                <button
                  onClick={copyText}
                  className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 text-sm"
                >
                  <Copy className="w-4 h-4" /> Copy Text
                </button>
                <button
                  onClick={share}
                  className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 text-sm"
                >
                  <Share2 className="w-4 h-4" /> Share
                </button>
                <button
                  onClick={onClose}
                  className="ml-2 p-2 rounded-full bg-white/5 hover:bg-white/10"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </header>

          {/* Media */}
          <div className="bg-black/20">
            {cloudinarySrc ? (
              <video controls className="w-full h-[50vh] md:h-[70vh]">
                <source src={cloudinarySrc} type="video/mp4" />
              </video>
            ) : youtubeSrc ? (
              <div className="w-full h-[50vh] md:h-[70vh] bg-black">
                <iframe
                  title={resource.title}
                  src={`${youtubeSrc}?rel=0&modestbranding=1`}
                  allowFullScreen
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="w-full h-[40vh] md:h-[60vh] overflow-hidden">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            )}
          </div>

          {/* Content */}
          <div className="max-w-5xl mx-auto px-6 py-10">
            <h1 id="resource-title" className="text-3xl md:text-4xl font-bold text-[#00c896]">
              {resource.title}
            </h1>
            <p className="text-white/70 text-sm mt-2 mb-6">
              {resource.author ?? "Big Coffie"} • {formatDate(resource.date)} •{" "}
              <span className="text-[#00c896]">{resource.category}</span>
            </p>

            <div className="markdown-body text-white/90">
              {resource.fullText ? (
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h2: ({ children }) => (
                      <h2 className="text-2xl font-semibold mt-6 mb-3 text-[#00c896]">{children}</h2>
                    ),
                    p: ({ children }) => (
                      <p className="text-white/80 leading-relaxed mb-4">{children}</p>
                    ),
                    img: ({ src, alt }) => (
                      <img src={src} alt={alt} className="rounded-xl my-6 w-full object-cover" loading="lazy" />
                    ),
                    a: ({ href, children }) => (
                      <a href={href} className="text-[#00ffcc] underline hover:text-[#00c896]" target="_blank" rel="noopener">
                        {children}
                      </a>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-4 border-[#00c896] pl-4 italic text-white/80 my-4">
                        {children}
                      </blockquote>
                    ),
                  }}
                >
                  {resource.fullText}
                </ReactMarkdown>
              ) : (
                <p className="text-white/80">{resource.description}</p>
              )}
            </div>

            <div className="mt-12 flex flex-wrap gap-4 justify-center">
              <a
                href="https://t.me/bigCoffie"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00ff88] to-[#00cc66] text-black font-bold rounded-full shadow-xl hover:shadow-2xl hover:shadow-[#00ff88]/50 transition-all"
              >
                Message Big Coffie Now
              </a>
              <a
                href="/mentorship"
                className="px-6 py-3 border-2 border-[#FFD700] text-[#FFD700] font-bold rounded-full hover:bg-[#FFD700]/10 transition"
              >
                Join Mentorship
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}