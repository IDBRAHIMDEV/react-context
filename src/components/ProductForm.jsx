import React from 'react'

const ProductForm = () => {
  return (
    <>
    
        <div className="form-group my-2">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" className="form-control" />
        </div>
        <div className="form-group my-2">
            <label htmlFor="body">Body</label>
            <textarea id="body" cols="30" rows="10" className="form-control"></textarea>
        </div>
        <div className="d-grid m-2">
            <button className="btn btn-primary">Save</button>
        </div>
    </>
  )
}

export default ProductForm