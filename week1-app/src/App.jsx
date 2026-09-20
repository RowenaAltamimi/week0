import React, { useState } from 'react';
import EmployeeCard from './EmployeeCard';

const initialEmployees = [
  { id: 1, name: 'Htoon Salman', role: 'Frontend Developer', department: 'IT' },
  { id: 2, name: 'Mohamed Khalid', role: 'UI/UX Designer', department: 'Design' },
  { id: 3, name: 'Seba Musallm', role: 'Backend Developer', department: 'IT' },
  { id: 4, name: 'Fatimah Hamd', role: 'Project Manager', department: 'Management' },
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEmployees = initialEmployees.filter((employee) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      employee.name.toLowerCase().includes(searchLower) ||
      employee.role.toLowerCase().includes(searchLower) ||
      employee.department.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', fontFamily: 'Arial, sans-serif', padding: '0 20px' }}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>Employee Directory</h2>
      
      <input
        type="text"
        placeholder="Search by name, role, or department..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: '100%',
          padding: '12px',
          marginBottom: '20px',
          borderRadius: '6px',
          border: '1px solid #ccc',
          fontSize: '16px',
          boxSizing: 'border-box'
        }}
      />

      <div>
        {filteredEmployees.length > 0 ? (
          filteredEmployees.map((employee) => (
            <EmployeeCard
              key={employee.id}
              name={employee.name}
              role={employee.role}
              department={employee.department}
            />
          ))
        ) : (
          <p style={{ textAlign: 'center', color: '#888' }}>No employees found matching your search.</p>
        )}
      </div>
    </div>
  );
}

export default App;