import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'

const curriculumItems = [
  "Psychopathology (Adult & Child)",
  "Psychological Assessment & Testing",
  "Psychotherapy — CBT, Behavior Therapy & more",
  "Clinical Neuropsychology",
  "Counseling Skills",
  "Case History & Mental Status Examination (MSE)",
  "Research Methodology & Biostatistics",
  "Clinical Case Work & Supervision",
  "Dissertation Research",
  "Community Mental Health Exposure"
]

const Curriculum = () => {
  return (
    <section id="curriculum" style={{ 
      backgroundColor: '#fbf9f6', 
      padding: '100px 0',
      color: '#1f2937'
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '64px',
          alignItems: 'center'
        }}>
          
          {/* Left Column - Placeholder Image */}
          <div style={{ flex: '1 1 400px' }}>
            <img 
              src="/DSC04842.jpg" 
              alt="Clinical Training" 
              style={{
                width: '100%',
                height: 'auto',
                aspectRatio: '4/5',
                objectFit: 'cover',
                borderRadius: '24px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
              }}
            />
          </div>

          {/* Right Column - Text Content */}
          <div style={{ flex: '1 1 500px' }}>
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
                Rigorous Training
              </div>
              <h2 style={{ 
                fontFamily: 'var(--font-serif)', 
                fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', 
                fontWeight: 500,
                color: '#0f172a',
                lineHeight: 1.2
              }}>
                Curriculum <span style={{ color: 'var(--primary-color)', fontStyle: 'italic' }}>Highlights</span>
              </h2>
            </motion.div>
            
            <p style={{ color: '#4b5563', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '48px' }}>
              The RCI-prescribed syllabus blends psychological theory with supervised, hands-on clinical work across hospitals, OPD services and community settings.
            </p>

            {/* List Grid */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
                gap: '0 32px' 
              }}
            >
              {curriculumItems.map((item, index) => (
                <div key={index} style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  gap: '12px',
                  padding: '20px 0',
                  borderBottom: '1px solid rgba(0,0,0,0.05)'
                }}>
                  <CheckCircle2 size={20} color="var(--primary-color)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ color: '#1a3629', fontWeight: 500, lineHeight: 1.5 }}>
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Curriculum
