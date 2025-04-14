const About = () => {
  return (
    <div className="about-content" style={{ maxWidth: '800px' }}>
      <h2 style={{ color: '#00ff00', marginBottom: '1rem' }}>About Me</h2>
      
      <div style={{ marginBottom: '1.5rem' }}>
        <p>Hello! I'm <span style={{ color: '#00ff00', fontWeight: 'bold' }}>Shanmukha</span>, a passionate cybersecurity professional specializing in ethical hacking, penetration testing, and security analysis.</p>
        <br />
        <p>With a strong background in identifying vulnerabilities and implementing robust security measures, I help organizations protect their digital assets from evolving cyber threats.</p>
      </div>
      
      <h3 style={{ color: '#00ff00', marginBottom: '0.5rem' }}>Education</h3>
      <div style={{ marginBottom: '1.5rem', paddingLeft: '1rem' }}>
        <p><span style={{ color: '#00ffff' }}>B.Tech in Computer Science</span> - Specialization in Cybersecurity</p>
        <p>Graduated with honors, focusing on advanced security protocols and ethical hacking methodologies.</p>
      </div>
      
      <h3 style={{ color: '#00ff00', marginBottom: '0.5rem' }}>Experience</h3>
      <div style={{ marginBottom: '1.5rem', paddingLeft: '1rem' }}>
        <p><span style={{ color: '#00ffff' }}>Security Analyst</span> - XYZ Security Solutions (2020-Present)</p>
        <ul style={{ listStyleType: 'none', paddingLeft: '1rem' }}>
          <li>• Conducted vulnerability assessments and penetration testing for enterprise clients</li>
          <li>• Implemented security protocols that reduced breach incidents by 40%</li>
          <li>• Led a team of junior analysts in security auditing procedures</li>
        </ul>
        <br />
        <p><span style={{ color: '#00ffff' }}>Cybersecurity Intern</span> - ABC Tech (2019-2020)</p>
        <ul style={{ listStyleType: 'none', paddingLeft: '1rem' }}>
          <li>• Assisted in network security monitoring and threat detection</li>
          <li>• Contributed to the development of security awareness training materials</li>
        </ul>
      </div>
      
      <h3 style={{ color: '#00ff00', marginBottom: '0.5rem' }}>Certifications</h3>
      <div style={{ paddingLeft: '1rem' }}>
        <p>• Certified Ethical Hacker (CEH)</p>
        <p>• Offensive Security Certified Professional (OSCP)</p>
        <p>• CompTIA Security+</p>
        <p>• Certified Information Systems Security Professional (CISSP)</p>
      </div>
      
      <div style={{ marginTop: '1.5rem' }}>
        <p>When I'm not securing systems, you can find me participating in CTF competitions, contributing to open-source security tools, and staying updated with the latest cybersecurity trends and threats.</p>
      </div>
    </div>
  );
};

export default About;
