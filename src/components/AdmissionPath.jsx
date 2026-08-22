import React from 'react'
import { GraduationCap, Clock, IndianRupee, ClipboardList, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const admissionDetails = [
  {
    icon: <GraduationCap size={24} color="var(--primary-color)" />,
    title: "Eligibility",
    description: "Master's Degree in Psychology from any University/College established by law with minimum 55% marks (50% for SC/ST) or equivalent grade."
  },
  {
    icon: <Clock size={24} color="var(--primary-color)" />,
    title: "Duration",
    description: "2 Years, Full-Time — four semesters of academic and intensive clinical training including dissertation work."
  },
  {
    icon: <IndianRupee size={24} color="var(--primary-color)" />,
    title: "Program Fee",
    description: "₹3,60,000 per year (Indian students). International student fees as per university norms."
  },
  {
    icon: <ClipboardList size={24} color="var(--primary-color)" />,
    title: "Mode of Selection",
    description: "SGVU Entrance Test followed by a Personal Interview conducted by the Department of Clinical Psychology."
  }
]

const admissionSteps = [
  {
    step: "01",
    title: "Enquire & Apply",
    description: "Submit your enquiry and complete the application for the upcoming batch."
  },
  {
    step: "02",
    title: "Entrance Test",
    description: "Appear for the SGVU entrance examination in Psychology."
  },
  {
    step: "03",
    title: "Personal Interview",
    description: "Interact with the department faculty and complete your enrolment."
  }
]

const AdmissionPath = () => {
  return (
    <section id="admission" style={{ 
      backgroundColor: '#ffffff', 
      padding: '100px 0',
      color: '#1f2937',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Heading */}
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
            Admission & Eligibility
          </div>
          <h2 style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', 
            fontWeight: 500,
            color: '#0f172a',
            lineHeight: 1.2
          }}>
            Your path into the <span style={{ color: 'var(--primary-color)', fontStyle: 'italic' }}>program</span>
          </h2>
        </motion.div>

        {/* 4 Detail Cards */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '24px',
          marginBottom: '80px'
        }}>
          {admissionDetails.map((detail, index) => (
            <motion.div 
              key={index} 
              className="mobile-stack-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, boxShadow: '0 15px 30px rgba(0,0,0,0.06)' }}
              style={{ 
                backgroundColor: '#fbf9f6', /* Light cream to contrast with white bg */
                padding: '32px 24px', 
                borderRadius: '16px',
                border: '1px solid rgba(0,0,0,0.03)',
                cursor: 'pointer'
              }}
            >
              <div style={{ marginBottom: '24px' }}>
                {detail.icon}
              </div>
              <h3 style={{ 
                fontFamily: 'var(--font-serif)', 
                fontSize: '1.25rem', 
                fontWeight: 500, 
                marginBottom: '12px', 
                color: '#0f172a' 
              }}>
                {detail.title}
              </h3>
              <p style={{ 
                color: '#4b5563', 
                fontSize: '0.9rem', 
                lineHeight: 1.6,
                margin: 0
              }}>
                {detail.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 3 Step Process */}
        <div className="horizontal-scroll-mobile" style={{ 
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: '24px',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          {admissionSteps.map((step, index) => (
            <React.Fragment key={index}>
              {/* Step Card */}
              <motion.div 
                className="mobile-scroll-card"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                style={{ 
                  flex: '1 1 300px',
                  backgroundColor: '#ffffff', 
                  padding: '40px 32px', 
                  borderRadius: '16px',
                  border: '1px solid rgba(0,0,0,0.08)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
                }}
              >
                <div style={{ 
                  fontFamily: 'var(--font-serif)', 
                  fontSize: '2.5rem', 
                  color: 'var(--primary-color)',
                  opacity: 0.5,
                  marginBottom: '16px'
                }}>
                  {step.step}
                </div>
                <h3 style={{ 
                  fontFamily: 'var(--font-serif)', 
                  fontSize: '1.5rem', 
                  fontWeight: 500, 
                  marginBottom: '12px', 
                  color: '#0f172a' 
                }}>
                  {step.title}
                </h3>
                <p style={{ 
                  color: '#4b5563', 
                  fontSize: '0.95rem', 
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  {step.description}
                </p>
              </motion.div>

              {/* Arrow separator (hide after the last item) */}
              {index < admissionSteps.length - 1 && (
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center',
                  padding: '0 8px',
                  color: 'var(--primary-color)'
                }}>
                  <ArrowRight size={24} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  )
}

export default AdmissionPath
