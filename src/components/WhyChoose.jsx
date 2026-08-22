import React from 'react'
import { 
  FileBadge, 
  Users, 
  BrainCircuit, 
  FileText, 
  HeartHandshake, 
  Activity, 
  Briefcase 
} from 'lucide-react'
import { motion } from 'framer-motion'

const reasons = [
  {
    icon: <FileBadge size={28} color="var(--primary-color)" />,
    title: "RCI-Based Structured Training",
    description: "Proper clinical hours, supervised training and competency required to practice as a clinical psychologist."
  },
  {
    icon: <Users size={28} color="var(--primary-color)" />,
    title: "Learning with Real Clients",
    description: "Interact with real cases, conduct assessments and observe therapy sessions."
  },
  {
    icon: <BrainCircuit size={28} color="var(--primary-color)" />,
    title: "Therapy Skill Development",
    description: "CBT, counselling skills, case formulation and emotional understanding."
  },
  {
    icon: <FileText size={28} color="var(--primary-color)" />,
    title: "Dissertation & Research",
    description: "Every student completes a dissertation — research thinking applied in practice."
  },
  {
    icon: <HeartHandshake size={28} color="var(--primary-color)" />,
    title: "Close Supervision",
    description: "Small batch size means personal attention, detailed feedback and support."
  },
  {
    icon: <Activity size={28} color="var(--primary-color)" />,
    title: "Emotional & Professional Growth",
    description: "Learn to manage your own emotions, biases and responses as a therapist."
  },
  {
    icon: <Briefcase size={28} color="var(--primary-color)" />,
    title: "Career-Oriented Training",
    description: "Prepared for hospitals, clinics, academic roles and independent practice."
  }
]

const WhyChoose = () => {
  return (
    <section style={{ 
      backgroundColor: '#fbf9f6', 
      padding: '100px 0',
      color: '#1f2937'
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Top Area: Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '64px' }}
        >
          <div style={{ 
            color: 'var(--primary-color)', 
            fontSize: '0.75rem', 
            fontWeight: 700, 
            letterSpacing: '2px', 
            textTransform: 'uppercase',
            marginBottom: '16px'
          }}>
            Why Choose This Program
          </div>
          <h2 style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', 
            fontWeight: 500,
            color: '#0f172a',
            lineHeight: 1.2
          }}>
            Seven reasons students choose <span style={{ color: 'var(--primary-color)', fontStyle: 'italic' }}>SGVU</span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '24px' 
        }}>
          {reasons.map((reason, index) => (
            <motion.div 
              key={index} 
              className="mobile-stack-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -8, 
                boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                transition: { duration: 0.2 }
              }}
              style={{ 
                backgroundColor: 'white', 
                padding: '40px 32px', 
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                /* Make the 7th card span 2 columns on larger screens if it's the last one */
                gridColumn: index === 6 ? '1 / -1' : 'auto',
                /* Ensure it looks good if it spans full width by restricting max width or changing layout slightly */
              }}
            >
              <div style={{ marginBottom: '24px' }}>
                {reason.icon}
              </div>
              <h3 style={{ 
                fontFamily: 'var(--font-serif)', 
                fontSize: '1.4rem', 
                fontWeight: 500, 
                marginBottom: '16px', 
                color: '#0f172a' 
              }}>
                {reason.title}
              </h3>
              <p style={{ 
                color: '#4b5563', 
                fontSize: '0.95rem', 
                lineHeight: 1.6,
                margin: 0
              }}>
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default WhyChoose
