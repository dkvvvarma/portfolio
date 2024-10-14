import React from "react";

const styles = {

    // removed page styling
    

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#1a202c', 
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'white',
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
};

function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>DKVV VARMA's Portfolio</h1>
      <nav style={styles.nav}>
        <a href="/" style={styles.navLink}>ABOUT ME</a>
        <a href="/resume" style={styles.navLink}>RESUME</a>
        <a href="/" style={styles.navLink}>PROJECTS</a>
        <a href="/certifications" style={{ ...styles.navLink, ...styles.activeNavLink }}>CERTIFICATIONS</a>
      </nav>
    </header>
  );
}

export default Header;
