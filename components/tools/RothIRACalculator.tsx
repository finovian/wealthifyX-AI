"use client";

import dynamic from "next/dynamic";

const DynamicCalculator = dynamic(
  () => import("./RothIRAForm"),
  { 
    ssr: false,
    loading: () => <RothIRASkeleton />
  }
);

function RothIRASkeleton() {
  return (
    <div className="min-h-screen animate-pulse">
      {/* Hero Skeleton */}
      <div className="bg-[var(--bg-subtle)] border-b-[1px] border-b-[var(--border)] p-[90px_48px_48px] max-md:p-[80px_20px_28px]">
        <div className="max-w-[1100px] m-[0_auto] flex flex-col items-center">
          <div className="w-[120px] h-[22px] bg-[var(--border)] rounded-[100px] mb-[16px]" />
          <div className="w-[80%] max-w-[600px] h-[60px] max-md:h-[40px] bg-[var(--border)] rounded-[12px] mb-[20px]" />
          <div className="w-[90%] max-w-[780px] h-[20px] bg-[var(--border)] rounded-[8px] mb-[8px]" />
          <div className="w-[70%] max-w-[500px] h-[20px] bg-[var(--border)] rounded-[8px]" />
        </div>
      </div>

      {/* Calculator Grid Skeleton */}
      <div className="p-[48px_48px] max-md:p-[24px_20px] md:max-lg:p-[40px_32px] bg-[var(--bg-base)]">
        <div className="max-w-[1100px] m-[0_auto]">
          <div className="grid grid-cols-[400px_1fr] max-lg:grid-cols-[1fr] xl:grid-cols-[420px_1fr] gap-[32px] max-md:gap-[20px] items-start">

            {/* Left Col */}
            <div className="card p-[28px] max-md:p-[20px_18px] flex flex-col gap-[24px]">
              <div className="w-[80px] h-[12px] bg-[var(--border)] rounded" />
              <div className="grid grid-cols-2 gap-[12px]">
                <div className="h-[65px] bg-[var(--bg-subtle)] rounded-[12px]" />
                <div className="h-[65px] bg-[var(--bg-subtle)] rounded-[12px]" />
              </div>
              <div className="h-[65px] bg-[var(--bg-subtle)] rounded-[12px]" />
              <div className="h-[65px] bg-[var(--bg-subtle)] rounded-[12px]" />
              <div className="h-[65px] bg-[var(--bg-subtle)] rounded-[12px]" />
            </div>

            {/* Right Col */}
            <div className="flex flex-col gap-[16px]">
              <div className="grid grid-cols-[1fr_1fr] max-md:grid-cols-1 gap-[12px]">
                <div className="h-[120px] bg-[var(--bg-subtle)] rounded-[16px] col-span-2" />
                <div className="h-[100px] bg-[var(--bg-subtle)] rounded-[16px]" />
                <div className="h-[100px] bg-[var(--bg-subtle)] rounded-[16px]" />
              </div>
              <div className="h-[400px] bg-[var(--bg-subtle)] rounded-[16px]" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default function RothIRACalculator(props: any) {
  return <DynamicCalculator {...props} />;
}
