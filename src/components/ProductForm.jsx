import React, { useState } from 'react'

const ProductForm = () => {

    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [body, setBody] = useState('')

    const submit = (e) => {
        e.preventDefault()
        console.log('title', title)
        console.log('image', image)
        console.log('body', body)
    }

  return (
    <>
        <form onSubmit={submit}>
            <div className="form-group my-2">
                <label htmlFor="title">Title</label>
                <input onChange={ (e) => setTitle(e.target.value) } type="text" id="title" className="form-control" />
            </div>
            <div className="form-group my-2">
                <label htmlFor="image">Image</label>
                <input onChange={ (e) => setImage(e.target.value) } type="url" id="image" className="form-control" />
            </div>
            <div className="form-group my-2">
                <label htmlFor="body">Body</label>
                <textarea onChange={ (e) => setBody(e.target.value) } id="body" cols="30" rows="10" className="form-control"></textarea>
            </div>
            <div className="d-grid m-2">
                <button className="btn btn-primary">Save</button>
            </div>
        </form>
    </>
  )
}

export default ProductForm