import axios from "axios";


export const GetOrder = async() => {
    let config = { headers: {"authorization": localStorage.getItem('token') } }
   let {data} = await axios.get('https://nice-puce-ox-coat.cyclic.cloud/order/myorders',config)
   return data
}

export const GetallOrder = async() => {
  
   let {data} = await axios.get('https://nice-puce-ox-coat.cyclic.cloud/order/getallorders')
   return data
}


export const PlaceOrder = async(body)=> {
    
    let config = { headers: {"authorization": localStorage.getItem('token') } }
    let {data} = await axios.post('https://nice-puce-ox-coat.cyclic.cloud/order/checkout',body,config)
    return data
}


export const  updateOrder =async(id,body)=> {
    console.log(id,body)
    let {data} = await axios.patch(`https://nice-puce-ox-coat.cyclic.cloud/order/updateorder/${id}`,{status:body})
    console.log(data)
}