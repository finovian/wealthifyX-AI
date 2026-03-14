'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCcw, Home, Mail } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-[70vh] flex items-center justify-center p-[80px_24px] bg-[var(--bg-base)]">
      <div className="max-w-[600px] w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Icon/Visual */}
          <div className="flex justify-center mb-[32px]">
            <div className="w-[80px] h-[80px] rounded-[24px] bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 relative">
              <AlertTriangle size={32} />
              <motion.span 
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-[var(--bg-base)] flex items-center justify-center"
              >
                <div className="w-2 h-2 bg-white rounded-full" />
              </motion.span>
            </div>
          </div>

          <span className="section-eyebrow mb-[16px] block text-red-500">{'// SYSTEM ERROR'}</span>
          <h1 className="section-heading mb-[20px] max-md:text-[32px]">
            Something went wrong.
          </h1>
          <p className="section-subtext mb-[40px] max-w-[440px] m-[0_auto]">
            An unexpected error occurred while processing your request. Our team has been notified.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-[12px]">
            <button
              onClick={() => reset()}
              className="btn-primary w-full sm:w-auto h-[48px] px-[28px] flex items-center justify-center gap-[8px]"
            >
              <RefreshCcw size={16} /> Try Again
            </button>
            <Link 
              href="/"
              className="btn-ghost w-full sm:w-auto h-[48px] px-[28px] flex items-center justify-center gap-[8px] no-underline border border-[var(--border)]"
            >
              <Home size={16} /> Back to Home
            </Link>
          </div>

          <div className="mt-[48px] p-[20px] bg-[var(--bg-subtle)] border border-[var(--border)] rounded-[16px]">
            <p className="font-sans text-[14px] text-[var(--text-muted)] mb-[16px]">
              If this issue persists, please let us know so we can fix it.
            </p>
            <Link 
              href="/contact?subject=Bug Report"
              className="font-ubuntu text-[13px] font-[500] text-[var(--accent)] flex items-center justify-center gap-[6px] no-underline hover:underline"
            >
              <Mail size={14} /> Report this issue <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

function ArrowRight({ size }: { size: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
