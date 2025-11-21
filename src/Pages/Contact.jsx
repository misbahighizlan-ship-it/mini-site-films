import React, { useState } from 'react';
import "../index.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [formMessage, setFormMessage] = useState("");

  const update = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !text.trim()) {
      setFormMessage("❌ Veuillez remplir tous les champs.");
      
      setTimeout(() => {
        setFormMessage("");
      }, 4000);

      return;
    }

    setFormMessage("✔️ Message envoyé avec succès !");
    setName("");
    setEmail("");
    setText("");

    setTimeout(() => {
      setFormMessage("");
    }, 1000);
  };

  return (
    <div className='formcontact'>
  <div className="form-container"> 
    <div className="contactform">
      <form className="contact" onSubmit={update}>
        <h2>Contactez-nous pour plus d'informations</h2>

        <label htmlFor="name">Nom :</label>
        <input
          type="text"
          id="name"
          placeholder="Entrez votre nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          placeholder="Entrez votre e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="text">Votre message :</label>
        <textarea
          id="text"
          rows="6"
          placeholder="Écrivez votre message ici…"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        <button className="btn-form" type="submit">Envoyer</button>
      </form>

      <div id="formMessage">
        {formMessage && <p>{formMessage}</p>}
      </div>
    </div>
    </div>
    </div>
  );
}
