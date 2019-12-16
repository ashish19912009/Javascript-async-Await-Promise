class A {

   async AsyncFunc () {
    setTimeout(()=>{
        return "ABC";     
    },2000)
   }
}

A.AsyncFunc()
.then(res=> {
    console.log(res);
});