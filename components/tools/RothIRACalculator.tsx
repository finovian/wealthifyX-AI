"use client";

import dynamic from "next/dynamic";

const DynamicCalculator = dynamic(
  () => import("./RothIRAForm"),
  { ssr: false }
);


export default function RothIRACalculator(props: any) {
  return <DynamicCalculator {...props} />;
}
