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
  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  }>({
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
    <div 
      style={{ backgroundColor }} 
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Black overlay while measuring dimensions */}
      <motion.div
        style={{ opacity: dimensions.width === 0 ? 1 : 0 }}
        className="fixed inset-0 w-full h-full pointer-events-none z-50 bg-black"
        initial={{ opacity: 1 }}
        animate={{ opacity: dimensions.width === 0 ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Page title in the middle */}
      <motion.p
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl md:text-5xl lg:text-6xl z-[60] text-center whitespace-nowrap px-4"
        {...anim(text)}
      >
        {routes[router.route] || "PAGE"}
      </motion.p>

      {/* Animated curve SVG */}
      {dimensions.width > 0 && dimensions.height > 0 && (
        <SVG width={dimensions.width} height={dimensions.height} />
      )}

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

const SVG = ({ width, height }: { width: number; height: number }) => {
  // Fixed path definitions with proper template literal syntax
  const initialPath = `M0 300 Q${width / 2} 0 ${width} 300 L${width} ${
    height + 300
  } Q${width / 2} ${height + 600} 0 ${height + 300} L0 0`;

  const targetPath = `M0 300 Q${width / 2} 0 ${width} 300 L${width} ${height} Q${
    width / 2
  } ${height} 0 ${height} L0 0`;

  return (
    <motion.svg
      className="fixed inset-0 w-full h-full pointer-events-none z-50"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      {...anim(translate)}
    >
      <motion.path
        fill="black"
        {...anim(curve(initialPath, targetPath))}
      />
    </motion.svg>
  );
};
