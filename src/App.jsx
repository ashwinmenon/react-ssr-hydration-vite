import { useEffect, useState } from 'react';

export default function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleNav = () => setIsNavOpen(prev => !prev);

  const navigateTo = (section) => {
    setActiveSection(section);
    setIsNavOpen(false); // Close nav after selection
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <p>Welcome to the homepage of our React Blog!</p>;
      case 'blog':
        return <p>Here are some amazing blog posts coming your way soon...</p>;
      case 'about':
        return <p>This blog is built using React and SSR via Vite + Express.</p>;
      default:
        return <p>Welcome!</p>;
    }
  };

  useEffect(()=>{
    setIsClient(true)
  },[])

  return (
    <div>
      <header style={styles.header}>
        <div style={styles.logo}>📝 Blog</div>
        <button onClick={toggleNav} style={styles.hamburger}>
          ☰
        </button>
        <nav style={{ ...styles.nav, display: isNavOpen ? 'flex' : 'none' }}>
          <a onClick={() => navigateTo('home')} style={styles.navItem}>Home</a>
          <a onClick={() => navigateTo('blog')} style={styles.navItem}>Blog</a>
          <a onClick={() => navigateTo('about')} style={styles.navItem}>About</a>
        </nav>
      </header>

      <main style={styles.main}>
        <h1 style={styles.sectionTitle}>{activeSection.toUpperCase()}</h1>
        <div>{renderContent()}</div>
        {isClient && (
        <img
          src="https://fastly.picsum.photos/id/705/800/1000.jpg?hmac=B4yaMDEw4yUnMYwvwKGpCz61k9acVLaWj2XoM83Ycm8"
          alt="Beautiful Scenery"
          width="800"
          height="1000"
          loading="lazy"
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px' }}
        />
      )}
      </main>
    </div>
  );
}

const styles = {
  header: {
    background: '#333',
    color: '#fff',
    padding: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  hamburger: {
    fontSize: '1.5rem',
    background: 'transparent',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
  nav: {
    flexDirection: 'column',
    position: 'absolute',
    top: '60px',
    right: '1rem',
    background: '#444',
    padding: '1rem',
    borderRadius: '0.5rem',
    zIndex: 1000,
  },
  navItem: {
    margin: '0.5rem 0',
    color: '#fff',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  main: {
    padding: '2rem',
  },
  sectionTitle: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
};
