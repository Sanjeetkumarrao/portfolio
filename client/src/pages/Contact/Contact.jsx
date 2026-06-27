import { useState } from 'react';
import axios from 'axios';
import { personal, socials } from '../../data/personal.js';
import { SectionHeader, Button, Card } from '../../components/ui/index.js';
import { Icons } from '../../components/ui/Icons.jsx';
import './Contact.css';

const INIT = { name: '', email: '', message: '' };

const Contact = () => {
  const [form,   setForm]   = useState(INIT);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('loading');
    try {
      await axios.post('/api/contact', form);
      setStatus('success');
      setForm(INIT);
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="contact page-container">

      <SectionHeader
        eyebrow="Contact"
        title="Let's work together"
        subtitle="Open to internships, collaborations, and freelance projects. My inbox is always open — I'll respond within 24 hours."
        className="reveal"
      />

      <div className="contact__grid">

        {/* ── Left: Info ── */}
        <div className="contact__info">
          <div className="contact__socials reveal delay-1">
            {socials.map((s) => (
              <a
                key={s.id}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="contact__social"
              >
                <span className="contact__social-icon">{Icons[s.icon]}</span>
                <span className="contact__social-label">{s.label}</span>
                <span className="contact__social-arrow">{Icons.arrow}</span>
              </a>
            ))}
          </div>

          <Card padded className="contact__avail reveal delay-2">
            <div className="contact__avail-inner">
              <span className="contact__avail-dot" />
              <div>
                <p className="contact__avail-title">Available for work</p>
                <p className="contact__avail-sub">Remote · On-site · Lucknow & beyond</p>
              </div>
            </div>
          </Card>

          <Card padded className="contact__email-card reveal delay-3">
            <p className="contact__email-label">Prefer email?</p>
            <a href={`mailto:${personal.email}`} className="contact__email-link">
              {personal.email}
            </a>
          </Card>
        </div>

        {/* ── Right: Form ── */}
        <Card padded className="contact__form-card reveal delay-2">
          <h2 className="contact__form-title">Send a message</h2>

          {status === 'success' ? (
            <div className="contact__success">
              <span>✅</span>
              <p>Message sent! I'll get back to you soon.</p>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className="contact__form-row">
                <div className="contact__field">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name" name="name" type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading'}
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email" name="email" type="email"
                    placeholder="you@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading'}
                  />
                </div>
              </div>

              <div className="contact__field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message" name="message" rows={5}
                  placeholder="What's on your mind?"
                  value={form.message}
                  onChange={handleChange}
                  required
                  disabled={status === 'loading'}
                />
              </div>

              {status === 'error' && (
                <p className="contact__error">
                  Something went wrong. Try again or email me directly.
                </p>
              )}

              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                disabled={status === 'loading'}
                iconRight={status === 'loading' ? <span className="contact__spinner" /> : Icons.send}
              >
                {status === 'loading' ? 'Sending…' : 'Send Message'}
              </Button>
            </form>
          )}
        </Card>

      </div>
    </div>
  );
};

export default Contact;
