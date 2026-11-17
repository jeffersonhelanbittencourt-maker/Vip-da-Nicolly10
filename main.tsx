import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => (
  <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif' }}>
    <h1 style={{ fontSize: '2.5rem', color: '#ec4899', marginBottom: '1rem' }}>VIP da Nicolly</h1>
    <p>Sistema online e estruturado corretamente.</p>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
