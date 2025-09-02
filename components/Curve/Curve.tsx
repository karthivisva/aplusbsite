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
    <>
      {/* Full screen black overlay while measuring dimensions */}
      <motion.div
        className="fixed top-0 left-0 w-screen h-screen bg-black z-[100] pointer-events-none"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          minWidth: '100vw',
          minHeight: '100vh',
          backgroundColor: 'black',
          zIndex: 100,
        }}
        initial={{ opacity: 1 }}
        animate={{ opacity: dimensions.width === 0 ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Page title in the middle */}
      <motion.p
        className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-[110] text-center whitespace-nowrap px-4"
        style={{
          position: 'fixed',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 110,
          fontSize: 'clamp(24px, 5vw, 64px)',
          color: 'white',
          textAlign: 'center',
        }}
        {...anim(text)}
      >
        {routes[router.route] || "PAGE"}
      </motion.p>

      {/* Animated curve SVG */}
      {dimensions.width > 0 && dimensions.height > 0 && (
        <SVG width={dimensions.width} height={dimensions.height} />
      )}

      {/* Main content container */}
      <div 
        style={{ backgroundColor }} 
        className="relative min-h-screen w-full overflow-hidden"
      >
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </>
  );
}

const SVG = ({ width, height }: { width: number; height: number }) => {
  // Create a rectangle that covers the entire screen initially, then animates to reveal content
  const initialPath = `M0,0 L0,${height} L${width},${height} L${width},0 Z`;
  const targetPath = `M0,${height} L0,${height} L${width},${height} L${width},${height} Z`;

  return (
    <motion.svg
      className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-[90]"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        minWidth: '100vw',
        minHeight: '100vh',
        zIndex: 90,
      }}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      {...anim(translate)}
    >
      <motion.path
        fill="black"
        d={initialPath}
        {...anim(curve(initialPath, targetPath))}
      />
    </motion.svg>
  );
};
