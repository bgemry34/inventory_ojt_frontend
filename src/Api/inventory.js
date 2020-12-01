import axios from 'axios'

const url = 'http://localhost:5001';

export const fetchItems = async () => {
    try{
        const {data} = await axios.get(`${url}/inventory-system-944c6/us-central1/app/api/items/read`);
        return data;
    }catch(error){
        return error.response
    }
}


export const createItem = async (name, company, department, qty, price, depre_price, purchase_order_no, model) => {
    try{
        const data = await axios.post(`${url}/inventory-system-944c6/us-central1/app/api/items/create`, {name, company, department, qty, price, depre_price, purchase_order_no, model });
        return data;
    }catch(error){
        return error.response
    }
}

export const updateItem = async (form) => {
    try{
        const {id, name, company, department, qty, price, depre_price, purchase_order_no, model} = form;
        const data = await axios.put(`${url}/inventory-system-944c6/us-central1/app/api/items/update/`+id, {name, company, department, qty, price, depre_price, purchase_order_no, model });
        return data;
    }catch(error){
        return error.response
    }
}
export const deleteItem = async (id) => {
    try{
        const data = await axios.delete(`${url}/inventory-system-944c6/us-central1/app/api/items/delete/`+id);
        return data;
    }catch(error){
        return error.response
    }
}

// export const fetchCategories = async () =>{
//     try{
//         const {data} = await axios.get(`${url}/category`);
//         return data;
//     }catch(error){
//         return error.response
//     }
// }

// export const addItem =  (Name, Price, SellPrice, Category, Qty, Supplier, Images=[], Description) => {
//     const fd = new FormData();
//     if(Images.length > 0)
//     Images.forEach(Image=>{
//         fd.append('Images[]', Image, Image.name)
//     })
//     fd.append('Name',Name);
//     fd.append('Description', Description)
//     fd.append('Price', Price);
//     fd.append('SellPrice', SellPrice);
//     fd.append('Category', Category);
//     fd.append('Qty', Qty); 
//     fd.append('Supplier', Supplier);       
//     const data = axios.post(`${url}/items/create`, fd)
//     .then(res=>res)
//     .catch(error=>error.response);
//     return data;
// }

// export const addCategory = (Name) =>{
//     const data = axios.post(`${url}/category/create`, {Name})
//     .then(res=>res)
//     .catch(error=>error.response);
//     return data;
// }

// export const removeCategory = (CategoryId) =>{
//     const data = axios.delete(`${url}/category/delete`, {data:{CategoryId}})
//     .then(res=>res)
//     .catch(error=>error.response);
//     return data;
// }

// export const removeItem = (ItemId)=>{
//     const data = axios.delete(`${url}/items/delete`, {data:{ItemId}})
//     .then(res=>res)
//     .catch(error=>error.response);
//     return data;
// }

// export const  updateItem = (ItemId, Name, Price, SellPrice, Category, Qty, Images, Description)=>{
//     const fd = new FormData();
//     if(Images.length > 0)
//     Images.forEach(Image=>{
//         fd.append('Images[]', Image, Image.name)
//     })

//     fd.append('ItemId',ItemId);
//     fd.append('Name',Name);
//     fd.append('Description', Description)
//     fd.append('Price', Price);
//     fd.append('SellPrice', SellPrice);
//     fd.append('Category', Category);
//     fd.append('Qty', Qty);
//     fd.append('_method', 'put');

//     const data = axios.post(`${url}/items/update`, fd)
//     .then(res=>res)
//     .catch(error=>error.response);
//     return data;
// }

// export const deleteImage = (Image) =>{
//     const fd = new FormData();
//     fd.append('Image',Image);
//     fd.append('_method','delete');
//     const data = axios.post(`${url}/items/deleteImage`, fd)
//     .then(res=>res)
//     .catch(error=>error.response);
//     return data;
// }

// export const addStock = (Item, Supplier, Qty) =>{
//     const data = axios.post(`${url}/stock/create`, {Item, Supplier, Qty})
//     .then(res=>res)
//     .catch(error=>error.response);
//     return data;
// }