const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

const networkTask = new Promise(function(resolve, reject){




}

promiseOne.then(function(){ //fulfilled
    console.log('Promise is fullfilled');
}).catch(function(){  //rejected
    console.log('Promise is rejected');
});
