import { WHATSAPP_URL } from "@/constants/contact-info";
import React from "react";
import WhatsAppIcon from "./whatsapp-icon";

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      aria-label="Contactar por WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  );
};
