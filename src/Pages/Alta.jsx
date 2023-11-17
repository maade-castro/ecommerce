import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Alta = ({ addNewProduct, onAddNewProduct }) => {
  const [nombreError, setNombreError] = useState(false);
  const [descripcionError, setDescripcionError] = useState(false);
  const [precioError, setPrecioError] = useState(false);
  const [stockError, setStockError] = useState(false);
  const [formValues, setFormValues] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    stock: ''
  });

  const handleNombreChange = (event) => {
    const regex = /^[A-Za-z\s!@#$%^&*(),.?":{}|<>]+$/;
    setNombreError(!regex.test(event.target.value));
    handleInputChange('nombre', event.target.value);
  };

  const handleDescripcionChange = (event) => {
    const regex = /^[A-Za-z\s!@#$%^&*(),.?":{}|<>]{0,20}$/;
    setDescripcionError(!regex.test(event.target.value));
    handleInputChange('descripcion', event.target.value);
  };

  const handlePrecioChange = (event) => {
    const regex = /^(?:\$|€)[\d]+(?:\.\d+)?$/;
    setPrecioError(!regex.test(event.target.value));
    handleInputChange('precio', event.target.value);
  };

  const handleStockChange = (event) => {
    const regex = /^[0-9]+$/;
    setStockError(!regex.test(event.target.value));
    handleInputChange('stock', event.target.value);
  };

  const handleInputChange = (field, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [field]: value
    }));
  };

  

  const handleSubmit = (event) => {
    event.preventDefault();

    // Verificar errores en los campos antes de enviar
    const hayErrores = nombreError || descripcionError || precioError || stockError;

    if (!hayErrores) {
      // Lógica de envío exitosa
      const nuevoProducto = {
        id: Date.now(),
        nameProduct: formValues.nombre,
        description: formValues.descripcion,
        price: parseFloat(formValues.precio.replace(/[^\d.]/g, '')),
        quantity: parseInt(formValues.stock, 10),
        urlImage: '' // Añade lógica para manejar la imagen si es necesario
      };

      // Añadir el nuevo producto
      addNewProduct(nuevoProducto);

      // Limpiar el formulario
      setFormValues({
        nombre: '',
        descripcion: '',
        precio: '',
        stock: ''
      });

      // Mostrar notificación de éxito
      toast.success('Formulario añadido exitosamente', { position: toast.POSITION.TOP_RIGHT });

      // Llama a la función para agregar el nuevo producto en ProductList.jsx
      onAddNewProduct(nuevoProducto);
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
            value={formValues.nombre}
          />
          {nombreError && <p className="error-message">El nombre no puede contener números ni caracteres especiales</p>}

          <label htmlFor="description">Descripcion</label>
          <input
            type="text"
            placeholder='20 Caracteres'
            required
            id='description'
            onChange={handleDescripcionChange}
            value={formValues.descripcion}
          />
          {descripcionError && <p className="error-message">Por favor, ingresa una descripción válida.</p>}

          <label htmlFor="precio">Precio</label>
          <input
            type="text"
            placeholder='$ + monto'
            required
            id='precio'
            onChange={handlePrecioChange}
            value={formValues.precio}
          />
          {precioError && <p className="error-message">Inicie con "$" seguido del monto sin espacios</p>}

          <label htmlFor="stock">Stock</label>
          <input
            type="text"
            placeholder='Cantidad de Productos'
            required
            id='stock'
            onChange={handleStockChange}
            value={formValues.stock}
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
