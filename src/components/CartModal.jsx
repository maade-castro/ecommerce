import React from 'react';

const CartModal = ({ isOpen, onClose, allProducts, setAllProducts, total, countProducts, setCountProducts, setTotal }) => {
  if (!isOpen) return null;

  const onDeleteProduct = (product) => {
    const results = allProducts.filter(item => item.id !== product.id);

    setTotal(total - product.price * product.quantity);
    setCountProducts(countProducts - product.quantity);
    setAllProducts(results);
  };

  const onCleanCart = () => {
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
    onClose(); 

    toast.info('El Carrito esta Vacio');
  };

  return (
    <div className="cart-modal-overlay">
      <div className="cart-modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <div className="row-product">
          {allProducts.map(product => (
            <div className='cart-product' key={product.id}>
              {/* ... contenido del producto en el carrito ... */}
              <span className="delete-button" onClick={() => onDeleteProduct(product)}>
                Eliminar
              </span>
            </div>
          ))}
        </div>
        <div className='cart-total'>
          <h3>Total:</h3>
          <span className="total-pagar">${total}</span>
        </div>
        <button className="btn-clear-all" onClick={onCleanCart}>
          Vaciar Carrito
        </button>
      </div>
    </div>
  );
};

export default CartModal;
