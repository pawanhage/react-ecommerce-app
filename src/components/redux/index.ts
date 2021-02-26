export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const addToCart = (product: any) => {
    return {
        type: ADD_TO_CART,
        payload: product
    };
}


export const removeFromCart = (id: string) => {
    return {
        type: REMOVE_FROM_CART,
        payload: id
    };
}

const intialState: any = {
    products: []
}

export const cartReducer = (state = intialState, action: any) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        case REMOVE_FROM_CART:
            const index = state.products.findIndex((item: any) => item.id === action.payload);
            return {
                ...state,
                products: [...state.products.slice(0, index), ...state.products.slice(index + 1, state.products.length)]
            }
        default:
            return state
    }
}

export default cartReducer;
