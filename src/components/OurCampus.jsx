import React from 'react'
import { motion } from 'framer-motion'

const images = [
  {
    src: "/IMG-20260822-WA0039.jpg.jpeg",
    alt: "University Campus",
    gridArea: "1 / 1 / 3 / 3" // Large left square
  },
  {
    src: "/IMG-20260822-WA0045.jpg.jpeg",
    alt: "Campus Facilities",
    gridArea: "1 / 3 / 2 / 4" // Top middle square
  },
  {
    src: "/WhatsApp Image 2026-08-22 at 14.02.10.jpeg",
    alt: "Student Life",
    gridArea: "1 / 4 / 2 / 5" // Top right square
  },
  {
    src: "/WhatsApp Image 2026-08-22 at 14.02.13.jpeg",
    alt: "Academic Block",
    gridArea: "2 / 3 / 3 / 4" // Bottom middle square
  },
  {
    src: "/WhatsApp Image 2026-08-22 at 14.02.14.jpeg",
    alt: "Events",
    gridArea: "2 / 4 / 3 / 5" // Bottom right square
  }
]

const OurCampus = () => {
  return (
    <section id="campus" style={{ 
      backgroundColor: '#ffffff', 
      padding: '100px 0',
      color: '#1f2937'
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <div style={{ 
            color: 'var(--primary-color)', 
            fontSize: '0.75rem', 
            fontWeight: 700, 
            letterSpacing: '2px', 
            textTransform: 'uppercase',
            marginBottom: '16px'
          }}>
            Our Campus
          </div>
          <h2 style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', 
            fontWeight: 500,
            color: '#0f172a',
            lineHeight: 1.2,
            marginBottom: '24px'
          }}>
            Experience Life at <span style={{ color: 'var(--primary-color)', fontStyle: 'italic' }}>SGVU</span>
          </h2>
          <p style={{ 
            color: '#4b5563', 
            fontSize: '1.05rem', 
            lineHeight: 1.7, 
            maxWidth: '700px', 
            margin: '0 auto' 
          }}>
            A vibrant, state-of-the-art campus designed to foster academic excellence, clinical practice, and holistic development.
          </p>
        </motion.div>

        {/* CSS Grid Gallery */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridTemplateRows: 'repeat(2, 300px)',
          gap: '16px',
        }}>
          {images.map((img, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                gridArea: img.gridArea,
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                position: 'relative'
              }}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />

            </motion.div>
          ))}
        </div>

      </div>
      
      {/* Mobile-friendly overrides (inline style hack for simple grid) */}
      <style>{`
        @media (max-width: 768px) {
          #campus .container > div:last-child {
            grid-template-columns: 1fr !important;
            grid-template-rows: auto !important;
          }
          #campus .container > div:last-child > div {
            grid-area: auto !important;
            height: 250px;
          }
        }
      `}</style>
    </section>
  )
}

export default OurCampus
