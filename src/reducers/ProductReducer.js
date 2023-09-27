
export const initState = {
    isLoading: true,
    products: []
}

const ProductReducer = (state, action) => {

    switch (action.type) {
        case "GET_PRODUCTS":
            return {
                ...state,
                products: action.payload
            }
            
        case "ADD_PRODUCT":
            return {
                ...state,
                products: [...state.products, action.payload]
            }

        case "DELETE_PRODUCT":
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload)
            }
    
        default:
            break;
    }
}

export default ProductReducer