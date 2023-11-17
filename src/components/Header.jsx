import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartModal from './CartModal';
import { FaShoppingBag } from "react-icons/fa";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
;

export const Header = ({ allProducts, setAllProducts, total, countProducts, setCountProducts, setTotal }) => {
	

	const [isCartModalOpen, setIsCartModalOpen] = useState(false);

	const openCartModal = () => {
  setIsCartModalOpen(!isCartModalOpen);
};
	
	  const closeCartModal = () => {
		setIsCartModalOpen(false);
	  };


	  const onAddProduct = (product) => {
		if (allProducts.find(item => item.id === product.id)) {
		  const products = allProducts.map(item =>
			item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
		  );

		  setTotal(total + product.price * product.quantity);
		  setCountProducts(countProducts + product.quantity);
		  setAllProducts([...products]);
		} else {
		  setTotal(total + product.price * product.quantity);
		  setCountProducts(countProducts + product.quantity);
		  setAllProducts([...allProducts, product]);
		}
		toast.success(`Producto añadido: ${product.nameProduct}`);
	  };

	  const onDeleteProduct = (product) => {
		const results = allProducts.filter(item => item.id !== product.id);

		console.log("Product object:", product);

	
		setTotal(total - product.price * product.quantity);
		setCountProducts(countProducts - product.quantity);
		setAllProducts(results);

		toast.error(`Producto eliminado: ${product.nameProduct}`);
	  };

	  console.log(onAddProduct)

	return (
		<header>
			<h1 className='tittle'>Tienda Pop</h1>
			<nav className="navbar">
       			 <Link to="/" >Home</Link>
        		<Link to="/alta">Alta</Link>
        		<Link to="/contacto">Contacto</Link>
        		<Link to="/nosotros">Nosotros</Link>
     		 </nav>


			  <div className="container-icon">
        <div className="container-cart-icon" onClick={openCartModal}>
		<FaShoppingBag  size={34}/>

          <div className="count-products">
            <span id="contador-productos">{countProducts}</span>
          </div>
        </div>
      </div>

      <CartModal
        isOpen={isCartModalOpen}
        onClose={closeCartModal}
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
    </header>
  );
};

export default Header;




