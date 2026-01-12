"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/contactme/ContactMe.module.css";
import toast, { Toaster } from "react-hot-toast";

import { FadeInOnScroll } from "../shared/fadeInonscroll";
import { SlideInFromLeft } from "../shared/slideInfromleft";
import { SlideInFromRight } from "../shared/slideInfromright";

import {
  FaInfoCircle,
  FaEnvelopeOpenText,
  FaPhoneAlt,
  FaWhatsapp,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

const ContactMe: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data?.error || "Error al enviar el mensaje.");
        return;
      }

      toast.success("Mensaje enviado correctamente ");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      toast.error("Error de conexión con el servidor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 4200,
          style: {
            fontFamily: "var(--font-rethink-sans)",
            fontWeight: 600,
            borderRadius: "12px",
            padding: "0.9rem 1.2rem",
            backdropFilter: "blur(6px)",
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
          },
          success: {
            style: {
              background: "linear-gradient(135deg, #114137, #1b5e50)",
              color: "#e5d8b8",
            },
            iconTheme: {
              primary: "#c7ae7d",
              secondary: "#114137",
            },
          },
          error: {
            style: {
              background: "linear-gradient(135deg, #7a1f1f, #a83232)",
              color: "#fff0f0",
            },
            iconTheme: {
              primary: "#ffd4d4",
              secondary: "#7a1f1f",
            },
          },
        }}
      />

      <FadeInOnScroll>
        <div className={styles.badgeWrapper}>
          <div className={styles.badge}>@ Contacto</div>
        </div>

        <p className={styles.subHeading}>
          Responderemos tu consulta lo antes posible.
        </p>
      </FadeInOnScroll>

      <div className={styles.contactWrapper}>
        {/* INFO */}
        <SlideInFromLeft delay={0.1}>
          <div className={styles.contactInfo}>
            <h3 className={styles.cardTitle}>
              <FaInfoCircle /> Información de Contacto
            </h3>

            <h4 className={styles.infoTitle}>
              <FaMapMarkerAlt /> Dirección
            </h4>
            <p>Rivadavia 287 (e)</p>
            <p>Ciudad de San Juan, Argentina</p>

            <h4 className={styles.infoTitle}>
              <FaPhoneAlt /> Teléfonos
            </h4>
            <p>
              <FaWhatsapp /> 264-417-1075
            </p>

            <h4 className={styles.infoTitle}>
              <FaEnvelope /> Correo
            </h4>
            <p>paulamartinezcontadora@gmail.com</p>
          </div>
        </SlideInFromLeft>

        <SlideInFromRight delay={0.15}>
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <h3 className={styles.cardTitle}>
              <FaEnvelopeOpenText /> Envíanos un mensaje
            </h3>

            <input
              type="text"
              name="name"
              placeholder="Tu Nombre"
              value={formData.name}
              onChange={handleChange}
              className={styles.inputField}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Tu Correo"
              value={formData.email}
              onChange={handleChange}
              className={styles.inputField}
              required
            />

            <textarea
              name="message"
              placeholder="Tu Mensaje"
              value={formData.message}
              onChange={handleChange}
              className={styles.textAreaField}
              required
            />

            <button
              type="submit"
              className={styles.submitButton}
              disabled={loading}
            >
              {loading ? "Enviando..." : "Enviar Mensaje"}
            </button>
          </form>
        </SlideInFromRight>
      </div>

      <FadeInOnScroll delay={0.3}>
        <div className={styles.socialCardWrapper}>
          <div className={styles.socialCard}>
            <h3 className={styles.cardTitle}>Seguinos en nuestras redes</h3>

            <p>Mantenete informado con nuestras novedades.</p>

            <div className={styles.socialButtons}>
              <a
                href="https://www.instagram.com/paulamartinez609"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialButton} ${styles.instagramButton}`}
              >
                <FaInstagram /> Instagram
              </a>
            </div>

            <div className={styles.bottomImageWrapper}>
              <Image
                src="/icons/LogoB2.png"
                alt="Decoración"
                width={180}
                height={160}
                className={styles.bottomImage}
              />
            </div>
          </div>
        </div>
      </FadeInOnScroll>
    </section>
  );
};

export default ContactMe;
