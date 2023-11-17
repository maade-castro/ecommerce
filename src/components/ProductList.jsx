import React, { useState, useEffect } from 'react';


export const ProductList = ({allProducts, setAllProducts, countProducts, setCountProducts, total, setTotal}) => {

  const apiUrl = 'https://6553ad3a5449cfda0f2f095d.mockapi.io/api/products';

  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setApiData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); 

  
  const onAddProduct = (product) => {
   
    if (allProducts.find(item => item.id === product.id)) {
      const products = allProducts.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );

      setTotal(total + product.price);
      setCountProducts(countProducts + 1);
      return setAllProducts([...products]);

    }

    setTotal(total + product.price);
    setCountProducts(countProducts + 1);
    setAllProducts([...allProducts, { ...product, quantity: 1 }]);
  };
 
  return (
    <div className='container-items'>
      {apiData.map(product => (
        <div className="item" key={product.id}>
          <figure>
            <img src={product.urlImage} alt={product.nameProduct} />
          </figure>
          <div className="info-product">
            <h2>{product.nameProduct}</h2>
            <p className='description'>{product.description}</p>
            <p className="price">$ {product.price}</p>
            <button onClick={() => onAddProduct(product)} className="btn-add-cart">
              Añadir al carrito
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;