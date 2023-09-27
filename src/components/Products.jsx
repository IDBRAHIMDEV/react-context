import React, { useContext, useEffect } from 'react'
import ProductCard from './ProductCard'
import AppContext from '../AppContext'


const Products = () => {

    const {getProducts, setProducts, products} = useContext(AppContext)

    useEffect(() => {
        getProducts()
            .then(({data}) => {
                setProducts(data)
                console.log('products on products:', data)
            })
            .catch((err) => console.error(err))
        
    }, [])

  return (
    <>
        <div className="row">
            {products.map(product => (

                <div key={product.id} className="col-md-4">
                    <ProductCard product={product}/>
                </div>
            ))}
        </div>
    </>
  )
}

export default Products