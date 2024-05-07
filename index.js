const rect = require('./rectangle');

const solveRect = (err, r) => {
    if(err){
        console.log('Invalid')
    }else{
        console.log("peri: ", r.perimeter());
        console.log("area: ", r.area());
    }
};

rect(3,4,solveRect)