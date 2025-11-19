import React from 'react'

export default function Contact() {
  return (
    <form className="contact">
      <h2>Contactez-nous pour plus d'informations</h2>
      <label for="name"> Nom :</label>
      <input type="text" id="name" name="name" placeholder='entrer votre nom' />

      <label for="email"> Email:</label>
      <input type="email" id="email" name="email" placeholder='entrer votre email' />
      <label > votre message : </label>
      <textarea id="text" name=" text" rows="6" placeholder="Écrivez votre message ici..."> </textarea>
      <button class="btn-form" type="button">envoyer</button>

    </form>
  )
}
