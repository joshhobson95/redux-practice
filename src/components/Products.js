import React, {useState} from 'react'
import { useSelector } from 'react-redux';

const initialProducts = [
    {name: 'eggs', cost: 19.99},
    {name: 'pants', cost: 9.99},
    {name: 'paper plates', cost: 5.99}
]





const Products = () => {
    const [products] = useState(initialProducts);


    //This is copy and pasted from filter because it is doing the exact same thing. We are using the filter state and setFilter action in both places in the same way. We renamed this filterBy just for clarity.
    const filterBy = useSelector((state) => state.productFilter.filter)
    


  return (
    <div style={{background: 'orange'}}>
        {products
        .filter((product) =>
        filterBy ? product.name.includes(filterBy) : true)
        .map((product) => (
            <div key={product.name}>
                {product.name} @ {product.cost}
                 </div>
        ))}
    
        </div>
  )
}

export default Products