// const initialState=[]

export const reducerOne=(state = [],action)=>{
    console.log(state);
    const stateCopy=[...state]
    switch(action.type){
        case "ADD" :
            stateCopy.push(action.payload)
            console.log('state',stateCopy);
            return stateCopy
            
            case "EDIT":
                stateCopy.splice(action.payload.i,1,action.payload.tableData)
                console.log(stateCopy,"edit");
                return stateCopy

            case "DELETE":
                stateCopy.splice(action.payload,1)
                return stateCopy

                default:return state
            }
}