import React from 'react';

export default function News({ articles }) {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ color: '#333', marginBottom: '30px', textAlign: 'center', fontSize: '2.5rem' }}>
        Philippines Flood Control Project Scandal
      </h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        {articles.map((article, index) => (
          <div 
            key={index} 
            style={{ 
              border: '1px solid #ddd', 
              padding: '25px', 
              borderRadius: '12px',
              backgroundColor: '#f9f9f9',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              display: 'flex',
              gap: '20px',
              alignItems: 'flex-start'
            }}
          >
            <div style={{ flex: '0 0 300px' }}>
              <img 
                src={article.image} 
                alt={article.title}
                style={{ 
                  width: '100%', 
                  height: '200px', 
                  objectFit: 'cover', 
                  borderRadius: '8px',
                  border: '1px solid #ddd'
                }}
              />
            </div>
            <div style={{ flex: '1' }}>
              <div style={{ 
                display: 'inline-block', 
                backgroundColor: '#0070f3', 
                color: 'white', 
                padding: '4px 12px', 
                borderRadius: '20px', 
                fontSize: '12px', 
                fontWeight: 'bold',
                marginBottom: '10px'
              }}>
                {article.category}
              </div>
              <h2 style={{ 
                color: '#2c3e50', 
                marginBottom: '15px', 
                fontSize: '1.4rem',
                lineHeight: '1.3'
              }}>
                {article.title}
              </h2>
              <p style={{ 
                color: '#555', 
                fontSize: '16px', 
                lineHeight: '1.6',
                marginBottom: '15px'
              }}>
                {article.content}
              </p>
              <div style={{ 
                display: 'flex', 
                gap: '20px', 
                flexWrap: 'wrap',
                marginTop: '10px',
                alignItems: 'center'
              }}>
                <p style={{ 
                  color: '#666', 
                  fontSize: '14px',
                  fontStyle: 'italic',
                  margin: '0'
                }}>
                  Published: {article.publishedDate}
                </p>
                <p style={{ 
                  color: '#888', 
                  fontSize: '13px',
                  margin: '0'
                }}>
                  Time: {article.timestamp.split(' ')[1]}
                </p>
                <p style={{ 
                  color: '#0070f3', 
                  fontSize: '12px',
                  margin: '0',
                  fontWeight: 'bold'
                }}>
                 
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const now = new Date();
  const today = now.toISOString().split('T')[0]; 
  const currentTime = now.toTimeString().split(' ')[0]; 
  

  const yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);
  const twoDaysAgo = new Date(now);
  twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
  
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const articles = [
    {
      title: "DPWH Uncovers 421 Ghost Flood Control Projects Nationwide",
      timestamp: "2025-10-09 17:02:00",
      publishedDate: "October 9, 2025",
      content: "The Department of Public Works and Highways (DPWH) has uncovered at least 421 ghost flood control projects across the country, according to Secretary Vince Dizon. The projects were discovered after validation of around 8,000 DPWH projects in coordination with the Department of National Defense, Armed Forces of the Philippines, Philippine National Police, and the Department of Economy, Planning, and Development. Most of the ghost projects were located in Luzon, with congressional probes and surprise ocular inspections by President Ferdinand Marcos Jr. in August pointing to non-existent flood control projects in Bulacan.",
      image: "https://www.rappler.com/tachyon/2025/09/DPWH-building-facade.jpeg?resize=1280%2C720&zoom=1",
      category: "Infrastructure",
    },
    {
      title: "Philippines Flood Control Scam: 421 of 8,000 Are Ghost Projects",
      timestamp: "2025-10-09 14:30:00",
      publishedDate: "October 9, 2025",
      content: "A massive flood control scam has been uncovered in the Philippines, with 421 out of 8,000 projects being identified as ghost projects. The Independent Commission for Infrastructure (ICI) has recommended reducing the spending authority of DPWH regional and district offices for civil works projects. Regional engineering offices can currently approve projects worth up to P400 million, which the ICI wants to reduce to P200 million. District engineering offices have a P150 million limit that would be reduced to P75 million under the new proposal.",
      image: "https://th.bing.com/th?id=OVFT.2rxMz_BDev4vBSSb1fIVQC&pid=News&w=234&h=132&c=14&rs=2&qlt=90&dpr=1.6",
      category: "Government",
    },
    {
      title: "DOJ Turns Over 5 More Flood Control Project-Related Cases to Ombudsman",
      timestamp: "2025-10-14 10:15:00",
      publishedDate: "October 14, 2025",
      content: "The Department of Justice (DOJ) has turned over five additional flood control project-related cases to the Office of the Ombudsman for further investigation. This comes as part of the government's intensified anti-corruption drive following the discovery of widespread irregularities in flood control projects. The cases involve alleged anomalies in project implementation, including substandard work and questionable procurement processes. The Ombudsman is expected to conduct thorough investigations into these cases to ensure accountability and proper implementation of flood control infrastructure.",
      image: "https://businessmirror.com.ph/wp-content/uploads/2025/09/top01-091825.jpg",
      category: "Legal",
    }
  ];

  // Simulate a small delay to show SSR is working
  await new Promise(resolve => setTimeout(resolve, 100));

  return {
    props: {
      articles
    }
  };
}
