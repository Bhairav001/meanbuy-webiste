import axios from "axios";


//GetCart________________________________
export const GetCartItem = async ()=> {
    let config = {
        headers: {
            "authorization": localStorage.getItem('token') 
        }
      }
    let {data} = await axios.get(`https://nice-puce-ox-coat.cyclic.cloud/cart`,config)
    return data;
}


//AddtoCart________________________________
export const AddToCart = async(item) => {
    let config = {
        headers: {
            "authorization": localStorage.getItem('token') 
        }
      }
    let data = await axios.post('https://nice-puce-ox-coat.cyclic.cloud/cart/addtocart',item,config)
    return data
}


//DeleteCart_________________________________
export const DeleteCart = async(id)=>{
    let config = {
        headers: {
            "authorization": localStorage.getItem('token') 
        }
      }
  let {data} =  await axios.delete(`https://nice-puce-ox-coat.cyclic.cloud/cart/deletecart/${id}`,config)
//   console.log(data)
}

//updateCart____________________

export const cartUpdate = async(id,value) => {
    let config = {
        headers: {
            "authorization": localStorage.getItem('token') 
        }
      };
      let {data} = await axios.patch(`https://nice-puce-ox-coat.cyclic.cloud/cart/updatecart/${id}`,{value},config)
      return data._id
}