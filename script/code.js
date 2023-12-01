let thePromise = new Promise(numb)

 function numb(resolve, reject){
    let numb1 = +prompt (`Enter number`)
   let numb2 = +prompt(`Enter number 2`)
    if(typeof numb1, numb2 == 'number')
    resolve(`${numb1 + numb2}`)
  reject(`numbers were not a number`)
    
 }thePromise.then(   
     correct=>console.log(correct),
     reject=>console.log(reject)

 )