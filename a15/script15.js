

const item=[
    {name:'Apple',price: 30,status:'pending'},
    {name:'banana',price: 63,status:'pending'},
    {name:'orange',price: 50,status:'pending'}

];



const updatevalue=item.map((item)=>({...item,price:item.price+5,status:"complete"}));


console.log(updatevalue);