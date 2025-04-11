import React from 'react';

const TestScrollArrow: React.FC = () => {
  return (
    <div
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{
        cursor: 'pointer',
        padding: '0.5rem 1rem',
        backgroundColor: '#007bff',
        color: 'white',
        borderRadius: '1rem',
        position: 'fixed',
        bottom: 20,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        fontWeight: 'bold',
        zIndex: 9999
      }}
    >
      Back to Top ↑
    </div>
  );
};

export default TestScrollArrow;