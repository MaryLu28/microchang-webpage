import React from "react";
import { Mail, Map } from "lucide-react";
import WhatsAppIcon from "@/components/whatsapp-icon";

export const PHONE_NUMBER = "+5491127132187";
export const WHATSAPP_MESSAGE = "Hola!";
export const WHATSAPP_URL = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

const phoneFormatter = (phone: string): string => {
  // Format phone number as XXX-XXXX-XXXX
  const cleaned = phone.replace("+549", "").replace(/\D/g, "");
  const match = cleaned.match(/^(\d{2})(\d{4})(\d{4})$/);
  if (match) {
    return `${match[1]}-${match[2]}-${match[3]}`;
  }
  return phone;
};

const ICON_SIZE_CLASSES = "size-4 md:size-5";

export const CONTACT_INFO: {
  type: "phone" | "email" | "address";
  text: string[];
  href: string;
  icon: React.ReactNode;
}[] = [
  {
    type: "phone",
    text: [phoneFormatter(PHONE_NUMBER) || PHONE_NUMBER],
    href: WHATSAPP_URL,
    icon: <WhatsAppIcon className={ICON_SIZE_CLASSES} viewBox="4 4 24 24" />,
  },
  {
    type: "email",
    text: ["info@microchang.com.ar"],
    href: "mailto:info@microchang.com.ar",
    icon: <Mail className={ICON_SIZE_CLASSES} />,
  },
  {
    type: "address",
    text: ["Zabala 1725, Belgrano", "Ciudad Autónoma de Buenos Aires"],
    href: "https://maps.app.goo.gl/CX46UZGAUjSCYnQJA",
    icon: <Map className={ICON_SIZE_CLASSES} />,
  },
];
