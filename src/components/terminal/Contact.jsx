const Contact = () => {
  return (
    <div className="contact-content" style={{ maxWidth: '800px' }}>
      <h2 style={{ color: '#00ff00', marginBottom: '1rem' }}>Contact Information</h2>

      <div style={{ marginBottom: '2rem' }}>
        <p>Feel free to reach out to me for collaboration, consulting, or just to say hello!</p>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ color: '#00ffff', marginBottom: '1rem', borderBottom: '1px solid #00ff00', paddingBottom: '0.25rem' }}>
          Contact Details
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ color: '#00ff00', marginRight: '1rem', minWidth: '100px' }}>Email:</span>
            <a
              href="mailto:shanmukhaperla284@gmail.com"
              style={{ color: '#00ffff', textDecoration: 'none' }}
            >
              shanmukhaperla284@gmail.com
            </a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ color: '#00ff00', marginRight: '1rem', minWidth: '100px' }}>LinkedIn:</span>
            <a
              href="https://linkedin.com/in/shanmukha-perla-58216a2b6"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#00ffff', textDecoration: 'none' }}
            >
              linkedin.com/in/shanmukha-perla-58216a2b6
            </a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ color: '#00ff00', marginRight: '1rem', minWidth: '100px' }}>GitHub:</span>
            <a
              href="https://github.com/Shannu116"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#00ffff', textDecoration: 'none' }}
            >
              github.com/Shannu116
            </a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ color: '#00ff00', marginRight: '1rem', minWidth: '100px' }}>Twitter:</span>
            <a
              href="https://x.com/shanmukha2916"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#00ffff', textDecoration: 'none' }}
            >
              x.com/shanmukha2916
            </a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ color: '#00ff00', marginRight: '1rem', minWidth: '100px' }}>Location:</span>
            <span>Remote / Worldwide</span>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ color: '#00ffff', marginBottom: '1rem', borderBottom: '1px solid #00ff00', paddingBottom: '0.25rem' }}>
          Services
        </h3>

        <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
          <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
            <span style={{ color: '#00ff00', marginRight: '0.5rem' }}>•</span>
            Security Consulting & Advisory
          </li>
          <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
            <span style={{ color: '#00ff00', marginRight: '0.5rem' }}>•</span>
            Penetration Testing & Vulnerability Assessment
          </li>
          <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
            <span style={{ color: '#00ff00', marginRight: '0.5rem' }}>•</span>
            Security Architecture Review
          </li>
          <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
            <span style={{ color: '#00ff00', marginRight: '0.5rem' }}>•</span>
            Security Training & Workshops
          </li>
          <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
            <span style={{ color: '#00ff00', marginRight: '0.5rem' }}>•</span>
            Incident Response Planning
          </li>
        </ul>
      </div>

      <div>
        <h3 style={{ color: '#00ffff', marginBottom: '1rem', borderBottom: '1px solid #00ff00', paddingBottom: '0.25rem' }}>
          Availability
        </h3>

        <p>Currently available for freelance projects, security consulting, and full-time opportunities.</p>
        <p style={{ marginTop: '1rem' }}>Response time: Usually within 24-48 hours.</p>
      </div>
    </div>
  );
};

export default Contact;
