import React, { useState } from 'react';

export default function Footer() {
  const [abonne, setAbonne] = useState(false);

  const handleClick = () => {
    setAbonne(true);

  
    setTimeout(() => {
      setAbonne(false); 
    }, 1000 ); 
  };

  return (
    <footer className="footer">
      <p>© 2025 Epicentre Films</p>
      <p className="plus">Contactez-nous pour plus d’informations</p>

      <button
        className={`abonner ${abonne ? "abonne-animation" : ""}`}
        onClick={handleClick}
      >
        {abonne ? "✔🔔 Abonné(e) " : "S'abonner"}
      </button>
    </footer>
  );
}
