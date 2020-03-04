export const searchmovie =Text => {
    return{
        type:"Search",
        payload:Text
    }
}
export const searchrate = rate =>{
    return{
        type:"searchrate",
        payload:rate
    }
}
export const deletemovie=id=>{
    return {
        type:"deletemovie",
        payload:id
    }
}
export const add =x=>{
    return {
        type:"add",
        payload:x
    }
}


export const edit =(name,change)=>{
    return {
        type:"edit",
        payload:{
            name,
            change
        }
    }
}