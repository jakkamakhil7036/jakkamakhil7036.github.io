 

 function calculator(){

     const first= parseFloat(document.getElementById('first').value)
     const second= parseFloat(document.getElementById('second').value)

       const addition = first + second;
  const subtraction = first - second;
  const multiplication = first * second;
  const division =first/second;

  document.getElementById('result').innerHTML = `
    Addition: ${addition}<br>
    Subtraction: ${subtraction}<br>
    Multiplication: ${multiplication}<br>
    Division: ${division}
  `;
}
     
 