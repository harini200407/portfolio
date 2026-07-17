import { useState } from 'react'
import { FaRegEnvelope, FaPhone, FaPaperPlane } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Wire this up to your email service of choice (EmailJS, Formspree, etc.)
    window.location.href = `mailto:hariniee0722@gmail.com?subject=Portfolio Contact from ${form.name}&body=${form.message} (Reply to: ${form.email})`
  }

  return (
    <section id="contact" className="alt">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-eyebrow">Get In Touch</div>
          <div className="sec-title">Contact <span>Me</span></div>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <p>
              I'm always open to discussing new projects, creative ideas, or opportunities to be
              part of your team.
            </p>
            <div className="cinfo-item">
              <div className="cinfo-ic"><FaRegEnvelope /></div>
              <div>
                <div className="cinfo-label">Email</div>
                <div className="cinfo-val">hariniee0722@gmail.com</div>
              </div>
            </div>
            <div className="cinfo-item">
              <div className="cinfo-ic"><FaPhone /></div>
              <div>
                <div className="cinfo-label">Phone</div>
                <div className="cinfo-val">+91 72001 67069</div>
              </div>
            </div>
            <div className="cinfo-item">
              <div className="cinfo-ic"><FaLocationDot /></div>
              <div>
                <div className="cinfo-label">Location</div>
                <div className="cinfo-val">Chennai, India</div>
              </div>
            </div>
          </div>

          <form className="form-card" onSubmit={handleSubmit}>
            <div className="form-row">
              <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
            </div>
            <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required></textarea>
            <button type="submit" className="btn primary" style={{ width: '100%', justifyContent: 'center' }}>
              Send Message <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
