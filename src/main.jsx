import React from 'react';
import { createRoot } from 'react-dom/client';
import { ConfigProvider } from 'antd';
import ptBR from 'antd/locale/pt_BR';
import App from './App.jsx';
import './styles.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider
      locale={ptBR}
      theme={{
        token: {
          colorPrimary: '#2563EB',
          colorInfo: '#2563EB',
          borderRadius: 8,
          fontFamily:
            "'Fira Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        },
        components: {
          Card: { headerFontSize: 15 },
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
