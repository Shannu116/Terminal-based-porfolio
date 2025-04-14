const Skills = () => {
  const skillCategories = [
    {
      category: "Penetration Testing",
      skills: [
        { name: "Network Penetration Testing", level: 95 },
        { name: "Web Application Security", level: 90 },
        { name: "Mobile Application Security", level: 85 },
        { name: "API Security Testing", level: 88 },
        { name: "IoT Security Assessment", level: 80 }
      ]
    },
    {
      category: "Security Tools",
      skills: [
        { name: "Metasploit Framework", level: 92 },
        { name: "Burp Suite", level: 95 },
        { name: "Wireshark", level: 90 },
        { name: "Nmap", level: 95 },
        { name: "OWASP ZAP", level: 88 }
      ]
    },
    {
      category: "Programming & Scripting",
      skills: [
        { name: "Python", level: 90 },
        { name: "Bash Scripting", level: 85 },
        { name: "PowerShell", level: 80 },
        { name: "JavaScript", level: 75 },
        { name: "SQL", level: 85 }
      ]
    },
    {
      category: "Security Domains",
      skills: [
        { name: "Vulnerability Assessment", level: 95 },
        { name: "Threat Modeling", level: 90 },
        { name: "Incident Response", level: 85 },
        { name: "Security Architecture", level: 80 },
        { name: "Social Engineering", level: 90 }
      ]
    }
  ];

  // Function to render progress bar
  const renderProgressBar = (level) => {
    const filledBlocks = Math.floor(level / 10);
    const emptyBlocks = 10 - filledBlocks;
    
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ marginRight: '0.5rem', width: '200px', display: 'flex' }}>
          {[...Array(filledBlocks)].map((_, i) => (
            <span key={`filled-${i}`} style={{ color: '#00ff00' }}>█</span>
          ))}
          {[...Array(emptyBlocks)].map((_, i) => (
            <span key={`empty-${i}`} style={{ color: '#005500' }}>█</span>
          ))}
        </div>
        <span>{level}%</span>
      </div>
    );
  };

  return (
    <div className="skills-content" style={{ maxWidth: '800px' }}>
      <h2 style={{ color: '#00ff00', marginBottom: '1rem' }}>Technical Skills</h2>
      
      {skillCategories.map((category, index) => (
        <div key={index} style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#00ffff', marginBottom: '0.75rem', borderBottom: '1px solid #00ff00', paddingBottom: '0.25rem' }}>
            {category.category}
          </h3>
          
          <div>
            {category.skills.map((skill, skillIndex) => (
              <div key={skillIndex} style={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ width: '200px', paddingRight: '1rem' }}>{skill.name}</div>
                {renderProgressBar(skill.level)}
              </div>
            ))}
          </div>
        </div>
      ))}
      
      <h3 style={{ color: '#00ff00', marginBottom: '0.75rem' }}>Additional Skills</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {[
          "Network Security", "Cloud Security (AWS, Azure)", "Docker Security",
          "Kubernetes Security", "SIEM Tools", "Malware Analysis",
          "Reverse Engineering", "Digital Forensics", "Cryptography",
          "Security Compliance (GDPR, HIPAA)", "Risk Assessment"
        ].map((skill, index) => (
          <div 
            key={index} 
            style={{ 
              border: '1px solid #00ff00', 
              padding: '0.5rem 0.75rem', 
              borderRadius: '4px',
              backgroundColor: 'rgba(0, 255, 0, 0.1)'
            }}
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
