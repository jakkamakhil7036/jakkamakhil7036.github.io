const customers = [
  { cart: "1234567890", pin: "1234", name: "John", balance: 0 },
  { cart: "1234567891", pin: "2345", name: "Cathy", balance: 0 },
];



const submit=()=>{
   let cartnum=document.getElementById('cart-num').value;
   let pinnum=document.getElementById('pin-num').value;
   const box=document.getElementById('container');
   let msg=document.getElementById('msg');
   

const customer=customers.find(num=> num.cart===cartnum && num.pin===pinnum);

if(customer){
    box.innerHTML=`<h2>welcome,${customer.name}!</h2>`;
    box.innerHTML=`<select>
    <option>withdraw<option>
    <option>draw<option>
    <select>`;
    msg.textContent="";

    const select=document.createElement("select");


    const options=['deposite','withdraw'];
    options.forEach(option => {
      var outcome=document.createElement("option");
        outcome.value=fruit.toLowerCase();
        option.text=fruit;
        select.appendChild(outcome);
        document.getElementById('container');
    });
    
    
    
    




}else{
    msg.textContent="invalid cart number ";
}
};


 