"use client"; 
import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { useRef } from "react";

export default function Portfolio() {
  const skills = [
    { nombre: "HTML & CSS" },
    { nombre: "JavaScript" },
    { nombre: "React / Next.js" },
    { nombre: "Python" },
    { nombre: "Inglés" },
    { nombre: "Comunicación efectiva" },
    { nombre: "Resolución de conflictos" },
    { nombre: "Trabajo en equipo" },
    { nombre: "Office (Word, Excel, PowerPoint)" }
  ];

  const projects = [
    {
      title: "Finacc",
      desc: "Sitio web que brinda educación financiera, desde cómo utilizar una tarjeta de crédito hasta cómo declarar tu renta.",
      img: "/fotos/Finacc.png",
      link: "https://finaccweb.vercel.app/",
      zoomOut: true,
    },
    {
      title: "Jambo",
      desc: "Sitio web que apoya a las personas con habilidades sin certificación a ofrecer sus servicios a quienes lo necesiten.",
      img: "/fotos/jambo.png",
      link: "https://github.com/javo-zy/JamboExpo.git",
      zoomOut: true,
    },
    {
      title: "OmniMax Calculator",
      desc: "Calculadora moderna desarrollada para apoyar en proyectos de programación y mejorar habilidades como programador.",
      img: "/fotos/omnicalc.png",
      link: "https://omnimax-calculator.vercel.app/",
      zoomOut: true,
    },
  ];

  const carouselRef = useRef(null);

  return (
    <main className="min-h-screen bg-[#2d3e36] text-white flex flex-col items-center">

      {/* ====== INICIO ====== */}
      <section className="min-h-screen flex items-center justify-center p-6 w-full">
        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-10">
          
          {/* IZQUIERDA */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-white tracking-wide">
                EMELY LÓPEZ
              </h1>
              <p className="text-lg italic text-gray-300 mt-1">Abogada Penalista</p>
            </div>

            <p className="text-gray-200 leading-relaxed">
             Con ética y dedicación, deseo marcar una diferencia y llevar justicia a quienes la necesitan.
            </p>

            {/* EMAIL */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=lopez.emelym0@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 font-semibold px-6 py-2 rounded-full w-fit shadow-lg hover:bg-gray-200 transition"
            >
              Contáctame
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/emely-lópez-0aa6b3368"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-400 hover:text-blue-500 mt-2"
            >
              <Linkedin className="w-5 h-5" />
              Emely López
            </a>
          </div>

          {/* DERECHA */}
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
      </section>

      {/* ====== SOBRE MÍ ====== */}
      <section className="w-full flex justify-center py-20 px-8 bg-white/5">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-10"
        >
          <div className="flex justify-center md:w-1/2">
            <Image
              src="/fotos/foto1.jpg"
              alt="Emely López"
              width={400}
              height={400}
              className="rounded-2xl object-cover shadow-lg"
            />
          </div>

          <div className="md:w-1/2 space-y-5 text-justify">
            <h2 className="text-4xl font-bold text-white mb-4">Sobre mí</h2>

            <p className="text-gray-200 leading-relaxed">
              ¡Hola! Soy <span className="font-semibold text-white">Emely</span>, futura abogada penalista de La Libertad, El Salvador. Pronto estudiaré Ciencias Jurídicas en la Universidad José Matías Delgado, y me apasiona profundamente el derecho penal.
            </p>

            <p className="text-gray-200 leading-relaxed">
              Me considero responsable, empática y comprometida con la justicia. Poseo habilidades en Excel, Python e inglés, además de comunicación, trabajo en equipo y resolución de conflictos. Me interesa ejercer de forma independiente e integrar tecnología al ámbito jurídico para ofrecer un servicio moderno y de calidad.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ====== EDUCACIÓN ====== */}
      <section className="w-full py-20 px-8 bg-white/5">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-6xl w-full mx-auto bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-10"
        >
          <h2 className="text-4xl font-bold text-center mb-10 text-white">
            Educación
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-gray-200">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">Formación académica</h3>
              <ul className="list-disc list-inside space-y-3">
                <li>
                  <strong>Complejo Educativo Sor Clara Quiroz</strong><br />
                  Bachillerato General | 2023–2024
                </li>
                <li>
                  <strong>Programa Empresarial ¡SUPÉRATE! C.S. Hilasal</strong><br />
                  Formación en inglés, informática y valores | 2023–2025
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">Cursos y Certificaciones</h3>
              <ul className="list-disc list-inside space-y-3">
                <li>
                  Derechos como consumidor – Defensoría del Consumidor<br />
                  <span className="text-sm text-gray-400">Expedición: octubre 2025</span>
                </li>
                <li>
                  Information Technology Specialist in Python – Certiport<br />
                  <span className="text-sm text-gray-400">Expedición: marzo 2025</span>
                </li>
                <li>
                  Excel Associate Microsoft 365 Apps – Certiport<br />
                  <span className="text-sm text-gray-400">Expedición: noviembre 2024</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">Voluntariados</h3>
              <ul className="list-disc list-inside space-y-3">
                <li>
                  <strong>Glasswing International El Salvador</strong><br />
                  Taller de inglés extracurricular | 2025
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ====== PROYECTOS ====== */}
      <section className="p-10 bg-[#2d3e36] w-full text-white">
        <div className="flex justify-between items-center mb-8">
          <span className="text-gray-300 text-sm">Desliza para ver más →</span>
        </div>

        <motion.div
          ref={carouselRef}
          className="flex space-x-10 overflow-x-auto scrollbar-hide pb-6"
          whileTap={{ cursor: "grabbing" }}
        >
          {projects.map((p, index) => (
            <motion.div
              key={index}
              className="min-w-[500px] bg-[#3b4a42] rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all"
              whileHover={{ scale: 1.03 }}
            >
              <div className="w-full h-[320px] relative mb-6 rounded-xl overflow-hidden bg-black/20 flex items-center justify-center">
                <div className={`relative w-full h-full ${p.zoomOut ? "scale-90 object-contain" : "scale-100 object-cover"} transition-transform duration-300`}>
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    className={`rounded-xl ${p.zoomOut ? "object-contain" : "object-cover"}`}
                  />
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
              <p className="text-gray-300 mb-5 leading-relaxed">{p.desc}</p>

              <a
                href={p.link}
                className="bg-[#6d4aff] hover:bg-[#5b3cd1] text-white py-2.5 px-6 rounded-full text-sm font-semibold transition-all"
              >
                Ver proyecto
              </a>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ====== HABILIDADES - ESTILO #4 ====== */}
      <section className="w-full py-20 px-8 bg-white/5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto w-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-10"
        >
          <h2 className="text-4xl font-bold text-white mb-10 text-center">
            Habilidades Técnicas & Blandas
          </h2>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 bg-[#3b4a42] p-4 rounded-xl shadow-md hover:bg-[#465850] transition"
              >
                <span className="text-green-400 text-lg">✔</span>
                <p className="text-white font-semibold">{skill.nombre}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </section>

    </main>
  );
}
