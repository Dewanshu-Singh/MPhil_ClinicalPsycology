import React from 'react'
import { Award, Scale, Building2, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'

const RCIAdvantage = () => {
  return (
    <section id="advantage" style={{ 
      backgroundColor: '#0f172a', 
      padding: '100px 0',
      color: 'white',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Top Area: Heading & Description */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '48px',
          marginBottom: '64px'
        }}>
          <div style={{ flex: '1 1 500px' }}>
            <div style={{ 
              color: 'var(--primary-color)', 
              fontSize: '0.75rem', 
              fontWeight: 700, 
              letterSpacing: '2px', 
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}>
              The RCI Advantage
            </div>
            <h2 style={{ 
              fontFamily: 'var(--font-serif)', 
              fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', 
              fontWeight: 500,
              color: 'white', 
              lineHeight: 1.1
            }}>
              RCI Approved.<br/>
              <span style={{ color: 'var(--primary-color)', fontStyle: 'italic' }}>Nationally recognised.</span>
            </h2>
          </div>
          
          <div style={{ flex: '1 1 400px', paddingTop: '12px' }}>
            <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '500px' }}>
              Since 2020, the Department of Clinical Psychology at SGVU has run this program under RCI norms — two batches graduated, two ongoing. This is not just a degree; it is your pathway to becoming a licensed mental health professional.
            </p>
          </div>
        </motion.div>

        {/* Middle Area: 3 Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '48px' }}>
          
          {/* Card 1 */}
          <motion.div 
            className="mobile-stack-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ 
              y: -8, 
              boxShadow: '0 20px 40px rgba(37,99,235,0.15)',
              borderColor: 'var(--primary-color)'
            }}
            style={{ 
            border: '1px solid rgba(255,255,255,0.1)', 
            borderRadius: '16px', 
            padding: '40px 32px',
            backgroundColor: 'rgba(255,255,255,0.02)',
            cursor: 'pointer',
            transition: 'border-color 0.3s'
          }}>
            <Award size={32} color="var(--primary-color)" style={{ marginBottom: '24px' }} />
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 500, marginBottom: '16px', color: 'white' }}>
              National-Level Recognition
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6 }}>
              The program strictly follows Rehabilitation Council of India guidelines for clinical hours, supervision and professional competency.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            className="mobile-stack-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ 
              y: -8, 
              boxShadow: '0 20px 40px rgba(37,99,235,0.15)',
              borderColor: 'var(--primary-color)'
            }}
            style={{ 
            border: '1px solid rgba(255,255,255,0.1)', 
            borderRadius: '16px', 
            padding: '40px 32px',
            backgroundColor: 'rgba(255,255,255,0.02)',
            cursor: 'pointer',
            transition: 'border-color 0.3s'
          }}>
            <Scale size={32} color="var(--primary-color)" style={{ marginBottom: '24px' }} />
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 500, marginBottom: '16px', color: 'white' }}>
              License to Practice
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Graduates become eligible for RCI registration as a Clinical Psychologist — the legal requirement to practice independently in India.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            className="mobile-stack-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ 
              y: -8, 
              boxShadow: '0 20px 40px rgba(37,99,235,0.15)',
              borderColor: 'var(--primary-color)'
            }}
            style={{ 
            border: '1px solid rgba(255,255,255,0.1)', 
            borderRadius: '16px', 
            padding: '40px 32px',
            backgroundColor: 'rgba(255,255,255,0.02)',
            cursor: 'pointer',
            transition: 'border-color 0.3s'
          }}>
            <Building2 size={32} color="var(--primary-color)" style={{ marginBottom: '24px' }} />
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 500, marginBottom: '16px', color: 'white' }}>
              Ethical, Structured Training
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Quality, ethical practice and supervised casework are built into every semester, as mandated by RCI training standards.
            </p>
          </motion.div>
        </div>

        {/* Bottom Quote Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          style={{
          backgroundColor: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.05)',
          borderRadius: '16px',
          padding: '24px 32px',
          display: 'flex',
          alignItems: 'center',
          gap: '24px'
        }}>
          <ShieldCheck size={32} color="var(--primary-color)" style={{ flexShrink: 0 }} />
          <p style={{ 
            fontFamily: 'var(--font-serif)', 
            fontStyle: 'italic', 
            fontSize: '1.25rem', 
            color: 'white', 
            margin: 0,
            lineHeight: 1.5
          }}>
            "All programs strictly follow RCI guidelines — ensuring quality, ethical practice and national-level recognition."
          </p>
        </motion.div>

      </div>
    </section>
  )
}

export default RCIAdvantage
