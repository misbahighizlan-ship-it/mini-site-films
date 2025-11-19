import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess("");

    if (!name || !email || !message) {
      return alert("Tous les champs sont obligatoires !");
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      return alert("Email invalide !");
    }

    setSuccess("Votre message a bien été envoyé !");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div class="contact-container">
      <h1>Contact</h1>

      <form onSubmit={handleSubmit} class="contact-form">
        <label>Nom</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />

        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Message</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} />

        <button type="submit">Envoyer</button>
      </form>

      {success && <p class="success">{success}</p>}
    </div>
  );
}

export default Contact;