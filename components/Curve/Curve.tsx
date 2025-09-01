"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { text, curve, translate } from "@/motion";

const routes: Record<string, string> = {
  "/": "HOME",
  "/services": "SERVICES",
  "/presentation": "OUR WORKS",
  "/ochi-team": "ABOUT US",
  "/insights": "Insights",
  "/contact": "Contact Us",
  "/case": "Workiz Easy",
};

const anim = (variants: any) => ({
  variants,
  initial: "initial",
  animate: "enter",
  exit: "exit",
});

export default function Curve({
  children,
  backgroundColor,
}: {
  children: React.ReactNode;
  backgroundColor: string;
}) {
  const router = useRouter();
  const [dimensions, setDimensions] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div style={{ backgroundColor }} className="overflow-x-hidden">
      {/* Black overlay while measuring dimensions */}
      <div
        style={{ opacity: dimensions.width === 0 ? 1 : 0 }}
        className="fixed w-screen h-screen pointer-events-none left-0 top-0 z-50 bg-black"
      />

      {/* Page title in the middle */}
      <motion.p
        className="absolute left-1/2 top-[40%] text-white text-[50px] z-[60] -translate-x-1/2 text-center"
        {...anim(text)}
      >
        {routes[router.route]}
      </motion.p>

      {/* Animated curve SVG */}
      {dimensions.width > 0 && dimensions.height > 0 && (
        <SVG width={dimensions.width} height={dimensions.height} />
      )}

      {children}
    </div>
  );
}

const SVG = ({ width, height }: { width: number; height: number }) => {
  const initialPath = `
    M0 300 
    Q${width / 2} 0 ${width} 300
    L${width} ${height + 300}
    Q${width / 2} ${height + 600} 0 ${height + 300}
    L0 0
  `;

  const targetPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height}
    Q${width / 2} ${height} 0 ${height}
    L0 0
  `;

  return (
    <motion.svg
      className="fixed w-screen h-screen pointer-events-none left-0 top-0 z-50"
      {...anim(translate)}
    >
      <motion.path {...anim(curve(initialPath, targetPath))} />
    </motion.svg>
  );
};
