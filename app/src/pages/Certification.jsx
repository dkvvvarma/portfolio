import React from 'react';

const certifications = [
  {
    title: "Certified Ethical Hacker v12",
    image: "./CC_certification.png",
    description: "The CEH v12 is a globally recognized certification by EC-Council.",
    certificateLink: "https://drive.google.com/file/d/14866qmcpWGgcy04DXKQbEr87MFu9kQKa/view",
    officialSiteLink: "#"
  },
  {
    title: "Google Cybersecurity Certification",
    image: "/google_cert.png",
    description: "Google Cybersecurity Certification by Coursera",
    certificateLink: "https://www.coursera.org/account/accomplishments/specialization/certificate/P7JA7L7WFHPC",
    officialSiteLink: "#"
  },
  {
    title: "Certified Network Security Practitioner [ CNSP ]",
    image: "/Sec_ops.png",
    description: "CNSP is professional networking certification by SECOPS Group",
    certificateLink: "https://drive.google.com/file/d/1kpWyOplhvnZjApzNWykujVM21QKrlOfA/view",
    officialSiteLink: "#"
  }


];

const styles = {
  page: {
    backgroundColor: '#1e2530',
    color: 'white',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  nav: {
    display: 'flex',
    gap: '20px',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
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
  },
  certList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  certCard: {
    display: 'flex',
    backgroundColor: '#2a3441',
    border: '2px solid #ff4b4b',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  certImage: {
    width: '300px',
    height: 'auto',
    objectFit: 'cover',
  },
  certDetails: {
    padding: '20px',
    flex: 1,
  },
  certTitle: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  certDescription: {
    color: '#a0aec0',
    marginBottom: '20px',
  },
  buttonContainer: {
    display: 'flex',
    gap: '10px',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '4px',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
  },
  primaryButton: {
    backgroundColor: '#ff4b4b',
    color: 'white',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    color: 'white',
    border: '1px solid white',
  },
};

export default function CertificationPage() {
  return (
    <div style={styles.page}>
      {/* <header style={styles.header}>
        <h1 style={styles.title}>DKVV.VARMA's Portfolio</h1>
        <nav style={styles.nav}>
          <a href="/" style={styles.navLink}>ABOUT ME</a>
          <a href="/resume" style={styles.navLink}>RESUME</a>
          <a href="/" style={styles.navLink}>PROJECTS</a>
          <a href="#" style={{...styles.navLink, ...styles.activeNavLink}}>CERTIFICATIONS</a>
        </nav>
      </header> */}
      <main style={styles.main}>
        <h2 style={styles.pageTitle}>Certifications</h2>
        <div style={styles.certList}>
          {certifications.map((cert, index) => (
            <div key={index} style={styles.certCard}>
              <img src={cert.image} alt={cert.title} style={styles.certImage} />
              <div style={styles.certDetails}>
                <h3 style={styles.certTitle}>{cert.title}</h3>
                <p style={styles.certDescription}>{cert.description}</p>
                <div style={styles.buttonContainer}>
                  <a href={cert.certificateLink} style={{...styles.button, ...styles.primaryButton}}>
                    view certificate
                  </a>
                  <a href={cert.officialSiteLink} style={{...styles.button, ...styles.secondaryButton}}>
                    official site
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}