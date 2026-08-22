import React from 'react'
import { Eye, Target } from 'lucide-react'
import { motion } from 'framer-motion'

const Overview = () => {
  return (
    <section id="overview" style={{ 
      backgroundColor: '#fbf9f6', 
      padding: '100px 0',
      color: '#1f2937',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ 
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '64px' }}>
          
          {/* Left Column */}
          <div style={{ flex: '1 1 500px' }}>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <div style={{ 
                color: 'var(--primary-color)', 
                fontSize: '0.75rem', 
                fontWeight: 700, 
                letterSpacing: '2px', 
                textTransform: 'uppercase',
                marginBottom: '16px'
              }}>
                Program Overview
              </div>
              
              <h2 style={{ 
                fontFamily: 'var(--font-serif)', 
                fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', 
                fontWeight: 500,
                color: '#0f172a', /* Changed to Navy Blue */
                lineHeight: 1.2,
                marginBottom: '32px'
              }}>
                Training the mind to <span style={{ color: 'var(--primary-color)', fontStyle: 'italic' }}>heal minds</span>
              </h2>
              
              <p style={{ color: '#4b5563', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '24px' }}>
                The M.Phil in Clinical Psychology at Suresh Gyan Vihar University is a Rehabilitation Council of India (RCI) approved professional program designed to train students in the assessment, diagnosis and treatment of mental health disorders. Running successfully since 2020, it is a 70% experiential, training-based course that integrates theory with intensive clinical practice.
              </p>
              
              <p style={{ color: '#4b5563', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '48px' }}>
                Students gain hands-on experience through supervised clinical postings, case discussions, psychological testing and research work — graduating with the competencies required for licensure and registration as a Clinical Psychologist with the RCI.
              </p>
            </motion.div>

            {/* Cards */}
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              {/* Vision Card */}
              <motion.div 
                className="mobile-stack-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -8, boxShadow: '0 12px 30px rgba(0,0,0,0.08)' }}
                style={{ 
                flex: 1, 
                minWidth: '200px',
                backgroundColor: 'white', 
                padding: '32px 24px', 
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                cursor: 'pointer'
              }}>
                <Eye size={28} color="var(--primary-color)" style={{ marginBottom: '20px' }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '12px', color: '#0f172a' }}>Vision</h3>
                <p style={{ color: '#4b5563', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  To create competent, ethical clinical psychologists, promote mental health awareness and build a foundation of empathy and professionalism.
                </p>
              </motion.div>

              {/* Mission Card */}
              <motion.div 
                className="mobile-stack-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ y: -8, boxShadow: '0 12px 30px rgba(0,0,0,0.08)' }}
                style={{ 
                flex: 1, 
                minWidth: '200px',
                backgroundColor: 'white', 
                padding: '32px 24px', 
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                cursor: 'pointer'
              }}>
                <Target size={28} color="var(--primary-color)" style={{ marginBottom: '20px' }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '12px', color: '#0f172a' }}>Mission</h3>
                <p style={{ color: '#4b5563', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  RCI-based clinical training with real exposure, supervised practical work, research through dissertation, and contribution to community mental health.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}
          >
            <img 
              src="/DSC00693.jpg" 
              alt="Students studying" 
              style={{ 
                width: '100%', 
                height: 'auto', 
                objectFit: 'cover', 
                borderRadius: '24px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
              }} 
            />
            

          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Overview
