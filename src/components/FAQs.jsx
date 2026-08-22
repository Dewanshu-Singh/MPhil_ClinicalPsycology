import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const faqData = [
  {
    question: "Is this program approved by RCI?",
    answer: "Yes, the M.Phil in Clinical Psychology at SGVU is fully approved by the Rehabilitation Council of India (RCI). Graduates will be eligible for RCI registration to practice as Clinical Psychologists."
  },
  {
    question: "What is the duration of the course?",
    answer: "The program is a two-year, full-time regular course divided into four semesters of academic and clinical training."
  },
  {
    question: "Are there hospital postings involved?",
    answer: "Yes. Clinical training is a core component. Students undergo supervised clinical postings in psychiatry departments of affiliated hospitals and mental health centers to gain hands-on experience."
  },
  {
    question: "What is the eligibility for the entrance exam?",
    answer: "Candidates must hold an M.A./M.Sc. in Psychology from a UGC-recognized university with a minimum of 55% aggregate marks (50% for SC/ST/OBC/PWD)."
  },
  {
    question: "Does the program include a stipend?",
    answer: "Stipend policies are subject to university norms and government regulations for the current academic year. Please contact the admission cell for the latest updates."
  },
  {
    question: "How can I apply for the entrance exam?",
    answer: "You can apply online through the SGVU admission portal. Fill out the application form, upload your postgraduate transcripts, and pay the application fee to register for the entrance test."
  }
]

const AccordionItem = ({ faq, isOpen, onClick }) => {
  return (
    <div style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
      <button 
        onClick={onClick}
        style={{ 
          width: '100%',
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: '24px 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left'
        }}>
        <span style={{ 
          color: '#0f172a',
          fontSize: '1.05rem',
          fontWeight: 600
        }}>
          {faq.question}
        </span>
        <div style={{ 
          background: isOpen ? 'var(--primary-color)' : '#f3f4f6',
          borderRadius: '50%',
          padding: '4px',
          transition: 'all 0.3s ease'
        }}>
          {isOpen ? <Minus size={16} color="white" /> : <Plus size={16} color="#374151" />}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{
              color: '#64748b',
              fontSize: '0.95rem',
              lineHeight: 1.6,
              margin: '0 0 24px 0'
            }}>
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(5)

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" style={{ 
      backgroundColor: '#f8fafc', 
      padding: '100px 0',
      color: '#1f2937'
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '64px',
          alignItems: 'flex-start'
        }}>
          
          {/* Left Column - Heading & Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="faq-sticky-header"
            style={{ flex: '1 1 400px' }}
          >
            <div style={{ 
              color: 'var(--primary-color)', 
              fontSize: '0.75rem', 
              fontWeight: 700, 
              letterSpacing: '2px', 
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}>
              Frequently Asked Questions
            </div>
            
            <h2 style={{ 
              fontFamily: 'var(--font-serif)', 
              fontSize: 'clamp(3rem, 4vw, 4rem)', 
              fontWeight: 500,
              color: '#0f172a', /* Changed to Navy */
              lineHeight: 1.1,
              marginBottom: '24px'
            }}>
              Everything you need to <span style={{ color: 'var(--primary-color)', fontStyle: 'italic' }}>know</span>
            </h2>
            
            <p style={{ color: '#4b5563', fontSize: '1.05rem', lineHeight: 1.7 }}>
              Still have questions? Call our toll-free helpline <a href="tel:18003094545" style={{ color: 'var(--primary-color)', textDecoration: 'none', borderBottom: '1px solid var(--primary-color)' }}>1800 309 4545</a> or send an enquiry below.
            </p>
          </motion.div>

          {/* Right Column - Accordion List */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ flex: '1 1 600px' }}
          >
            {/* Top border for the first item */}
            <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)' }}></div>
            {faqData.map((faq, index) => (
              <AccordionItem 
                key={index} 
                faq={faq} 
                isOpen={openIndex === index} 
                onClick={() => toggleFaq(index)} 
              />
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default FAQs
