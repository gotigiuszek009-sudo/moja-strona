let cart=[];


// KOSZYK

function addToCart(name,price){

cart.push({
name:name,
price:price
});

updateCart();

}



function updateCart(){

document.getElementById("cart-count").innerHTML=cart.length;


let items=document.getElementById("cart-items");

items.innerHTML="";


let total=0;


cart.forEach((item,index)=>{

total+=item.price;


items.innerHTML+=`

<p>
${item.name} - ${item.price} zł

<button onclick="removeCart(${index})">
❌
</button>

</p>

`;

});


document.getElementById("cart-total").innerHTML=total;

}



function removeCart(index){

cart.splice(index,1);

updateCart();

}



function openCart(){

document.getElementById("cart-window").style.display="block";

}



function closeCart(){

document.getElementById("cart-window").style.display="none";

}




// TRYB CIEMNY


document.addEventListener("DOMContentLoaded", function(){

    const button = document.getElementById("theme-toggle");

    if (!button) {
        console.log("Brak przycisku theme-toggle");
        return;
    }

    button.addEventListener("click", function(){

        document.body.classList.toggle("dark-mode");

        if(document.body.classList.contains("dark-mode")){
            button.innerHTML = "☀️ Tryb jasny";
        } else {
            button.innerHTML = "🌙 Tryb ciemny";
        }

    });

});
