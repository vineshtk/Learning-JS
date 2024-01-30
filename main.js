// function catchError(fn) {
//     try {
//         fn();
//     }
//     catch(err){
//         return err;
//     }
//     return false;
// }

// module.exports = catchError;


function toNumber(string) {
    number = Number(string);
    if (number){
        return number;
    }
    else{
        return 0;
    }
}  

// 'this' functionality in the JS code

function add(x, y){
    return x*y;
}

const addTwo = add.bind(null,2);
const addFive = add.bind(null, 3);

console.log(addTwo(2))
console.log(addFive(4))

const obj = {
    name: 'Bob',
    getName: function(){
        return this.name;
    }
}

console.log(obj.name);
console.log(obj.getName());
const testThis = obj.getName;
console.log(testThis());




module.exports = toNumber;