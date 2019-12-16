
const abc = new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve("Time to Goo !!!");
    }, 2000);
});

abc.then(res=>{
console.log(res);
});