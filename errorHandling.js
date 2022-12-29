function catchError(fn) {
    try {
        fn();
    }
    catch(err){
    console.log(err);
    }
}

module.exports = catchError;