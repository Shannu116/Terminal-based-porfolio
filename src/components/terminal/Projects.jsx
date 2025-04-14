const Projects = () => {
  const projects = [
    {
      title: "SecureNet Vulnerability Scanner",
      description: "A comprehensive network vulnerability scanner that identifies security weaknesses in enterprise networks. Features automated scanning, detailed reporting, and remediation recommendations.",
      technologies: ["Python", "Nmap", "Docker", "PostgreSQL", "Flask"],
      highlights: [
        "Identified 30+ critical vulnerabilities in client networks",
        "Reduced scan time by 40% compared to traditional tools",
        "Implemented machine learning for vulnerability prediction"
      ],
      github: "https://github.com/username/securenet-scanner"
    },
    {
      title: "WebGuardian WAF",
      description: "A custom Web Application Firewall (WAF) designed to protect against OWASP Top 10 vulnerabilities. Includes real-time monitoring, attack detection, and automated blocking of malicious traffic.",
      technologies: ["Go", "JavaScript", "Redis", "Nginx", "Docker"],
      highlights: [
        "Blocked 99.7% of SQL injection attempts in testing",
        "Reduced false positives by 60% using contextual analysis",
        "Handles 10,000+ requests per second with minimal latency"
      ],
      github: "https://github.com/username/webguardian-waf"
    },
    {
      title: "PhishDetector",
      description: "An AI-powered tool that detects phishing attempts in emails and websites. Uses natural language processing and computer vision to identify suspicious content and provide risk scores.",
      technologies: ["Python", "TensorFlow", "NLP", "React", "Node.js"],
      highlights: [
        "95% accuracy in detecting previously unknown phishing attempts",
        "Browser extension with 10,000+ active users",
        "Featured in Cybersecurity Today magazine"
      ],
      github: "https://github.com/username/phish-detector"
    },
    {
      title: "SecureAuth Framework",
      description: "A secure authentication framework implementing multi-factor authentication, biometric verification, and zero-knowledge proofs for high-security applications.",
      technologies: ["Java", "Spring Boot", "JWT", "Biometric APIs", "MongoDB"],
      highlights: [
        "Implemented in 5 enterprise applications",
        "Zero successful breaches since deployment",
        "Compliant with NIST 800-63 Digital Identity Guidelines"
      ],
      github: "https://github.com/username/secure-auth"
    },
    {
      title: "ThreatIntel Dashboard",
      description: "A real-time threat intelligence dashboard aggregating data from multiple sources to provide actionable security insights and alerts.",
      technologies: ["React", "D3.js", "Python", "Elasticsearch", "Kafka"],
      highlights: [
        "Processes 1M+ threat indicators daily",
        "Reduced incident response time by 65%",
        "Custom visualization engine for threat correlation"
      ],
      github: "https://github.com/username/threat-intel"
    }
  ];

  return (
    <div className="projects-content" style={{ maxWidth: '800px' }}>
      <h2 style={{ color: '#00ff00', marginBottom: '1rem' }}>Projects</h2>
      
      <div style={{ marginBottom: '1.5rem' }}>
        <p>Here are some of my key projects in cybersecurity and ethical hacking. Each project demonstrates my approach to solving complex security challenges.</p>
      </div>
      
      {projects.map((project, index) => (
        <div 
          key={index} 
          style={{ 
            marginBottom: '2rem', 
            padding: '1rem', 
            border: '1px solid #00ff00',
            borderRadius: '4px',
            backgroundColor: 'rgba(0, 255, 0, 0.05)'
          }}
        >
          <h3 style={{ color: '#00ffff', marginBottom: '0.5rem' }}>{project.title}</h3>
          
          <p style={{ marginBottom: '1rem' }}>{project.description}</p>
          
          <div style={{ marginBottom: '1rem' }}>
            <h4 style={{ color: '#00ff00', marginBottom: '0.5rem', fontSize: '1rem' }}>Key Highlights:</h4>
            <ul style={{ listStyleType: 'none', paddingLeft: '0.5rem' }}>
              {project.highlights.map((highlight, i) => (
                <li key={i} style={{ marginBottom: '0.25rem' }}>• {highlight}</li>
              ))}
            </ul>
          </div>
          
          <div style={{ marginBottom: '1rem' }}>
            <h4 style={{ color: '#00ff00', marginBottom: '0.5rem', fontSize: '1rem' }}>Technologies:</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.technologies.map((tech, i) => (
                <span 
                  key={i} 
                  style={{ 
                    padding: '0.25rem 0.5rem', 
                    backgroundColor: 'rgba(0, 255, 0, 0.1)', 
                    border: '1px solid #00aa00',
                    borderRadius: '4px',
                    fontSize: '0.875rem'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                color: '#00ffff', 
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center'
              }}
            >
              <span style={{ marginRight: '0.5rem' }}>View on GitHub</span>
              <span>→</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
