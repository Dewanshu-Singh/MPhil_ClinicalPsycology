import React from 'react'

const facultyList = [
  {
    name: "Dr. Aarti Singh",
    role: "HOD & Associate Professor",
    qualifications: "M.A., M.Phil (Cl. Psy.), Ph.D.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Dr. Rajesh Kumar",
    role: "Assistant Professor",
    qualifications: "M.Sc., M.Phil (Cl. Psy.)",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Dr. Meera Patel",
    role: "Clinical Supervisor",
    qualifications: "M.A., M.Phil (Cl. Psy.), Ph.D.",
    image: "https://images.unsplash.com/photo-1594824436998-d1a1b181283c?auto=format&fit=crop&w=300&q=80"
  }
]

const Faculty = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <h2 className="section-title">Core Faculty</h2>
        
        <div className="grid grid-cols-1 md-grid-cols-3 gap-4">
          {facultyList.map((member, index) => (
            <div key={index} className="glass-panel" style={{ overflow: 'hidden', textAlign: 'center' }}>
              <div style={{ height: '240px', width: '100%', overflow: 'hidden' }}>
                <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} 
                     onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                     onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}/>
              </div>
              <div style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '4px' }}>{member.name}</h3>
                <p style={{ color: 'var(--primary-color)', fontWeight: 600, marginBottom: '12px' }}>{member.role}</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{member.qualifications}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faculty
