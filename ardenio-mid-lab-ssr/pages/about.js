import React from 'react';

export default function About({ personalInfo, academicInfo, hobbies }) {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ color: '#333', marginBottom: '30px', textAlign: 'center', fontSize: '2.5rem' }}>
        About Me
      </h1>
      
      <div style={{ 
        display: 'flex', 
        gap: '30px', 
        alignItems: 'flex-start',
        marginBottom: '40px',
        flexWrap: 'wrap'
      }}>
        <div style={{ flex: '0 0 300px' }}>
          <div style={{
            width: '250px',
            height: '250px',
            backgroundColor: '#f0f0f0',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
            border: '4px solid #0070f3',
            fontSize: '4rem',
            color: '#0070f3'
          }}>
            👨‍💻
          </div>
        </div>
        
        <div style={{ flex: '1', minWidth: '300px' }}>
          <h2 style={{ color: '#2c3e50', marginBottom: '20px', fontSize: '1.8rem' }}>
            {personalInfo.name}
          </h2>
          
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ color: '#2c3e50', marginBottom: '10px', fontSize: '1.2rem' }}>Personal Information</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
              <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px' }}>
                <strong>Age:</strong> {personalInfo.age} years old
              </div>
              <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px' }}>
                <strong>Gender:</strong> {personalInfo.gender}
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ color: '#2c3e50', marginBottom: '10px', fontSize: '1.2rem' }}>Academic Information</h3>
            <div style={{ padding: '15px', backgroundColor: '#e8f4fd', borderRadius: '8px', borderLeft: '4px solid #0070f3' }}>
              <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.6' }}>
                <strong>Year Level:</strong> {academicInfo.yearLevel}<br/>
                <strong>Course:</strong> {academicInfo.course}<br/>
                <strong>Status:</strong> {academicInfo.status}
              </p>
            </div>
          </div>

          <div>
            <h3 style={{ color: '#2c3e50', marginBottom: '10px', fontSize: '1.2rem' }}>Hobbies & Interests</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {hobbies.map((hobby, index) => (
                <div 
                  key={index}
                  style={{ 
                    padding: '8px 16px', 
                    backgroundColor: '#0070f3', 
                    color: 'white', 
                    borderRadius: '20px', 
                    fontSize: '14px',
                    fontWeight: 'bold'
                  }}
                >
                  {hobby}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const personalInfo = {
    name: "Lanz Aerol C. Ardenio",
    age: 21,
    gender: "Male"
  };
  
  const academicInfo = {
  yearLevel: "4th Year",
  course: "Information Technology (IT) Student", 
  status: "Currently Enrolled - Graduating Soon!"
};

  const hobbies = [
    "Scatter",
    "Programming"
  ];

  return {
    props: {
      personalInfo,
      academicInfo,
      hobbies
    }
  };
}
