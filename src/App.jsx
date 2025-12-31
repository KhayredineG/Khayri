import React, { useEffect, useState } from 'react'
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'
import DataCloud from './components/DataCloud'
import './index.css'

function App() {
  const [loading, setLoading] = useState(true)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  const projects = [
    {
      title: "REV_WAVE",
      desc: "Retail Forecasting Engine",
      tech: "Python / SARIMA",
      link: "https://github.com/KhayredineG"
    },
    {
      title: "ONYX",
      desc: "Prompt Engineering Utilities",
      tech: "Next.js / TypeScript",
      link: "https://github.com/KhayredineG"
    },
    {
      title: "PDF_RAG",
      desc: "Contextual Retrieval",
      tech: "LLMs / RAG",
      link: "https://github.com/KhayredineG"
    }
  ];

  return (
    <div className="app">
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 1000,
              background: '#050505',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontSize: '0.8rem',
              letterSpacing: '5px',
              fontFamily: 'var(--font-heading)'
            }}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ duration: 1.5, ease: "circIn" }}
              style={{ height: '1px', background: '#fff' }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <DataCloud />

      <motion.div style={{ scaleX, position: 'fixed', top: 0, left: 0, right: 0, height: '2px', background: 'var(--accent-primary)', transformOrigin: '0%', zIndex: 100 }} />

      <nav style={{ position: 'fixed', top: 0, left: 0, width: '100%', padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 50, mixBlendMode: 'difference' }}>
        <div style={{ fontWeight: 700, letterSpacing: '-1px' }}>khayri.vercel.app</div>
        <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem' }}>
          <a href="mailto:khayredinegabsi@gmail.com" className="btn-text">CONTACT</a>
        </div>
      </nav>

      <motion.div
        className="container"
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <header>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 2.2 }}
          >
            <h1 className="hero-title">
              WELCOME.
            </h1>
            <p style={{ maxWidth: '500px', fontSize: '1.4rem', color: 'var(--text-muted)', fontWeight: 300, lineHeight: 1.4 }}>
              Mohamed Khayredine Gabsi<br />
              <span style={{ color: 'var(--accent-primary)' }}>Data Scientist & Engineer</span>
            </p>
          </motion.div>
        </header>

        <section>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="section-header"
          >
            01 // Selected Works
          </motion.div>

          <div className="project-list">
            {projects.map((p, i) => (
              <motion.a
                href={p.link}
                target="_blank"
                key={i}
                className="row-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ x: 20 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div>
                  <div className="row-title">{p.title}</div>
                  <div style={{ color: 'var(--text-muted)', marginTop: '0.5rem', fontWeight: 300 }}>{p.desc}</div>
                </div>
                <div className="row-meta">{p.tech}</div>
              </motion.a>
            ))}
          </div>
        </section>

        <section>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="section-header"
          >
            02 // Experience Log
          </motion.div>

          <div className="experience-list">
            {[
              { title: "Salakta", role: "Data Scientist", year: "2025 / Present" },
              { title: "Sibtel", role: "Cybersecurity", year: "2024" },
              { title: "CIN Group", role: "Data Analyst", year: "2023" }
            ].map((exp, i) => (
              <motion.div
                key={i}
                className="row-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ x: 20 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div>
                  <div className="row-title" style={{ fontSize: '1.5rem' }}>{exp.title}</div>
                  <div style={{ color: 'var(--text-muted)', fontWeight: 300 }}>{exp.role}</div>
                </div>
                <div className="row-meta">{exp.year}</div>
              </motion.div>
            ))}
          </div>
        </section>

        <footer style={{ padding: '8rem 0', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="section-header">03 // Connect</div>
          <motion.a
            href="mailto:khayredinegabsi@gmail.com"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 700, lineHeight: 1 }}
            whileHover={{ x: 20 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            khayredinegabsi<br />@gmail.com
          </motion.a>
          <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
            <a href="https://github.com/KhayredineG" className="btn-text">GITHUB</a>
            <a href="https://linkedin.com/in/khayredine-gabsi" className="btn-text">LINKEDIN</a>
            <a href="/Khayredine.pdf" className="btn-text">RESUME</a>
          </div>
        </footer>
      </motion.div>
    </div>
  )
}

export default App
