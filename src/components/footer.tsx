import { cn } from "@/lib/utils";
import { Mail, Map, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";
import InstagramLogo from "../imgs/instagram-icon.png";
import TikTokLogo from "../imgs/tiktok-icon.png";

const contactInfo: {
  type: "phone" | "email" | "address";
  text: string[];
  href: string;
  icon: React.ReactNode;
}[] = [
  {
    type: "phone",
    text: ["11-2713-2187"],
    href: "tel:1127132187",
    icon: <Phone className="size-4 md:size-5" />,
  },
  {
    type: "email",
    text: ["info@microchang.com.ar"],
    href: "mailto:info@microchang.com.ar",
    icon: <Mail className="size-4 md:size-5" />,
  },
  {
    type: "address",
    text: ["3 de Febrero 2544, Belgrano", "Ciudad Autónoma de Buenos Aires"],
    href: "https://maps.app.goo.gl/n1zGP9C56HM6rQb96",
    icon: <Map className="size-4 md:size-5" />,
  },
];

const IconLink: React.FC<{
  type?: "phone" | "email" | "address";
  href: string;
  icon: React.ReactNode;
  text: string[];
}> = ({ type, href, icon, text }) => (
  <a
    href={href}
    target="_blank"
    className={cn(
      "text-gray-600 dark:text-gray-400 text-sm md:text-lg",
      "hover:text-accent-foreground dark:hover:text-accent-foreground",
      "flex gap-2 items-center",
      type === "address" && "items-start"
    )}
  >
    <span className={cn(type === "address" && "mt-1")}>{icon}</span>
    <p className="text-center md:text-left">
      {text.map((line, index) => (
        <span key={index} className="md:block">
          {line}
          {index < text.length - 1 && ", "}
        </span>
      ))}
    </p>
  </a>
);

const Footer: React.FC = () => {
  const titleClasses = cn(
    "text-lg md:text-xl",
    "text-center md:text-left",
    "font-semibold",
    "mb-4"
  );

  return (
    <footer className="w-full shadow-md border-t border-black/20 dark:border-white/20">
      <div className="container max-w-5xl mx-auto px-4 py-6 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-4">
          {/* Column 1 */}
          <div>
            <h3 className={titleClasses}>Contacto</h3>
            <div className="flex flex-col items-center md:items-start gap-2">
              {contactInfo.map((info) => (
                <IconLink
                  key={info.type}
                  type={info.type}
                  href={info.href}
                  icon={info.icon}
                  text={info.text}
                />
              ))}
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className={cn(titleClasses)}>Nuestras Redes</h3>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="https://www.instagram.com/microchang.ar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={InstagramLogo}
                  alt="Instagram"
                  className="size-8 md:size-12"
                />
              </a>
              <a
                href="https://www.tiktok.com/@microchang.ar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={TikTokLogo}
                  alt="TikTok"
                  className="size-8 md:size-12"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
