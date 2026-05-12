"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "Full-Stack Developer",
  "AI/ML Engineer",
  "Open Source Contributor",
  "Systems Programmer",
];

const stats = [
  { label: "Open Source PRs", value: 23 },
  { label: "Repos Contributed To", value: 17 },
];

function useTypingEffect(words: string[], typingSpeed = 80, pauseTime = 2000) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(current.slice(0, text.length + 1));
          if (text.length + 1 === current.length) {
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? typingSpeed / 2 : typingSpeed
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, pauseTime]);

  return text;
}

function AnimatedCounter({ value }: { value: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [value]);

  return <>{count}</>;
}

export default function Hero() {
  const typedText = useTypingEffect(roles);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[150px] animate-float [animation-delay:3s]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Typing role */}
          <div className="h-8 mb-4">
            <span className="text-accent font-mono text-sm tracking-wider uppercase">
              {typedText}
            </span>
            <span className="typing-cursor" />
          </div>

          <h1 className="text-5xl md:text-8xl font-bold tracking-tight leading-tight mb-6">
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-accent to-purple-500 animate-gradient">
              Charlie
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            I build real-time systems, developer tools, and AI-powered
            applications across TypeScript, Python, Go, and Rust. I contribute
            to open source projects at{" "}
            <span className="text-foreground">Tailscale</span> and{" "}
            <span className="text-foreground">LiveKit</span>.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <a
              href="#opensource"
              className="px-7 py-3.5 bg-accent hover:bg-accent-hover text-white rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5"
            >
              Open Source
            </a>
            <a
              href="mailto:cst0520@gmail.com"
              className="px-7 py-3.5 border border-[#333] hover:border-[#555] rounded-xl font-medium transition-all hover:-translate-y-0.5"
            >
              Contact Me
            </a>
          </div>

          {/* Stats with animated counters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="grid grid-cols-2 gap-4 max-w-sm mx-auto"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-card-bg/50 border border-card-border rounded-xl p-4 backdrop-blur-sm"
              >
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-foreground to-muted">
                  <AnimatedCounter value={stat.value} />
                </div>
                <div className="text-xs text-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-5 h-8 border-2 border-[#333] rounded-full flex justify-center pt-1"
          >
            <div className="w-1 h-2 bg-muted rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
