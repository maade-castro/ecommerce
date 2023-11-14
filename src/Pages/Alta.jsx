import React from 'react'

export const Alta = () => {
  return (
    <>
        <h1 className='tittle_form'>Alta de Productos</h1>

        <div className="form_container">
        <form className="form_alta">

        <label htmlFor="">Nombre</label>
        <input 
        type="text"
        placeholder='Nombre'
        required 
        id='nombre'/>

        <label htmlFor="">Descripcion</label>
        <input 
        type="text" 
        placeholder='Descripcion'
        required
        id='description'/>

        <label htmlFor="">Precio</label>
        <input 
        type="text"
        placeholder='Precio$'
        required 
        id='precio'/>

        <label htmlFor="">Stock</label>
        <input 
        type="text"
        placeholder='Cantidad de Productos'
        required 
        id='stock'/>

        <label htmlFor="">Imagen</label>
        <input 
        type="file"
        placeholder='Inserte una Imagen'
        required
        id='img'/>
          <div className="info-product">
        <button type="submit" >Añadir</button>
        </div>
        </form>
        </div>
    </>
  )
}
