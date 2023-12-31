import axios from "axios";

export const Getdata = async(params) => { 
   //  console.log(params)
 let data = await axios.get(`https://nice-puce-ox-coat.cyclic.cloud/product`)
 //console.log({'API':data})
 return data;
}

export const GetByID = async(query) => {
     let {data} = await axios.get(`https://nice-puce-ox-coat.cyclic.cloud/product?_id=${query}`)
    return data;
}


export const GetBy_category = async(category,key)=> {
let newkey = key.substring(1,key.length)
   const {data} = await axios.get(`https://nice-puce-ox-coat.cyclic.cloud/product?categories=${category.cate}&${newkey}`)
   return data
}

//Search____________________________________-
export const GetSearchData = async (key) => {
    let {data} = await axios.get(`https://nice-puce-ox-coat.cyclic.cloud/product/search/${key}`)
     if(data.sug){
        return [];
     }
    return data;
}

//update ____________________________________
export const updateProduct = async (body) => {
   let id=body._id
 let {data} = await axios.patch(`https://nice-puce-ox-coat.cyclic.cloud/product/update/${id}`,body)
 return data
}
