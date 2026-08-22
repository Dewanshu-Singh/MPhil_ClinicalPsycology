import React from 'react'
import { motion } from 'framer-motion'
import { 
  Stethoscope, 
  Brain, 
  Activity, 
  Users, 
  HeartHandshake, 
  Scale, 
  GraduationCap, 
  Microscope, 
  Landmark, 
  Briefcase, 
  Building2, 
  Home 
} from 'lucide-react'

const careers = [
  { name: "Clinical Psychologist", icon: <Stethoscope size={20} color="var(--primary-color)" /> },
  { name: "Psychotherapist / Counselor", icon: <Brain size={20} color="var(--primary-color)" /> },
  { name: "Neuropsychologist", icon: <Activity size={20} color="var(--primary-color)" /> },
  { name: "Child & Adolescent Psychologist", icon: <Users size={20} color="var(--primary-color)" /> },
  { name: "De-Addiction / Rehab Specialist", icon: <HeartHandshake size={20} color="var(--primary-color)" /> },
  { name: "Forensic Psychologist", icon: <Scale size={20} color="var(--primary-color)" /> },
  { name: "University Professor / Lecturer", icon: <GraduationCap size={20} color="var(--primary-color)" /> },
  { name: "Researcher / Ph.D. Scholar", icon: <Microscope size={20} color="var(--primary-color)" /> },
  { name: "Govt (NIMHANS / IHBAS / Hospitals)", icon: <Landmark size={20} color="var(--primary-color)" /> },
  { name: "Corporate Wellness / EAP", icon: <Briefcase size={20} color="var(--primary-color)" /> },
  { name: "Health / Organizational Psychologist", icon: <Building2 size={20} color="var(--primary-color)" /> },
  { name: "Private Practice / NGO", icon: <Home size={20} color="var(--primary-color)" /> }
]

const CareerOpportunities = () => {
  return (
    <section id="careers" style={{ 
      backgroundColor: '#0f172a', /* Deep navy blue matching RCIAdvantage */
      padding: '100px 0',
      color: 'white',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Top Area: Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '64px', textAlign: 'center' }}
        >
          <div style={{ 
            color: 'var(--primary-color)', 
            fontSize: '0.75rem', 
            fontWeight: 700, 
            letterSpacing: '2px', 
            textTransform: 'uppercase',
            marginBottom: '16px'
          }}>
            Life After M.Phil
          </div>
          <h2 style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', 
            fontWeight: 500,
            color: 'white',
            lineHeight: 1.2
          }}>
            Career <span style={{ color: 'var(--primary-color)', fontStyle: 'italic' }}>Opportunities</span>
          </h2>
          <p style={{ 
            color: '#a7b8af', 
            fontSize: '1.05rem', 
            lineHeight: 1.7, 
            maxWidth: '700px', 
            margin: '0 auto',
            marginTop: '24px'
          }}>
            M.Phil Clinical Psychology graduates are in high demand across hospitals, mental health clinics, rehabilitation centers, and academic institutions.
          </p>
        </motion.div>

        {/* Grid of Cards */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '20px' 
        }}>
          {careers.map((career, index) => (
            <motion.div 
              key={index}
              className="mobile-stack-card"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -6, boxShadow: '0 15px 30px rgba(0,0,0,0.2)' }}
              style={{
                backgroundColor: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '24px 32px',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'
                e.currentTarget.style.borderColor = 'var(--primary-color)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
              }}
            >
              {/* Icon Container */}
              <div style={{ 
                backgroundColor: 'rgba(37,99,235,0.1)', 
                borderRadius: '10px', 
                padding: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                {career.icon}
              </div>
              
              {/* Text */}
              <span style={{ 
                color: 'white', 
                fontWeight: 600, 
                fontSize: '0.95rem',
                fontFamily: 'var(--font-sans)',
                lineHeight: 1.4
              }}>
                {career.name}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default CareerOpportunities
