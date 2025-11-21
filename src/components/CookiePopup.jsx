import { useState } from "react";


export default function CookiePopup() {
  const [visible, setVisible] = useState(true);

  const acceptCookies = () => {
    setVisible(false);
  };

  return (
    visible && (
      <div className="cookie-popup">
        <p>Nous utilisons des cookies pour améliorer votre expérience.</p>
        <button onClick={acceptCookies} className="cookie-btn">
          Accepter
        </button>
      </div>
    )
  );
}
