import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { ProductList } from './components/ProductList'
import {Route, Routes } from 'react-router-dom';
import {Home} from './Pages/Home'
import  {Alta} from './Pages/Alta';
import {Contacto} from './Pages/Contacto'
import {Nosotros} from './Pages/Nosotros'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

    
  return (
   <> 
   <Header 
   allProducts= {allProducts} 
   setAllProducts= {setAllProducts}
   total= {total}
   setTotal= {setTotal}
   countProducts={countProducts}
   setCountProducts= {setCountProducts}
    />

    <Routes>
    <Route
          exact
          path="/"
          element={<Home 
          allProducts={allProducts} 
          setAllProducts={setAllProducts} 
          total={total} 
          setTotal={setTotal} 
          countProducts={countProducts} 
          setCountProducts={setCountProducts} />}
        />
          <Route path="/alta" element={<Alta/>} />
          <Route path="/contacto" element={<Contacto/>} />
          <Route path="/nosotros" element={<Nosotros/>} />
    </Routes>

    <ToastContainer />
   </>
  )
}

export default App
