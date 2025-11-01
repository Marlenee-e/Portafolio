"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="min-h-screen bg-[#2d3e36] text-white flex items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-10"
      >
        {/* Imagen */}
        <div className="flex justify-center md:w-1/2">
          <Image
            src="/fotos/foto1.jpg" // 👈 coloca aquí tu imagen (la misma del ejemplo)
            alt="Emely López"
            width={400}
            height={400}
            className="rounded-2xl object-cover shadow-lg"
          />
        </div>

        {/* Texto */}
        <div className="md:w-1/2 space-y-5 text-justify">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre mí</h2>

          <p className="text-gray-200 leading-relaxed">
            ¡Hola! Soy <span className="font-semibold text-white">Emely</span>,
            futura abogada penalista de La Libertad, El Salvador. Estudio Ciencias
            Jurídicas en la Universidad José Matías Delgado y me apasiona el ámbito
            legal, especialmente el derecho penal. Me defino como una persona
            responsable, empática y comprometida con la justicia y la ética profesional.
          </p>

          <p className="text-gray-200 leading-relaxed">
            Cuento con habilidades en Excel, Python e inglés, que complemento con
            competencias blandas como la comunicación, el trabajo en equipo y la
            resolución de conflictos. Mis intereses académicos y laborales se
            enfocan en el ejercicio independiente del derecho y en integrar la
            tecnología al campo jurídico para brindar un servicio moderno y de
            calidad.
          </p>
        </div>
      </motion.div>
    </main>
  );
}
 