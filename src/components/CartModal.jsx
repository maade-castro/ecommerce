import React, { useEffect } from 'react';

const CartModal = ({ isOpen, onClose, allProducts, setAllProducts, total, countProducts, setCountProducts, setTotal }) => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Escape') {
        onClose(); // Cierra el modal al presionar la tecla ESC
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [onClose]);

  const handleOverlayClick = (event) => {
    if (event.target.classList.contains('cart-modal-overlay')) {
      onClose(); // Cierra el modal al hacer clic fuera del contenido
    }
  };

  const onDeleteProduct = (product) => {
    const results = allProducts.filter(item => item.id !== product.id);

    setTotal(total - product.price * product.quantity || 0 );
    setCountProducts(countProducts - product.quantity);
    setAllProducts(results);
  };

  const onCleanCart = () => {
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
    onClose(); // Cierra el modal al vaciar el carrito
  };

  const onIncrementQuantity = (product) => {
    const products = allProducts.map(item =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );

    setTotal(total + product.price || 0);
    setCountProducts(countProducts + 1);
    setAllProducts(products);
  };

  const onDecrementQuantity = (product) => {
    if (product.quantity > 1) {
      const products = allProducts.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      );

      setTotal(total - product.price || 0 );
      setCountProducts(countProducts - 1);
      setAllProducts(products);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="cart-modal-overlay" onClick={handleOverlayClick}>
          <div className="cart-modal-content">
            <span className="close-button" onClick={onClose}>&times;</span>
            <div className="row-product">
              {allProducts.map(product => (
                <div className='cart-product' key={product.id}>
                  <div className="info-cart-product">
                    <span className="cantidad-producto-carrito">{product.quantity}</span>
                    <p className="titulo-producto-carrito">{product.nameProduct}</p>
                    <span className="precio-producto-carrito">${product.price * product.quantity}</span>
                  </div>
                  <div className="quantity-buttons">
                    <button className="quantity-button" onClick={() => onDecrementQuantity(product)}>-</button>
                    <button className="quantity-button" onClick={() => onIncrementQuantity(product)}>+</button>
                  </div>
                  <span className="delete-button" onClick={() => onDeleteProduct(product)}>
                    Eliminar
                  </span>
                </div>
              ))}
            </div>
            <div className='cart-total'>
              <h3>Total:</h3>
              <span className="total-pagar">${total }</span>
            </div>
            <button className="btn-clear-all" onClick={onCleanCart}>
              Vaciar Carrito
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CartModal;
