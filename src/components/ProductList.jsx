import React from 'react'
import { data } from '../data'

export const ProductList = ({allProducts, setAllProducts, countProducts, setCountProducts, total, setTotal}) => {

  const onAddProduct= (product) =>{

    if (allProducts.find(item => item.id === product.id)){

      const products = allProducts.map(item => item.id === product.id ? {...item, quantity: 
        item.quantity + 1} : item );

        setTotal(total + product.price * product.quantity);
        setCountProducts(countProducts + product.quantity);
        return setAllProducts([...products]);
    }

    setTotal(total + product.price * product.quantity);
    setCountProducts(countProducts + product.quantity);
    setAllProducts([...allProducts, product]);
  };

  return (
    <div className='container-items'>
      {
        data.map(product => (
          <div className="item" key={product.id}>
            <figure>
					<img
						src= {product.urlImage}
						alt={product.nameProduct}
					/>
				</figure>
				<div className="info-product">
					<h2> {product.nameProduct} </h2>
          <p className='description'> {product.description} </p>
					<p className="price">$ {product.price} </p>
					<button onClick={() => onAddProduct (product)}
           className="btn-add-cart">Añadir al carrito</button>
				</div>
          </div>
        ))
      }
    </div>
  )
}
