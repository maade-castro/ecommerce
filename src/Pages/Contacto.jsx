import React, { useState } from 'react';

export const Contacto = () => {
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleNameChange = (event) => {
    const regex = /^[A-Za-z]+$/;
    const isValid = regex.test(event.target.value);
    setNameError(!isValid);
  };

  const handleEmailChange = (event) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = regex.test(event.target.value);
    setEmailError(!isValid);
  };


  
  return (
    <>
      <h1 className='tittle_form'>Formulario de Contacto</h1>
      <div className='login-box'>
        <form className="for_contact">
          <div className="user-box">
            <label>Nombre</label>
            <input
              type="text"
              placeholder='Nombre'
              onChange={handleNameChange}
              required
            />
            {nameError && <p className="error-message">Por favor, ingresa un nombre válido.</p>}

            <label>Mail</label>
            <input
              type="email"
              placeholder='e-mail'
              onChange={handleEmailChange}
              required
            />
            {emailError && <p className="error-message">Por favor, ingresa un correo electrónico válido.</p>}

            <label>Comentario</label>
            <textarea
              id="comentario"
              name="comentario"
              rows="4"
              cols="50"
              maxLength="200"
              placeholder="Máximo 200 caracteres"
            ></textarea>
          </div>
          <center>
            <a href="#">
              Enviar
              <span></span>
            </a>
          </center>
        </form>
      </div>
    </>
  );
};
