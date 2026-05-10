"use client";

import Link from "next/link";
import { useState } from "react";

interface ApiCall {
  method: string;
  path: string;
  description: string;
  request?: string;
  response: string;
  status: number;
}

const API_CALLS: ApiCall[] = [
  {
    method: "POST",
    path: "/auth/register",
    description: "Create a new user account",
    request: JSON.stringify(
      { email: "alice@example.com", name: "Alice", password: "securepass123" },
      null,
      2
    ),
    response: JSON.stringify(
      {
        id: "b616a258-0133-4fbb-810e-4396af04da70",
        email: "alice@example.com",
        name: "Alice",
        role: "user",
      },
      null,
      2
    ),
    status: 201,
  },
  {
    method: "POST",
    path: "/auth/login",
    description: "Authenticate and receive JWT + refresh token",
    request: JSON.stringify(
      { email: "alice@example.com", password: "securepass123" },
      null,
      2
    ),
    response: JSON.stringify(
      {
        access_token: "eyJhbGciOiJIUzI1NiIs...T_OJo-ULwRa5CxNhrc9RJ5vAv",
        refresh_token: "70713ebaf0c4e3315368c762013d7a71...416932",
        expires_in: 3600,
      },
      null,
      2
    ),
    status: 200,
  },
  {
    method: "GET",
    path: "/api/me",
    description: "Get current user (requires Bearer token)",
    response: JSON.stringify(
      {
        id: "b616a258-0133-4fbb-810e-4396af04da70",
        email: "alice@example.com",
        name: "Alice",
        role: "user",
        created_at: "2026-03-16T14:51:55.782Z",
      },
      null,
      2
    ),
    status: 200,
  },
  {
    method: "GET",
    path: "/api/me",
    description: "Unauthorized request (no token)",
    response: JSON.stringify({ error: "missing authorization header" }, null, 2),
    status: 401,
  },
  {
    method: "POST",
    path: "/auth/refresh",
    description: "Rotate refresh token for new token pair",
    request: JSON.stringify(
      { refresh_token: "70713ebaf0c4e3315368c762013d7a71...416932" },
      null,
      2
    ),
    response: JSON.stringify(
      {
        access_token: "eyJhbGciOiJIUzI1NiIs...new_token_here",
        refresh_token: "c0915f4fae24e920f20ad637...new_refresh",
        expires_in: 3600,
      },
      null,
      2
    ),
    status: 200,
  },
  {
    method: "GET",
    path: "/metrics",
    description: "Service metrics (uptime, requests, users)",
    response: JSON.stringify(
      {
        uptime_seconds: 3847.21,
        total_requests: 1249,
        total_users: 38,
      },
      null,
      2
    ),
    status: 200,
  },
];

const methodColors: Record<string, string> = {
  GET: "text-green-400 bg-green-400/10",
  POST: "text-blue-400 bg-blue-400/10",
  DELETE: "text-red-400 bg-red-400/10",
};

const statusColors: Record<number, string> = {
  200: "text-green-400",
  201: "text-green-400",
  401: "text-red-400",
  429: "text-yellow-400",
};

export default function AuthDemo() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed]">
      <nav className="border-b border-[#1e1e1e] px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <span className="text-xl font-bold">
            Auth<span className="text-green-500"> Microservice</span>
          </span>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/c-tonneslan/auth-microservice"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#888] hover:text-white transition-colors"
            >
              GitHub
            </a>
            <Link
              href="/"
              className="text-sm text-[#888] hover:text-white transition-colors"
            >
              Back to Portfolio
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-6">
          <p className="text-sm text-[#888]">
            Standalone auth service in Go with JWT access tokens, refresh token
            rotation, RBAC middleware, rate limiting, and structured logging.
          </p>
        </div>

        <div className="mb-4 flex items-center gap-4 text-xs text-[#888]">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-green-500 rounded-full" /> bcrypt
            hashing
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-blue-500 rounded-full" /> HS256 JWT
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-purple-500 rounded-full" /> RBAC
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-yellow-500 rounded-full" /> Rate
            limited
          </span>
        </div>

        <div className="space-y-3">
          {API_CALLS.map((call, i) => (
            <div
              key={i}
              className="bg-[#111] border border-[#1e1e1e] rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="w-full px-5 py-3.5 flex items-center gap-3 hover:bg-[#161616] transition-colors text-left"
              >
                <span
                  className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${methodColors[call.method]}`}
                >
                  {call.method}
                </span>
                <span className="font-mono text-sm">{call.path}</span>
                <span className="text-xs text-[#888] ml-auto">
                  {call.description}
                </span>
                <span
                  className={`text-xs font-mono ${statusColors[call.status] || "text-[#888]"}`}
                >
                  {call.status}
                </span>
              </button>

              {expanded === i && (
                <div className="border-t border-[#1e1e1e] px-5 py-4 space-y-3">
                  {call.request && (
                    <div>
                      <p className="text-xs text-[#888] mb-1 font-mono">
                        Request Body
                      </p>
                      <pre className="text-xs font-mono bg-[#0a0a0a] rounded-lg p-3 text-blue-300 overflow-x-auto">
                        {call.request}
                      </pre>
                    </div>
                  )}
                  <div>
                    <p className="text-xs text-[#888] mb-1 font-mono">
                      Response
                    </p>
                    <pre className="text-xs font-mono bg-[#0a0a0a] rounded-lg p-3 text-green-300 overflow-x-auto">
                      {call.response}
                    </pre>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 text-xs text-[#555]">
          Built with Go, Gin, golang-jwt, and bcrypt. Run: go run . (starts on
          :8080)
        </div>
      </div>
    </div>
  );
}
