import React, { useState } from 'react'

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your enquiry! Our admission team will contact you shortly.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section className="section-padding">
      <div className="container" style={{ maxWidth: '600px' }}>
        <div className="glass-panel" style={{ padding: '48px 32px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, textAlign: 'center', marginBottom: '8px' }}>Admission Enquiry</h2>
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '32px' }}>Leave your details below and we will get back to you.</p>
          
          <form onSubmit={handleSubmit} className="flex-col gap-3">
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-muted)' }}>Full Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required className="input-field" placeholder="John Doe" />
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-muted)' }}>Email Address</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="input-field" placeholder="john@example.com" />
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-muted)' }}>Phone Number</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="input-field" placeholder="+91 98765 43210" />
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-muted)' }}>Message (Optional)</label>
              <textarea name="message" value={formData.message} onChange={handleChange} className="input-field" placeholder="I would like to know more about..." rows="4" style={{ resize: 'vertical' }}></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '16px' }}>
              Submit Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default EnquiryForm
