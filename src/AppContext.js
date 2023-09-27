import { createContext, useReducer, useState } from "react";
import ProductReducer, {initState} from "./reducers/ProductReducer";
import { getProducts, postProduct, deleteProduct } from './services/ProductService'

const AppContext = createContext(null)

export const ProductProvider = ({children}) => {

    const [state, dispatch] = useReducer(ProductReducer, initState)

    const [isLoading, setIsLoading] = useState([])

    const values = {postProduct, getProducts, state, dispatch, deleteProduct, isLoading, setIsLoading}

    return <AppContext.Provider value={values}>
        {children}
    </AppContext.Provider>

}


export default AppContext