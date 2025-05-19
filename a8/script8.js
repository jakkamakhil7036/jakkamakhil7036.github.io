function add(){
    const n1=parseFloat(document.getElementById('n1').value)
    const n2=parseFloat(document.getElementById('n2').value)

    let addition=n1+n2;

    document.getElementById('output').innerHTML="addition="+addition;
}
function sub(){
    const n1=parseFloat(document.getElementById('n1').value)
    const n2=parseFloat(document.getElementById('n2').value)

    let addition=n1-n2;

    document.getElementById('output').innerHTML="sub="+addition;
}
function mul(){
    const n1=parseFloat(document.getElementById('n1').value)
    const n2=parseFloat(document.getElementById('n2').value)

    let addition=n1*n2;

    document.getElementById('output').innerHTML="mul="+addition;
}

function div(){
    const n1=parseFloat(document.getElementById('n1').value)
    const n2=parseFloat(document.getElementById('n2').value)

    let addition=n1/n2;

    document.getElementById('output').innerHTML="div="+addition;
}