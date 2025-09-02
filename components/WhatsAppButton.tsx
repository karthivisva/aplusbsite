"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Define the props interface
interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  phoneNumber = "1234567890", 
  message = "Hi! Any help? Contact us" 
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  useEffect(() => {
    // Show button after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Show tooltip after button appears
      const tooltipTimer = setTimeout(() => {
        setShowTooltip(true);
      }, 1000);

      // Hide tooltip after 4 seconds
      const hideTooltipTimer = setTimeout(() => {
        setShowTooltip(false);
      }, 5000);

      return () => {
        clearTimeout(tooltipTimer);
        clearTimeout(hideTooltipTimer);
      };
    }
  }, [isVisible]);

  const handleWhatsAppClick = (): void => {
    const encodedMessage = encodeURIComponent("Hi! I need help with your services.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50">
          {/* Tooltip Message */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg px-4 py-2 whitespace-nowrap"
                style={{
                  boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                  border: "1px solid #e5e7eb"
                }}
              >
                <div className="text-sm text-gray-800 font-medium">
                  {message}
                </div>
                {/* Arrow pointing down */}
                <div className="absolute -bottom-1 right-4 w-3 h-3 bg-white border-r border-b border-gray-200 transform rotate-45"></div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp Button */}
          <motion.button
            initial={{ opacity: 0, y: 100, scale: 0 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
            }}
            exit={{ opacity: 0, y: 100, scale: 0 }}
            transition={{ 
              duration: 0.5, 
              ease: "easeOut",
              type: "spring",
              stiffness: 200,
              damping: 15
            }}
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 10px 30px rgba(37, 211, 102, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={handleWhatsAppClick}
            className="group relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #25d366 0%, #128c7e 100%)",
              boxShadow: "0 4px 20px rgba(37, 211, 102, 0.3)"
            }}
          >
            {/* Pulse Animation */}
            <motion.div
              className="absolute inset-0 rounded-full bg-green-400"
              initial={{ scale: 1, opacity: 0.7 }}
              animate={{ 
                scale: [1, 1.4, 1], 
                opacity: [0.7, 0, 0.7] 
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* WhatsApp Icon */}
            <svg 
              className="w-7 h-7 text-white z-10 relative"
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63"/>
            </svg>
            
            {/* Online indicator */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white">
              <motion.div
                className="w-full h-full bg-green-400 rounded-full"
                animate={{ scale: [1, 0.8, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppButton;
