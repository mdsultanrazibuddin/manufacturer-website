import { useEffect, useState } from "react";

const useProduct = () =>{
    const[product, setProduct] = useState([])
    useEffect(() => {
      fetch('https://mysterious-hamlet-70060.herokuapp.com/part')
          .then(response => response.json())
          .then(data => setProduct(data))
          
  }, []);
  return [product, setProduct]
 
}
export default useProduct;
