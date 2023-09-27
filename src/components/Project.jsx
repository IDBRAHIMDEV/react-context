import React, { useContext } from 'react'
import ProductForm from './ProductForm'
import Products from './Products'
import AppContext from '../AppContext'
import Spinner from './Spinner'

const Project = () => {

  const { isLoading } = useContext(AppContext)

  return (
    <>
    
    { isLoading && (
      <div className="row my-5">
        <div className="col-12 text-center">
          <Spinner />
        </div>
      </div>
    )}
    
    <div className="row my-3">
        <div className="col-6 my-3 mx-auto">
            <h1 className="text-center my-3">Create a Course</h1>
            <ProductForm />
        </div>
    </div>
    <div className="row my-3">
        <div className="col-12 my-4">
            <h1 className="text-center my-3">List of Courses</h1>
        
            <Products />
        </div>
    </div>
        
    </>
  )
}

export default Project