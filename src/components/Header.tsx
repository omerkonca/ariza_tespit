import React from 'react';
import { Car, Wrench } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <div className="header">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
        <Car size={48} />
        <Wrench size={48} />
      </div>
      <h1>Arıza Tespit Uygulaması</h1>
      <p>Aracınızın arızasını hızlı ve kolay bir şekilde tespit edin</p>
    </div>
  );
};

export default Header;
