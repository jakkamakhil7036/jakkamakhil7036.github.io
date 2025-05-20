const item=[
    {name:'Apple',price: 30,qty:3,status:'pending'},
    {name:'banana',price: 63,qty:5,status:'pending'},
    {name:'orange',price: 50,qty:2,status:'pending'}

];



const updatevalue=item.map((item)=>({...item,price:item.price+5,total:item.price*item.qty,status:"complete"}));


console.log(updatevalue);