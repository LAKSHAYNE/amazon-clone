export const initialState={
    basket:[],
};

export const getBasketTotal =(basket)=>basket?.reduce((amount,item)=>item.price+amount,0);//0 isthe initial value of amount

const reducer =(state,action)=>{
    
    switch(action.type){
        case "ADD_TO_BASKET":
            return{
                basket:[...state.basket,action.item],
            };

        case "REMOVE_FROM_BASKET":
            const index=state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];

            if(index>=0){
                newBasket.splice(index,1);//at index remove 1 item
            }
            else{
                console.warn(
                    'cant remove the item as not in basket'
                )
            }

            return{
                ...state,
                basket:newBasket
            }

        default:
            return state;
    }
} 
export default reducer;