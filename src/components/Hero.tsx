import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/4e98c8d2-f258-4533-a6f3-d941b7318d99/files/c1068bee-36f8-4d21-a398-aab4e1ef0ee9.jpg"
          alt="Замок Беларуси"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="relative z-10 text-center text-white">
        <p className="text-xs md:text-sm uppercase tracking-[0.4em] mb-4 opacity-70">Свиток странника</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          ЗАМКИ<br/>БЕЛАРУСИ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90">
          Путеводитель по средневековым крепостям — от Мирского замка до Несвижа
        </p>
      </div>
    </div>
  );
}