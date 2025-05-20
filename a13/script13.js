const item=[
    {name:'Apple',price: 30,},
    {name:'banana',price: 63,},
    {name:'orange',price: 50,}

];



const updatevalue=item.map((item)=>({...item,price:item.price+5,}));


console.log(updatevalue);