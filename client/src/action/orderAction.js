import axios from 'axios'
export const placeOrder=(token,amount)=>async(dispacth,getstate)=>{
    dispacth({type:"PLACE_ORDER_REQUEST"})
    const currentUser=getstate().loginUserReducer.currentUser
    const cardItems=getstate().cardReducer.cardItems
    console.log(cardItems);
    try{
        const res= await axios.post('/api/orders/placeorder',{token,amount,currentUser,cardItems})
        dispacth({type:"PLACE_ORDER_SUCCESS"})
        console.log(res)
    }
    catch(error){
dispacth({type:"PLACE_ORDER_FAIL"})
console.log(error)
    }
}

export const getUserOrders=()=>async(dispacth,getstate)=>{

    const currentUser=getstate().loginUserReducer.currentUser

    dispacth({
        type:'USER_ORDER_REQUEST'
    })
    
    try{

        const response=await axios.post('/api/orders/getuserorder',{userid:currentUser._id})

        console.log(response)

        dispacth({type:'USER_ORDER_SUCCESS',payload:response.data})
        
    }

    catch(error){

        dispacth({type:'USER_ORDER_FAIL',payload:error})

    }

}









