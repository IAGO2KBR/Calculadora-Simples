let x = document.getElementById('n1')
let y = document.getElementById('n2')
let z = document.getElementById('result')

function sum (){
    z.innerHTML = parseInt(x.value) + parseInt(y.value)
}
function sub (){
    z.innerHTML = parseInt(x.value) - parseInt(y.value)
}
function mul (){
    z.innerHTML = parseInt(x.value) * parseInt(y.value)
}
function div (){
    z.innerHTML = parseInt(x.value) / parseInt(y.value)
}     


