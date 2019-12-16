console.log("Person 1: Show Ticket");
console.log("Person 2: Show Ticket");


 const preMovie = async () => 'Person 3: Show Ticket';
 
 preMovie().then(res=> {
     console.log(res);
 });

    const preMovieOne = async () =>{
        const tickets = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve('ticket ID : 12DS345');
            },4000);
        });

        const ticketDetails =  await tickets; 
        console.log("Inside Promise !!!");
        console.log(2+2);
        return ticketDetails;
    }

    preMovieOne().then(res =>{
        console.log(res);
    });

console.log("Person 4: Show Ticket");
console.log("Person 5: Show Ticket");