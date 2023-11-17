import { useState } from 'react'
import React  from 'react'
import { ProductList } from '../components/ProductList'

export const Home = ({ allProducts, setAllProducts, total, setTotal, countProducts, setCountProducts }) => {

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
