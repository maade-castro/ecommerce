import { useState } from 'react'
import React  from 'react'
import { ProductList } from '../components/ProductList'

export const Home = () => {

  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);


  return (
    <div>
        <ProductList 
   allProducts= {allProducts} 
   setAllProducts= {setAllProducts}
   total= {total}
   setTotal= {setTotal}
   countProducts={countProducts}
   setCountProducts= {setCountProducts} />
    </div>
  )
}
