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

module.exports = toNumber;