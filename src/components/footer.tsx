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
    icon: <Phone size={20} />,
  },
  {
    type: "email",
    text: ["info@microchang.com.ar"],
    href: "mailto:info@microchang.com.ar",
    icon: <Mail size={20} />,
  },
  {
    type: "address",
    text: ["3 de Febrero 2544, Belgrano", "Ciudad Autónoma de Buenos Aires"],
    href: "https://maps.app.goo.gl/n1zGP9C56HM6rQb96",
    icon: <Map size={20} />,
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
      "text-gray-600 dark:text-gray-400 text-lg",
      "hover:text-accent-foreground dark:hover:text-accent-foreground",
      "flex gap-2 items-center",
      type === "address" && "w-full",
      type === "phone" &&
        "border-r border-gray-600 pr-2 last:mr-0 last:border-0"
    )}
  >
    <span>{icon}</span>
    <p>
      {text.map((line, index) => (
        <span key={index} className="block">
          {line}
        </span>
      ))}
    </p>
  </a>
);

const Footer: React.FC = () => {
  const titleClasses = cn("text-xl", "font-semibold", "mb-4");

  return (
    <footer className="w-full shadow-md border-t border-black/20 dark:border-white/20">
      <div className="container max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-4">
          {/* Column 1 */}
          <div className="md:col-span-2">
            <h3 className={titleClasses}>Contacto</h3>
            <div className="flex flex-wrap gap-2">
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

          {/* Column 3 */}
          <div>
            <h3 className={cn(titleClasses)}>Nuestras Redes</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/microchang.ar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={InstagramLogo}
                  alt="Instagram"
                  className="size-12"
                />
              </a>
              <a
                href="https://www.tiktok.com/@microchang.ar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={TikTokLogo} alt="TikTok" className="size-12" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
