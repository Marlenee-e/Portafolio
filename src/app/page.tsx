"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { useRef } from "react";

export default function Portfolio() {
  const skills = [
    { nombre: "HTML & CSS", nivel: 90 },
    { nombre: "JavaScript", nivel: 85 },
    { nombre: "React / Next.js", nivel: 75 },
    { nombre: "Python", nivel: 70 },
    { nombre: "Inglés", nivel: 85 },
  ];

  const projects = [
    {
      title: "Book",
      desc: "Sitio web donde puedes comprar o vender libros reutilizados, ideal para los amantes de la lectura en físico.",
      img: "/foto/book.png",
      link: "#",
      zoomOut: true,
    },
    {
      title: "Finacc",
      desc: "Sitio web que brinda educación financiera, desde cómo utilizar una tarjeta de crédito hasta cómo declarar tu renta.",
      img: "/foto/finacc.png",
      link: "#",
      zoomOut: true,
    },
    {
      title: "Jambo",
      desc: "Sitio web que apoya a las personas con habilidades sin certificación a ofrecer sus servicios a quienes lo necesiten.",
      img: "/foto/jambo.png",
      link: "#",
      zoomOut: true,
    },
    {
      title: "OmniMax Calculator",
      desc: "Calculadora moderna desarrollada para apoyar en proyectos de programación y mejorar habilidades como programador.",
      img: "/foto/omnicalc.png",
      link: "#",
      zoomOut: true,
    },
  ];

  const carouselRef = useRef(null);

  return (
    <main className="min-h-screen bg-[#2d3e36] text-white flex flex-col items-center">
      {/* ====== INICIO ====== */}
      <section className="min-h-screen flex items-center justify-center p-6 w-full">
        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-10">
          {/* Sección izquierda */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-white tracking-wide">
                EMELY LÓPEZ
              </h1>
              <p className="text-lg italic text-gray-300 mt-1">
                Abogada Penalista
              </p>
            </div>

            <p className="text-gray-200 leading-relaxed">
              Con ética y dedicación, deseo marcar una diferencia y llevar
              justicia a quienes la necesitan.
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
              ¡Hola! Soy{" "}
              <span className="font-semibold text-white">Emely</span>, futura
              abogada penalista de La Libertad, El Salvador. Estudio Ciencias
              Jurídicas en la Universidad José Matías Delgado y me apasiona el
              ámbito legal, especialmente el derecho penal.
            </p>

            <p className="text-gray-200 leading-relaxed">
              Me considero una persona responsable, empática y comprometida con
              la justicia y la ética profesional. Cuento con habilidades en
              Excel, Python e inglés, que complemento con competencias blandas
              como la comunicación, el trabajo en equipo y la resolución de
              conflictos.
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
            {/* Formación Académica */}
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                Formación académica
              </h3>
              <ul className="list-disc list-inside space-y-3">
                <li>
                  <strong>Complejo Educativo Sor Clara Quiroz</strong>
                  <br />
                  Bachillerato General | 2023–2024
                </li>
                <li>
                  <strong>Programa Empresarial ¡SUPÉRATE! C.S. Hilasal</strong>
                  <br />
                  Formación en inglés, informática y valores | 2023–2025
                </li>
              </ul>
            </div>

            {/* Cursos y Certificaciones */}
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                Cursos y Certificaciones
              </h3>
              <ul className="list-disc list-inside space-y-3">
                <li>
                  Derechos como consumidor – Defensoría del Consumidor
                  <br />
                  <span className="text-sm text-gray-400">
                    Expedición: octubre 2025
                  </span>
                </li>
                <li>
                  Information Technology Specialist in Python – Certiport
                  <br />
                  <span className="text-sm text-gray-400">
                    Expedición: marzo 2025
                  </span>
                </li>
                <li>
                  Excel Associate Microsoft 365 Apps – Certiport
                  <br />
                  <span className="text-sm text-gray-400">
                    Expedición: noviembre 2024
                  </span>
                </li>
              </ul>
            </div>

            {/* Voluntariados */}
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                Voluntariados
              </h3>
              <ul className="list-disc list-inside space-y-3">
                <li>
                  <strong>Glasswing International El Salvador</strong>
                  <br />
                  Taller de inglés extracurricular | 2025
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

   {/* ====== PROYECTOS (CARRUSEL) ====== */}
<section className="p-10 bg-[#2d3e36] w-full text-white">
  <div className="flex justify-between items-center mb-8">
    <span className="text-gray-300 text-sm">
      Desliza para ver más →
    </span>
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
              {/* Imagen */}
              <div className="w-full h-[320px] relative mb-6 rounded-xl overflow-hidden flex items-center justify-center bg-black/20">
                <div
                  className={`relative w-full h-full ${
                    p.zoomOut ? "scale-90 object-contain" : "scale-100 object-cover"
                  } transition-transform duration-300`}
                >
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    className={`rounded-xl ${
                      p.zoomOut ? "object-contain" : "object-cover"
                    }`}
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                </div>
              </div>

              {/* Texto */}
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

      {/* ====== HABILIDADES ====== */}
      <section className="w-full py-20 px-8 bg-white/5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl w-full mx-auto bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-10"
        >
          <h2 className="text-4xl font-bold text-white mb-8 text-center">
            Habilidades Técnicas
          </h2>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index}>
                <p className="mb-2 text-gray-200">{skill.nombre}</p>
                <div className="w-full bg-white/20 h-3 rounded-full">
                  <div
                    className="bg-green-400 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${skill.nivel}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}
