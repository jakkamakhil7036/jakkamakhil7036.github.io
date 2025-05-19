// function add(...value) {
//   const sum = value.reduce((a, b) => a + b);
//   console.log(sum);
// }

// add(1, 2, 34, 5, 6);



const item = [
  { id: 1, name: "Apple", price: 30 },
  { id: 2, name: "banana", price: 63 },
  { id: 3, name: "orange", price: 50 },
];

const cart = { 1: 7, 3: 5 };

item.map((value) => {
  console.log(value.id, value.name, value.price);
});

