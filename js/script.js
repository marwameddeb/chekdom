
1/////////////////

var number=document.getElementsByClassName('quantity')
document.getElementsByClassName('fas fa-plus-circle').onclick=function plus(number){
    var result=0
    for(var i=0;i<=number;i++){
       result++
    }
        return result
}

2///////////////

var number=document.getElementsByClassName('quantity')
document.getElementsByClassName('fas fa-minus-circle').onclick=function less(number){
  
    return number-1
}



3///////////////////

var array=document.getElementsByClassName('card-title')
var index=document.getElementsByClassName('quantity')
document.removeChild('fas fa-trash-alt').onclick=function Delete(array,index){
    return array.splice(index)
}


4/////////////////

document.getElementByClassName('fas fa-heart').onclick = function displayDate() {
    document.getElementByClassName('fas fa-heart').style.color = 'red';
}


5/////////////////

var quantity=document.getElementsByClassName('quantity')
var price=document.getElementsByClassName('unit-price')
element.getElementsByClassName('unit-price').onclick=function totalPrice(quantity,price){
    return quantity*price
}