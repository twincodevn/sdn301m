module.exports = (x,y,callback)=>{
    if(x <= 0 || y <= 0){
        setTimeout(
            ()=>
            callback(new Error('Shape is invalid'),null), 2000
        )
    }else{
        setTimeout(
            ()=>{
                callback(null,{
                    perimeter: () => (x+y) * 2,
                    area : () => x * y 
                })
            }
        )
    }
}