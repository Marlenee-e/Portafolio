"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#2d3e36] text-white flex items-center justify-center p-6">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-10">
        {/* Sección izquierda */}
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-white tracking-wide">EMELY LÓPEZ</h1>
            <p className="text-lg italic text-gray-300 mt-1">Abogada Penalista</p>
          </div>

          <p className="text-gray-200 leading-relaxed">
            Con ética y dedicación, deseo marcar una diferencia y llevar justicia
            a quienes la necesitan.
          </p>

          <button className="bg-white text-gray-900 font-semibold px-6 py-2 rounded-full w-fit shadow-lg hover:bg-gray-200 transition">
            Contáctame
          </button>

          <a
            href="https://www.linkedin.com/in/emely-lópez"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-400 hover:text-blue-500 mt-2"
          >
            <Linkedin className="w-5 h-5" />
            Emely López
          </a>
        </div>

        {/* Sección derecha */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-2 gap-4"
        >
          <div className="col-span-1 flex flex-col gap-4">
            <Image
              src="/fotos/foto2.jpg"
              alt="Emely López 1"
              width={400}
              height={400}
              className="rounded-2xl object-cover shadow-lg"
            />
            <Image
              src="/fotos/libros.png"
              alt="Abogacía"
              width={400}
              height={400}
              className="rounded-2xl object-cover shadow-lg"
            />
          </div>

          <div className="col-span-1">
            <Image
              src="/fotos/foto1.jpg"
              alt="Emely López 2"
              width={400}
              height={600}
              className="rounded-2xl object-cover shadow-lg h-full"
            />
          </div>
        </motion.div>
      </div>
    </main>
  );
}
