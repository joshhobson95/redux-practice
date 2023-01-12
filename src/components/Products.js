import React, {useState} from 'react'

const initialProducts = [
    {name: 'eggs', cost: 19.99}
    {name: 'pants', cost: 9.99},
    {name: 'paper plates', cost: 5.99}
]





const Products = () => {

    const [products] = useState(initialProducts);
    


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