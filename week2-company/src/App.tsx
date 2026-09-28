import React from 'react';

function App() {
  const stats = [
    { id: 1, title: 'Total Projects', value: 20 },
    { id: 2, title: 'Total Clients', value: 10 },
    { id: 3, title: 'Total Tasks', value: 33 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Company Dashboard</h1>
        <p className="text-gray-600">Welcome to your project overview</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.id} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-indigo-500">
            <h2 className="text-gray-500 text-sm font-medium uppercase">{stat.title}</h2>
            <p className="text-3xl font-bold text-gray-800 mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h2>
        <p className="text-gray-600">Dashboard is configured and ready for production tasks.</p>
      </div>
    </div>
  );
}

export default App;