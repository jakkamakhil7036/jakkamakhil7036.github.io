const item = [
  { id: 1, name: "Apple", price: 30 },
  { id: 2, name: "banana", price: 63 },
  { id: 3, name: "orange", price: 50 },
];

const cart = { 1: 7, 3: 5 };

item.map((value) => {
  console.log(value.id, value.name, value.price);
});

// const updatevalue=item.map((item)=>({...item,price:item.price+5,total:item.price*item.qty,status:"complete"})).filter(name=>name.qty>2);

// console.log(updatevalue);
