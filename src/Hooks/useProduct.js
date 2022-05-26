import { useEffect, useState } from "react";

const useProduct = () =>{
    const[product, setProduct] = useState([])
    useEffect(() => {
      fetch('http://localhost:5000/part')
          .then(response => response.json())
          .then(data => setProduct(data))
          
  }, []);
  return [product, setProduct]
 
}
export default useProduct;
