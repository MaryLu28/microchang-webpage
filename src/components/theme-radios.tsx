"use client";

import { useTheme } from "next-themes";
import { Sun, Moon, Laptop } from "lucide-react";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

export function ThemeRadios() {
  const { theme, setTheme } = useTheme();

  // Helper to generate styles for the icon container
  // Checks if the value matches the current theme to apply "selected" styles
  const getIconContainerStyles = (value: string) => {
    const isSelected = theme === value;
    return cn(
      "flex size-9 items-center justify-center rounded-full p-0 transition-all cursor-pointer",
      "hover:bg-accent hover:text-accent-foreground", // Default hover style
      isSelected
        ? "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground" // Active/Selected style
        : "text-muted-foreground" // Inactive style
    );
  };

  return (
    <RadioGroup
      defaultValue={theme}
      onValueChange={(value) => setTheme(value)}
      className="flex flex-row items-center gap-1 bg-muted p-1 rounded-full border"
    >
      {/* LIGHT Option */}
      <div>
        {/* Visually hide the native radio input */}
        <RadioGroupItem value="light" id="theme-light" className="sr-only" />
        <Label
          htmlFor="theme-light"
          className={getIconContainerStyles("light")}
        >
          <Sun className="h-5 w-5" />
          <span className="sr-only">Tema Claro</span>{" "}
          {/* Text for screen readers only */}
        </Label>
      </div>

      {/* DARK Option */}
      <div>
        <RadioGroupItem value="dark" id="theme-dark" className="sr-only" />
        <Label htmlFor="theme-dark" className={getIconContainerStyles("dark")}>
          <Moon className="h-5 w-5" />
          <span className="sr-only">Tema Oscuro</span>
        </Label>
      </div>

      {/* SYSTEM Option */}
      <div>
        <RadioGroupItem value="system" id="theme-system" className="sr-only" />
        <Label
          htmlFor="theme-system"
          className={getIconContainerStyles("system")}
        >
          <Laptop className="h-5 w-5" />
          <span className="sr-only">Tema del Sistema</span>
        </Label>
      </div>
    </RadioGroup>
  );
}
