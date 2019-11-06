// TODO: implement this function

// function fibonacci(n) {
//   throw new Error("Not implemented");
// }

// for (let i = 0; i < 10; i++) {
//   console.log(i, fibonacci(i));
// }


// _________________________________ ANSWER_________________________________

// COMMENT: I found two approaches for a fibonacci function, an iterative solution and a reclusive solution. Despite the iterative function having more lines of code, it is quicker to call as a sequence Big O = O(n), where as the recursive solution Big O = O(n^2).

// 1st solution: iterative processes in around 0.139ms


// console.time('fibonacci iterative')

// function fibonacci(n) {
//   let arr = [0 , 1]
//   for( let x = 2; x <= n; x++){
//     let a = arr[x - 1];
//     let b = arr[x -2]
//     arr.push(a + b);
//   }
//   return arr[n]
// }

// for (let i = 1; i < 10; i++) {
//   fibonacci(i)
// }

// console.timeEnd('fibonacci iterative')




// 2nd solution: recursive processes in around 0.123ms

// console.time('fibonacci recursive')

// function fibonacci(n) {
//   if (n < 2) {
//     return n
//   }
//   return fibonacci(n - 1) + fibonacci(n - 2)
// }

// for (let i = 1; i < 10; i++) {
//   fibonacci(i)
// }

// console.timeEnd('fibonacci recursive')




// 3rd solution: while loop processes in around 0.117ms

// console.time('fibonacci loop')

// function fibonacci(num){
//   let a = 1, b = 0, temp;

//   while (num >= 0){
//     temp = a;
//     a = a + b;
//     b = temp;
//     num--;
//   }
// return b

// }

// fibonacci(8)

// console.timeEnd('fibonacci loop')






// 4th solution: one line function that processes 0.157ms
// I am not 100% sure how this function works, with the higher order methods and functions producing an array. 


// console.time('fibonacci one line function')

// var fibonacci=(n)=>Array(n).fill().reduce((a,b,c)=>a.concat(c<2?c:a[c-1]+a[c-2]),[])

// fibonacci(10)

// console.timeEnd('fibonacci one line function')
 


// 5th solution: one line function that processes 0.114mss

console.time('fibonacci one line function')

function fibonacci(n) {
  return (n <= 2) ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}

fibonacci(9)

console.timeEnd('fibonacci one line function')
