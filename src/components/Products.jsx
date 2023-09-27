import React, { useContext, useEffect } from 'react'
import ProductCard from './ProductCard'
import AppContext from '../AppContext'


const Products = () => {

    const {getProducts, state, dispatch, products, setIsLoading} = useContext(AppContext)

    useEffect(() => {

        setIsLoading(true)

        getProducts()
            .then(({data}) => {
                dispatch({
                    type: 'GET_PRODUCTS',
                    payload: data
                })

                setTimeout(() => {
                    setIsLoading(false)
                }, 2000)

            })
            .catch((err) => console.error(err))
        
    }, [])

  return (
    <>
        <div className="row">
            {state.products.map(product => (

                <div key={product.id} className="col-md-4">
                    <ProductCard product={product}/>
                </div>
            ))}
        </div>
    </>
  )
}

export default Products