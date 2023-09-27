import React, { useContext, useState } from 'react'
import AppContext from '../AppContext'

const ProductForm = () => {

    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [body, setBody] = useState('')

    const {postProduct, dispatch, setIsLoading} = useContext(AppContext)

    const submit = (e) => {
        e.preventDefault()
        setIsLoading(true)
        postProduct({title, image, body})
            .then(({data}) => {
                dispatch({
                    type: "ADD_PRODUCT",
                    payload: data
                })
                setTitle('')
                setImage('')
                setBody('')

                setTimeout(() => {

                    setIsLoading(false)
                }, 2000)
            })
            .catch(err => console.error(err))

    }

  return (
    <>
        <form onSubmit={submit}>
            <div className="form-group my-2">
                <label htmlFor="title">Title</label>
                <input value={title} onChange={ (e) => setTitle(e.target.value) } type="text" id="title" className="form-control" />
            </div>
            <div className="form-group my-2">
                <label htmlFor="image">Image</label>
                <input value={image} onChange={ (e) => setImage(e.target.value) } type="url" id="image" className="form-control" />
            </div>
            <div className="form-group my-2">
                <label htmlFor="body">Body</label>
                <textarea value={body} onChange={ (e) => setBody(e.target.value) } id="body" cols="30" rows="10" className="form-control"></textarea>
            </div>
            <div className="d-grid m-2">
                <button className="btn btn-primary">Save</button>
            </div>
        </form>
    </>
  )
}

export default ProductForm