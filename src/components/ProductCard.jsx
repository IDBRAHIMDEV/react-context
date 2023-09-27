import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div className="card my-2">
        <img className="card-img-top" src={product.image} alt={product.title} />
        <div className="card-body">
            <h4 className="card-title">{product.title}</h4>
            <p className="card-text">{product.body}</p>
        </div>
    </div>
  )
}

export default ProductCard