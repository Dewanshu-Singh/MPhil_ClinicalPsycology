import React from 'react'
import { GraduationCap } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section style={{ 
      position: 'relative',
      minHeight: '90vh',
      display: 'flex',
      alignItems: 'center',
      padding: '40px 0'
    }}>
      {/* Background Image with Dark Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url("/bg1.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: -2
      }} />
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(to right, rgba(15, 23, 42, 0.75) 0%, rgba(15, 23, 42, 0.1) 100%)', 
        zIndex: -1
      }} />

      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '48px', width: '100%' }}>
        
        {/* Left Side: Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ flex: '1 1 500px', maxWidth: '750px' }}
        >
          {/* Badge */}
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            padding: '8px 16px',
            borderRadius: '24px',
            color: 'white',
            marginBottom: '24px',
            backdropFilter: 'blur(10px)'
          }}>
            <GraduationCap size={18} color="var(--primary-color)" />
            <span style={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '1px' }}>REHABILITATION COUNCIL OF INDIA APPROVED</span>
          </div>

          <h1 style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: 'clamp(3rem, 5vw, 4.5rem)', 
            color: '#ffffff',
            fontWeight: 600,
            lineHeight: 1.1,
            marginBottom: '24px'
          }}>
            M.Phil in <span style={{ color: 'var(--primary-color)', fontStyle: 'italic' }}>Clinical Psychology</span>
          </h1>
          
          {/* Subheading */}
          <p style={{ 
            color: 'var(--hero-muted)', 
            fontSize: '1.15rem', 
            lineHeight: 1.6, 
            marginBottom: '40px',
            fontWeight: 400
          }}>
            A two-year, full-time clinical training program at Suresh Gyan Vihar University, Jaipur — shaping licensed Clinical Psychologists through supervised practice, evidence-based therapy and research.
          </p>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button style={{
              backgroundColor: 'transparent',
              color: 'white',
              border: '1px solid rgba(255,255,255,0.6)',
              padding: '14px 28px',
              borderRadius: '24px',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}>
              Explore the Program
            </button>
          </div>

          {/* Bottom Stats Bar */}
          <div style={{
            marginTop: '80px',
            backgroundColor: 'rgba(30, 41, 59, 0.6)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '12px',
            display: 'flex',
            flexWrap: 'wrap',
            overflow: 'hidden'
          }}>
            {[
              { value: '2 Years', label: 'FULL-TIME PROGRAM' },
              { value: 'Running Since', label: '2022' },
              { value: '3', label: 'PASSED OUT BATCHES' },
              { value: 'RCI', label: 'APPROVED' }
            ].map((stat, idx) => (
              <div key={idx} style={{
                flex: 1,
                padding: '24px',
                borderRight: idx !== 3 ? '1px solid rgba(255,255,255,0.1)' : 'none'
              }}>
                <div style={{ 
                  fontFamily: 'var(--font-serif)', 
                  fontSize: '1.5rem', 
                  fontWeight: 600, 
                  color: 'white', 
                  marginBottom: '4px' 
                }}>
                  {stat.value}
                </div>
                <div style={{ 
                  fontSize: '0.7rem', 
                  color: 'var(--hero-muted)', 
                  letterSpacing: '1px', 
                  fontWeight: 600 
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column - Admission Form */}
        <div id="apply-form" className="admission-form-wrapper" style={{ 
          flex: '1 1 350px',
          maxWidth: '450px',
          backgroundColor: 'white',
          borderRadius: '24px',
          padding: '40px 32px',
          boxShadow: '0 24px 48px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ 
            color: '#0f172a', 
            fontSize: '2rem', 
            fontWeight: 700, 
            marginBottom: '8px',
            fontFamily: 'var(--font-serif)'
          }}>
            Apply Now
          </h3>
          <p style={{ color: 'var(--primary-color)', fontSize: '1.05rem', fontWeight: 600, marginBottom: '24px', letterSpacing: '0.5px' }}>
            for M.Phil Clinical Psychology
          </p>
          
          <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }} onSubmit={(e) => { e.preventDefault(); alert('Enquiry Submitted!'); }}>
            <div>
              <input 
                type="text" 
                placeholder="Full Name*" 
                required
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  backgroundColor: '#f9fafb',
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  color: '#1f2937',
                  outline: 'none',
                  fontSize: '0.95rem'
                }}
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Email Address*" 
                required
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  backgroundColor: '#f9fafb',
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  color: '#1f2937',
                  outline: 'none',
                  fontSize: '0.95rem'
                }}
              />
            </div>
            <div>
              <input 
                type="tel" 
                placeholder="Phone Number*" 
                required
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  backgroundColor: '#f9fafb',
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  color: '#1f2937',
                  outline: 'none',
                  fontSize: '0.95rem'
                }}
              />
            </div>
            <div>
              <select 
                required
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  backgroundColor: '#f9fafb',
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  color: '#1f2937',
                  outline: 'none',
                  fontSize: '0.95rem'
                }}
              >
                <option value="" disabled selected hidden>Select Specialization</option>
                <option value="mphil">M.Phil Clinical Psychology</option>
                <option value="other">Other Healthcare Programs</option>
              </select>
            </div>
            <button type="submit" style={{
              backgroundColor: 'var(--primary-color)',
              color: 'white',
              border: 'none',
              padding: '16px',
              borderRadius: '12px',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              marginTop: '8px',
              boxShadow: '0 4px 14px var(--primary-glow)',
              transition: 'transform 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Submit Application
            </button>
          </form>
        </div>

      </div>
    </section>
  )
}

export default Hero
