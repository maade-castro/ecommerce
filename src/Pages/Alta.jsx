import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Alta = () => {
  const [nombreError, setNombreError] = useState(false);
  const [descripcionError, setDescripcionError] = useState(false);
  const [precioError, setPrecioError] = useState(false);
  const [stockError, setStockError] = useState(false);

  const handleNombreChange = (event) => {
    // Permite espacios, caracteres especiales, mayúsculas y sin números
    const regex = /^[A-Za-z\s!@#$%^&*(),.?":{}|<>]+$/;
    setNombreError(!regex.test(event.target.value));
  };  

  const handleDescripcionChange = (event) => {
    // Permite caracteres especiales, hasta 20 letras, espacios, mayúsculas y excluye números
    const regex = /^[A-Za-z\s!@#$%^&*(),.?":{}|<>]{0,20}$/;
    setDescripcionError(!regex.test(event.target.value));
  };  

  const handlePrecioChange = (event) => {
    // Debe empezar con $ o € seguido de solo números y opcionalmente un punto decimal y dígitos para los centavos
    const regex = /^(?:\$|€)[\d]+(?:\.\d+)?$/;
    setPrecioError(!regex.test(event.target.value));
  };
    
  const handleStockChange = (event) => {
    // Permite solo números, sin espacios
    const regex = /^[0-9]+$/;
    setStockError(!regex.test(event.target.value));
  };
  


  const handleSubmit = (event) => {
    event.preventDefault();

    // Verificar errores en los campos antes de enviar
    if (!nombreError && !descripcionError && !precioError && !stockError) {
      // Lógica de envío exitosa
      toast.success('Formulario añadido exitosamente', { position: toast.POSITION.TOP_RIGHT });
    } else {
      // Mostrar mensaje de error
      toast.error('Error: Por favor, completa correctamente todos los campos', { position: toast.POSITION.TOP_RIGHT });
    }
  };

  return (
    <>
      <h1 className='tittle_form'>Alta de Productos</h1>

      <div className="form_container">
        <form className="form_alta" onSubmit={handleSubmit}>

          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            placeholder='Nombre'
            required
            id='nombre'
            onChange={handleNombreChange}
          />
          {nombreError && <p className="error-message">Por favor, ingresa un nombre válido.</p>}

          <label htmlFor="description">Descripcion</label>
          <input
            type="text"
            placeholder='20 Caracteres'
            required
            id='description'
            onChange={handleDescripcionChange}
          />
          {descripcionError && <p className="error-message">Por favor, ingresa una descripción válida.</p>}

          <label htmlFor="precio">Precio</label>
          <input
            type="text"
            placeholder='$ + monto'
            required
            id='precio'
            onChange={handlePrecioChange}
          />
          {precioError && <p className="error-message">Por favor, ingresa un precio válido.</p>}

          <label htmlFor="stock">Stock</label>
          <input
            type="text"
            placeholder='Cantidad de Productos'
            required
            id='stock'
            onChange={handleStockChange}
          />
          {stockError && <p className="error-message">Por favor, ingresa una cantidad de stock válida.</p>}

          <label htmlFor="img">Imagen</label>
          <input
            type="file"
            placeholder='Inserte una Imagen'
            required
            id='img'
          />
          <div className="info-product">
            <button type="submit">Añadir</button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};
