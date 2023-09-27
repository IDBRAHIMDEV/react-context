import React, { useContext } from 'react'
import AppContext from '../AppContext'

const ProductCard = ({product}) => {
    const { deleteProduct, dispatch } = useContext(AppContext)
    const destroyProduct = (id) => {
        deleteProduct(id)

            .then(res => dispatch({
                type: "DELETE_PRODUCT",
                payload: id
            }))
            
            .catch(err => console.log(err))

    }
  return (
    <div className="card">
        <img className="card-img-top" src={product.image} alt={product.title} />
        <div className="card-body">
            <h4 className="card-title">{product.title}</h4>
            <p className="card-text">{product.body}</p>
            <div className="my-2 text-center">
                <button onClick={() => destroyProduct(product.id) } className="btn btn-sm btn-danger">Delete</button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard