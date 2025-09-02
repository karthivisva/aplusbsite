"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { text, translate } from "@/motion";

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
      {/* Black transition overlay - covers entire screen */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: dimensions.width === 0 ? 0 : "-100%" }}
        exit={{ y: 0 }}
        transition={{ 
          duration: 0.8, 
          ease: [0.76, 0, 0.24, 1] 
        }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "black",
          zIndex: 9999,
          pointerEvents: "none",
        }}
      />

      {/* Curved bottom overlay for transition effect */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: dimensions.width === 0 ? 0 : "100%" }}
        exit={{ y: 0 }}
        transition={{ 
          duration: 0.8, 
          ease: [0.76, 0, 0.24, 1],
          delay: 0.1 
        }}
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "black",
          zIndex: 9998,
          pointerEvents: "none",
          borderRadius: "50% 50% 0 0",
        }}
      />

      {/* Page title */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: dimensions.width === 0 ? 1 : 0 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontSize: "clamp(32px, 6vw, 80px)",
          fontWeight: "bold",
          zIndex: 10000,
          textAlign: "center",
          whiteSpace: "nowrap",
          pointerEvents: "none",
        }}
      >
        {routes[router.route] || "PAGE"}
      </motion.p>

      {/* Main content */}
      <div style={{ backgroundColor }}>
        {children}
      </div>
    </>
  );
}
