const rect = {
    perimeter: (x,y) => (2*(x+y)),
    area: (x,y) => x * y 
}

const solveRect = (x,y) =>{
    if(x <= 0 || y <= 0){
        console.log('Length and width of shape is invalid')
    }else{
        console.log('Perimeter: ', rect.perimeter(x,y))
        console.log('Area: ', rect.area(x,y))
    }
}

solveRect(3,4)