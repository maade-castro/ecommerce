import { useState } from "react";
import { productFormDictionary } from "../components/utils/productFormDictionary";
import { toast } from "react-toastify";


const ProductForm = ({fetchData}) => {
  const [productFormValues, setProductFormValues] = useState({
    nombre: "",
    description: "",
    price: 0,
    stock: '',
    img: null,
  });
  const handleUpdateProductFormValues = (value, inputReference) => {
    if (inputReference === productFormDictionary.NOMBRE) {
      setProductFormValues((prevState) => ({ ...prevState, name: value }));
    }
    if (inputReference === productFormDictionary.DESCRIPTION) {
      setProductFormValues((prevState) => ({
        ...prevState,
        description: value,
      }));
    }
    if (inputReference === productFormDictionary.PRICE) {
      setProductFormValues((prevState) => ({ ...prevState, price: value }));

      if (inputReference === productFormDictionary.IMG) {
        setProductFormValues((prevState) => ({ ...prevState, price: value }));
      }
    }
  };

  const handleSubmitForm = async () => {
    try {
      const response = await fetch(
        'https://6553ad3a5449cfda0f2f095d.mockapi.io/api/products',
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productFormValues),
        }
      );

      if (!response.ok) {
        throw new Error('Error al agregar un producto.')
      }
      try {
        await fetchData()
      } catch (error) {
        toast.error('Error al actualizar los datos.')
      }
      toast.success('Producto Agregado con éxito.')
    } catch (error) {
        toast.error('Error al agregar un producto.')
      
    }
  };

  return (
    <div className="input-form">
      <input
        type="text"
        placeholder={"Name"}
        onChange={(e) =>
          handleUpdateProductFormValues(
            e.target.value,
            productFormDictionary.NOMBRE
          )
        }
      />
      <input
        type="text"
        placeholder={"Description"}
        onChange={(e) =>
          handleUpdateProductFormValues(
            e.target.value,
            productFormDictionary.DESCRIPTION
          )
        }
      />
      <input
        type="number"
        placeholder={"Price"}
        onChange={(e) =>
          handleUpdateProductFormValues(
            e.target.value,
            productFormDictionary.PRICE
          )
        }
      />
      <button className="add-product" onClick={handleSubmitForm}>Agregar Producto</button>
    </div>
  );
};

export default ProductForm;
