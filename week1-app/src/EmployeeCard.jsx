import React from 'react';

function EmployeeCard({ name, role, department }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      marginBottom: '10px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      backgroundColor: '#fff',
      color: '#333'
    }}>
      <h3 style={{ margin: '0 0 8px 0', color: '#0070f3' }}>{name}</h3>
      <p style={{ margin: '4px 0' }}><strong>Role:</strong> {role}</p>
      <p style={{ margin: '4px 0' }}><strong>Department:</strong> {department}</p>
    </div>
  );
}

export default EmployeeCard;