export const addData=(payload)=>{
    console.log("payload",payload);
    return {
        type:'ADD',
        payload
    
    }
}

export const editData=(payload)=>{
    return {
        type:"EDIT",
        payload
    }
}

export const deleteData=(payload)=>{
    return{
        type:"DELETE",
        payload
    }
}