import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex-1 w-full flex flex-col md:flex-row-reverse items-center md:items-stretch justify-center md:justify-between">
      <div className="main-image" />
      <div className="flex-1 flex flex-col items-center justify-center p-6 md:px-10 xl:pl-0">
        <h1 className="text-2xl md:text-3xl font-semibold pb-4 md:pb-5 text-center">
          MAQUETAS 3D
        </h1>
        <p className="text-lg md:text-xl text-center pb-6 md:pb-10">
          Imprimí tus maquetas 3D con calidad profesional, precisión de detalle
          y asesoramiento personalizado.
        </p>
        <Button size="lg" asChild>
          <Link href="https://wa.me/5491127132187" target="_blank">
            CONTÁCTANOS
          </Link>
        </Button>
      </div>
    </div>
  );
}
