import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      fontFamily: 'Arial, sans-serif', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '20px',
        padding: '60px 40px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        textAlign: 'center',
        maxWidth: '600px',
        width: '100%'
      }}>
        <h1 style={{ 
          color: '#2c3e50', 
          marginBottom: '10px', 
          fontSize: '2.8rem',
          fontWeight: 'bold',
          background: 'linear-gradient(45deg, #667eea, #764ba2)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          ITP110_Midterm-Laboratory-Examination
        </h1>
        
        <p style={{ 
          color: '#666', 
          marginBottom: '50px', 
          fontSize: '1.1rem',
          lineHeight: '1.6'
        }}>
          Next.js Application demonstrating Server-Side Rendering and Static Site Generation
        </p>

        <div style={{ 
          display: 'flex', 
          gap: '30px', 
          justifyContent: 'center', 
          flexWrap: 'wrap' 
        }}>
          <Link href="/news" style={{ textDecoration: 'none' }}>
            <div 
              style={{
                padding: '25px 50px',
                background: 'linear-gradient(45deg, #0070f3, #00d4ff)',
                color: 'white',
                borderRadius: '15px',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                minWidth: '220px',
                boxShadow: '0 8px 20px rgba(0, 112, 243, 0.3)',
                transform: 'translateY(0)',
                border: 'none'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-5px)';
                e.target.style.boxShadow = '0 12px 25px rgba(0, 112, 243, 0.4)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 8px 20px rgba(0, 112, 243, 0.3)';
              }}
            >
              📰 News (SSR)
            </div>
          </Link>

          <Link href="/about" style={{ textDecoration: 'none' }}>
            <div 
              style={{
                padding: '25px 50px',
                background: 'linear-gradient(45deg, #28a745, #20c997)',
                color: 'white',
                borderRadius: '15px',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                minWidth: '220px',
                boxShadow: '0 8px 20px rgba(40, 167, 69, 0.3)',
                transform: 'translateY(0)',
                border: 'none'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-5px)';
                e.target.style.boxShadow = '0 12px 25px rgba(40, 167, 69, 0.4)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 8px 20px rgba(40, 167, 69, 0.3)';
              }}
            >
              👤 About (SSG)
            </div>
          </Link>
        </div>

        <div style={{
          marginTop: '40px',
          padding: '20px',
          backgroundColor: '#f8f9fa',
          borderRadius: '10px',
          border: '1px solid #e9ecef'
        }}>
          <p style={{ 
            color: '#666', 
            fontSize: '0.9rem',
            margin: '0',
            fontStyle: 'italic'
          }}>
            Built with Next.js • Server-Side Rendering & Static Site Generation
          </p>
        </div>
      </div>
    </div>
  );
}
