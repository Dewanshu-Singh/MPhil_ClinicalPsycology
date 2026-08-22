import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ 
      backgroundColor: 'rgba(251, 249, 246, 0.95)', 
      backdropFilter: 'blur(10px)',
      padding: '0 24px', 
      height: '80px',
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      borderBottom: '1px solid rgba(0,0,0,0.05)',
      position: 'sticky',
      top: 0,
      zIndex: 50
    }}>
      <div className="navbar-logos" style={{ display: 'flex', alignItems: 'center', gap: '16px', height: '100%' }}>
        <img 
          src="/logo2.png" 
          alt="Suresh Gyan Vihar University Logo" 
          style={{ 
            height: '100px', 
            objectFit: 'contain',
            filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))'
          }} 
        />
        <img 
          src="/naac.png" 
          alt="NAAC Logo" 
          style={{ height: '40px', objectFit: 'contain' }} 
        />
        <img 
          src="/nirf.png" 
          alt="NIRF Logo" 
          style={{ height: '40px', objectFit: 'contain' }} 
        />
      </div>
      
      {/* Desktop Links */}
      <div className="desktop-links" style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
        <a href="#overview" style={{ textDecoration: 'none', color: '#4b5563', fontSize: '0.95rem', fontWeight: 500 }}>Overview</a>
        <a href="#advantage" style={{ textDecoration: 'none', color: '#4b5563', fontSize: '0.95rem', fontWeight: 500 }}>Why SGVU</a>
        <a href="#admission" style={{ textDecoration: 'none', color: '#4b5563', fontSize: '0.95rem', fontWeight: 500 }}>Admission</a>
        <a href="#curriculum" style={{ textDecoration: 'none', color: '#4b5563', fontSize: '0.95rem', fontWeight: 500 }}>Curriculum</a>
        <a href="#careers" style={{ textDecoration: 'none', color: '#4b5563', fontSize: '0.95rem', fontWeight: 500 }}>Careers</a>
        <a href="#campus" style={{ textDecoration: 'none', color: '#4b5563', fontSize: '0.95rem', fontWeight: 500 }}>Campus</a>
        <a href="#faq" style={{ textDecoration: 'none', color: '#4b5563', fontSize: '0.95rem', fontWeight: 500 }}>FAQ</a>
      </div>

      {/* Desktop CTA */}
      <div className="desktop-links">
        <motion.button 
          onClick={() => {
            document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' });
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ 
          backgroundColor: 'var(--primary-color)', 
          color: 'white', 
          border: 'none', 
          padding: '12px 24px', 
          borderRadius: '24px', 
          fontWeight: 600,
          cursor: 'pointer',
          fontSize: '0.95rem'
        }}>
          Apply Now
        </motion.button>
      </div>

      {/* Mobile Toggle */}
      <div className="mobile-menu-toggle" style={{ display: 'none' }}>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#0f172a' }}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              backgroundColor: '#ffffff',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
              borderBottom: '1px solid rgba(0,0,0,0.05)'
            }}
          >
            <a href="#overview" onClick={() => setIsMobileMenuOpen(false)} style={{ textDecoration: 'none', color: '#0f172a', fontSize: '1.1rem', fontWeight: 500 }}>Overview</a>
            <a href="#advantage" onClick={() => setIsMobileMenuOpen(false)} style={{ textDecoration: 'none', color: '#0f172a', fontSize: '1.1rem', fontWeight: 500 }}>Why SGVU</a>
            <a href="#admission" onClick={() => setIsMobileMenuOpen(false)} style={{ textDecoration: 'none', color: '#0f172a', fontSize: '1.1rem', fontWeight: 500 }}>Admission</a>
            <a href="#curriculum" onClick={() => setIsMobileMenuOpen(false)} style={{ textDecoration: 'none', color: '#0f172a', fontSize: '1.1rem', fontWeight: 500 }}>Curriculum</a>
            <a href="#careers" onClick={() => setIsMobileMenuOpen(false)} style={{ textDecoration: 'none', color: '#0f172a', fontSize: '1.1rem', fontWeight: 500 }}>Careers</a>
            <a href="#campus" onClick={() => setIsMobileMenuOpen(false)} style={{ textDecoration: 'none', color: '#0f172a', fontSize: '1.1rem', fontWeight: 500 }}>Campus</a>
            <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} style={{ textDecoration: 'none', color: '#0f172a', fontSize: '1.1rem', fontWeight: 500 }}>FAQ</a>
            
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{ 
              backgroundColor: 'var(--primary-color)', 
              color: 'white', 
              border: 'none', 
              padding: '14px', 
              borderRadius: '8px', 
              fontWeight: 600,
              cursor: 'pointer',
              fontSize: '1rem',
              marginTop: '8px'
            }}>
              Apply Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>
  )
}

export default Navbar
