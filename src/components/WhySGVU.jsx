import React from 'react'
import { BrainCircuit, Stethoscope, Users, Building2, BookOpen, Award } from 'lucide-react'

const features = [
  {
    icon: <BrainCircuit size={32} color="var(--primary-color)" />,
    title: "Expert Faculty",
    description: "Learn from highly experienced RCI-registered clinical psychologists."
  },
  {
    icon: <Building2 size={32} color="var(--secondary-color)" />,
    title: "Modern Facilities",
    description: "State-of-the-art psychology labs and on-campus clinical setups."
  },
  {
    icon: <Stethoscope size={32} color="var(--accent-color)" />,
    title: "Extensive Clinical Practice",
    description: "Hands-on training in partner hospitals and psychiatric centers."
  },
  {
    icon: <Users size={32} color="#f59e0b" />,
    title: "Small Batch Size",
    description: "Personalized attention and supervision for every student."
  },
  {
    icon: <BookOpen size={32} color="#ec4899" />,
    title: "Research Oriented",
    description: "Robust focus on research methodologies and dissertations."
  },
  {
    icon: <Award size={32} color="#0ea5e9" />,
    title: "Recognized Degree",
    description: "Valid across India for RCI registration as a Clinical Psychologist."
  }
]

const WhySGVU = () => {
  return (
    <section className="section-padding" style={{ background: 'rgba(255,255,255,0.01)' }}>
      <div className="container">
        <h2 className="section-title">Why Choose SGVU?</h2>
        
        <div className="grid grid-cols-1 md-grid-cols-3 gap-4">
          {features.map((feature, idx) => (
            <div key={idx} className="glass-panel" style={{ padding: '32px', transition: 'transform 0.3s' }} 
                 onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                 onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ marginBottom: '24px', background: 'rgba(255,255,255,0.05)', display: 'inline-flex', padding: '16px', borderRadius: '16px' }}>
                {feature.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '12px' }}>{feature.title}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhySGVU
