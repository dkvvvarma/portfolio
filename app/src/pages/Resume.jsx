import React, { useState } from 'react';
import { 
  Briefcase, 
  Download, 
  Code, 
  Shield, 
  AlertTriangle, 
  Network, 
  GraduationCap, 
  Phone, 
  Mail, 
  Twitter, 
  Linkedin,
  ChevronRight,
  ChevronDown,
  Menu
} from 'lucide-react';

const styles = {
  page: {
    backgroundColor: '#1e2530',
    color: 'white',
    minHeight: '100vh',
    fontFamily: '"Poppins", sans-serif',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    position: 'sticky',
    top: 0,
    backgroundColor: 'rgba(30, 37, 48, 0.9)',
    backdropFilter: 'blur(10px)',
    zIndex: 1000,
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #ff4b4b, #ff9f9f)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  nav: {
    display: 'flex',
    gap: '20px',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  },
  activeNavLink: {
    color: '#ff4b4b',
  },
  main: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px',
  },
  pageTitle: {
    fontSize: '48px',
    textAlign: 'center',
    marginBottom: '40px',
    position: 'relative',
  },
  pageTitleUnderline: {
    content: '""',
    position: 'absolute',
    bottom: '-10px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100px',
    height: '4px',
    background: 'linear-gradient(90deg, #ff4b4b, #ff9f9f)',
  },
  section: {
    marginBottom: '40px',
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '15px',
    padding: '30px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  sectionHover: {
    transform: 'translateY(-5px)',
    boxShadow: '0 6px 8px rgba(0, 0, 0, 0.15)',
  },
  sectionTitle: {
    fontSize: '28px',
    marginBottom: '20px',
    color: '#ff4b4b',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  experienceItem: {
    marginBottom: '30px',
    borderLeft: '2px solid #ff4b4b',
    paddingLeft: '20px',
    position: 'relative',
  },
  experienceTitle: {
    fontSize: '22px',
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  experienceDetails: {
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '14px',
    color: '#a0aec0',
  },
  skillsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
  },
  skillCategory: {
    flex: '1 1 300px',
  },
  skillList: {
    listStyleType: 'none',
    padding: 0,
  },
  skillItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '10px',
    padding: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '8px',
    transition: 'background-color 0.3s ease',
  },
  skillItemHover: {
    backgroundColor: 'rgba(255, 75, 75, 0.2)',
  },
  button: {
    padding: '12px 24px',
    backgroundColor: '#ff4b4b',
    color: 'white',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    fontSize: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
    boxShadow: '0 4px 6px rgba(255, 75, 75, 0.3)',
  },
  buttonHover: {
    backgroundColor: '#ff3333',
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 8px rgba(255, 75, 75, 0.4)',
  },
  footer: {
    textAlign: 'center',
    padding: '40px 20px',
    borderTop: '1px solid #3a4556',
    background: 'linear-gradient(180deg, rgba(30, 37, 48, 0) 0%, rgba(30, 37, 48, 1) 100%)',
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '20px',
  },
  contactInfo: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '20px',
  },
  mobileMenu: {
    display: 'none',
  },
  mobileMenuOpen: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '100%',
    right: '20px',
    backgroundColor: 'rgba(30, 37, 48, 0.95)',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  '@media (max-width: 768px)': {
    nav: {
      display: 'none',
    },
    mobileMenu: {
      display: 'block',
    },
  },
};

function ResumeComponent() {
  const [hoveredSection, setHoveredSection] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSectionHover = (index) => setHoveredSection(index);
  const handleSkillHover = (index) => setHoveredSkill(index);
  const handleButtonHover = (index) => setHoveredButton(index);

  return (
    <div style={styles.page}>
      {/* <header style={styles.header}>  
        <h1 style={styles.title}>DKVV.VARMA's Portfolio</h1>
        <nav style={styles.nav}>
          <a href="#" style={styles.navLink}>ABOUT ME</a>
          <a href="#" style={{...styles.navLink, ...styles.activeNavLink}}>RESUME</a>
          <a href="#" style={styles.navLink}>PROJECTS</a>
          <a href="#" style={styles.navLink}>CERTIFICATIONS</a>
        </nav>
        <div style={styles.mobileMenu}>
          <Menu onClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
          {mobileMenuOpen && (
            <div style={styles.mobileMenuOpen}>
              <a href="/" style={styles.navLink}>ABOUT ME</a>
              <a href="/resume" style={{...styles.navLink, ...styles.activeNavLink}}>RESUME</a>
              <a href="/" style={styles.navLink}>PROJECTS</a>
              <a href="/cetifications" style={styles.navLink}>CERTIFICATIONS</a>
            </div>
          )}
        </div>
      </header> */}
      <main style={styles.main}>
        <h2 style={styles.pageTitle}>
          Resume & Experience
          <div style={styles.pageTitleUnderline}></div>
        </h2>
        
        <section 
          style={{...styles.section, ...(hoveredSection === 0 ? styles.sectionHover : {})}}
          onMouseEnter={() => handleSectionHover(0)}
          onMouseLeave={() => handleSectionHover(null)}
        >
          <h3 style={styles.sectionTitle}><Briefcase size={28} /> Professional Experience</h3>
          <button 
        style={{...styles.button, ...(hoveredButton === 0 ? styles.buttonHover : {})}}
        onMouseEnter={() => handleButtonHover(0)}
        onMouseLeave={() => handleButtonHover(null)}
        onClick={() => window.open('/Resume.pdf', '_blank')} // Change the path to your PDF file
        >
        <Download size={18} /> DOWNLOAD RESUME
        </button>

          <div style={styles.experienceItem}>
            <h4 style={styles.experienceTitle}><ChevronRight size={20} /> Tech Lead</h4>
            <p style={styles.experienceDetails}><Briefcase size={16} /> CYSEC CLUB | Hybrid | April 2022 - Present</p>
            <p>I successfully directed a learning team of 50 members in CYSEC CLUB, conducting regular sessions to promote cybersecurity awareness. With my implementation of educational programs and activities, I fostered a culture of continuous learning and knowledge sharing among club and college members. As a result, I significantly contributed to the advancement of cybersecurity skills and expertise within the club and broader college community.</p>
          </div>
        </section>
        
        <section 
          style={{...styles.section, ...(hoveredSection === 1 ? styles.sectionHover : {})}}
          onMouseEnter={() => handleSectionHover(1)}
          onMouseLeave={() => handleSectionHover(null)}
        >
          <h3 style={styles.sectionTitle}><Code size={28} /> Skills & Proficiency</h3>
          <div style={styles.skillsContainer}>
            <div style={styles.skillCategory}>
              <h4>Programming Languages</h4>
              <ul style={styles.skillList}>
                {['C', 'Java', 'Python'].map((skill, index) => (
                  <li 
                    key={index}
                    style={{
                      ...styles.skillItem, 
                      ...(hoveredSkill === `lang-${index}` ? styles.skillItemHover : {})
                    }}
                    onMouseEnter={() => handleSkillHover(`lang-${index}`)}
                    onMouseLeave={() => handleSkillHover(null)}
                  >
                    <Code size={18} /> {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div style={styles.skillCategory}>
              <h4>Cyber Forensics</h4>
              <ul style={styles.skillList}>
                {['Autopsy', 'Wazuh'].map((skill, index) => (
                  <li 
                    key={index}
                    style={{
                      ...styles.skillItem, 
                      ...(hoveredSkill === `forensics-${index}` ? styles.skillItemHover : {})
                    }}
                    onMouseEnter={() => handleSkillHover(`forensics-${index}`)}
                    onMouseLeave={() => handleSkillHover(null)}
                  >
                    <Shield size={18} /> {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div style={styles.skillCategory}>
              <h4>Cyber Threat Intelligence</h4>
              <ul style={styles.skillList}>
                <li 
                  style={{
                    ...styles.skillItem, 
                    ...(hoveredSkill === 'cti' ? styles.skillItemHover : {})
                  }}
                  onMouseEnter={() => handleSkillHover('cti')}
                  onMouseLeave={() => handleSkillHover(null)}
                >
                  <AlertTriangle size={18} /> Networking & Linux
                </li>
              </ul>
            </div>
            <div style={styles.skillCategory}>
              <h4>Penetration Testing & Networking</h4>
              <ul style={styles.skillList}>
                <li 
                  style={{
                    ...styles.skillItem, 
                    ...(hoveredSkill === 'pentest' ? styles.skillItemHover : {})
                  }}
                  onMouseEnter={() => handleSkillHover('pentest')}
                  onMouseLeave={() => handleSkillHover(null)}
                >
                  <Network size={18} /> Web & Network Penetration Testing Tools
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* <section 
          style={{...styles.section, ...(hoveredSection === 2 ? styles.sectionHover : {})}}
          onMouseEnter={() => handleSectionHover(2)}
          onMouseLeave={() => handleSectionHover(null)}
        >
          <h3 style={styles.sectionTitle}><Shield size={28} /> Certifications</h3>
          <button 
            style={{...styles.button, ...(hoveredButton === 1 ? styles.buttonHover : {})}}
            onMouseEnter={() => handleButtonHover(1)}
            onMouseLeave={() => handleButtonHover(null)}
          >
            <ChevronRight size={18} /> VIEW
          </button>
        </section> */}
        
        <section 
          style={{...styles.section, ...(hoveredSection === 3 ? styles.sectionHover : {})}}
          onMouseEnter={() => handleSectionHover(3)}
          onMouseLeave={() => handleSectionHover(null)}
        >
          <h3 style={styles.sectionTitle}><GraduationCap size={28} /> Education</h3>
          <div style={styles.experienceItem}>
            <h4 style={styles.experienceTitle}><ChevronRight size={20} /> Gitam University</h4>
            <p style={styles.experienceDetails}><GraduationCap size={16} /> B.Tech - CSE CYBERSECURITY | Visakhapatnam, India | 2021 - Present</p>
            <p>I am currently pursuing a degree in Computer Science at Gitam University, where I am acquiring comprehensive knowledge and practical skills in the field. 
                The academic environment  has provided me with opportunities to delve into various aspects of technology and software development
                
            </p>
          </div>
          
          <div style={styles.experienceItem}>
            <h4 style={styles.experienceTitle}><ChevronRight size={20} /> Dr. K K R's Gowtham High School</h4>
            <p style={styles.experienceDetails}><GraduationCap size={16} /> High School | Visakhapatnam, India | 2016 - 2019</p>
            <p>My high school education laid the foundation for my academic journey, fostering my curiosity and passion for technology. 
                It equipped me with a strong academic base and instilled in me the drive to pursue a career in the tech industry.
                
            </p>
          </div>
        </section>
      </main>
      <footer style={styles.footer}>
        <p>© 2024 by D.K.V.V.Varma</p>
        <div style={styles.contactInfo}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Phone size={18} /> 8019852842</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Mail size={18} /> Write</span>
        </div>
        <div style={styles.socialLinks}>
          <a href="#" style={{...styles.navLink, display: 'flex', alignItems: 'center', gap: '5px'}}><Twitter size={18} /> Twitter</a>
          <a href="#" style={{...styles.navLink, display: 'flex', alignItems: 'center', gap: '5px'}}><Linkedin size={18} /> LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}


export default ResumeComponent;