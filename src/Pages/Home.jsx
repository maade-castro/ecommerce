import React  from 'react'
import { ProductList } from '../components/ProductList'
import { Alta } from './Alta';


export const Home = ({ allProducts, setAllProducts, total, setTotal, countProducts, setCountProducts, onAddNewProduct }) => {

  return (
    <div>
        <ProductList 
   allProducts= {allProducts} 
   setAllProducts= {setAllProducts}
   total= {total}
   setTotal= {setTotal}
   countProducts={countProducts}
   setCountProducts= {setCountProducts}
   onAddNewProduct={onAddNewProduct} />
   
    </div>
  )
}
