let cart = JSON.parse(localStorage.getItem("cart")) || [];
console.log("app.js działa");
let cart=[];


// KOSZYK

function addToCart(name, price){

    console.log("Dodano:", name, price);

    cart.push({
        name: name,
        price: price
    });

    console.log(cart);

    localStorage.setItem("cart", JSON.stringify(cart));

    console.log("Zapisano:", localStorage.getItem("cart"));

    updateCart();
}


function updateCart(){

document.getElementById("cart-count").innerHTML = cart.length;


let items = document.getElementById("cart-items");

items.innerHTML = "";


let total = 0;


cart.forEach((item,index)=>{

total += item.price;


items.innerHTML += `

<div class="cart-item">

<p>
${item.name}
<br>
<b>${item.price} zł</b>
</p>

<button onclick="removeCart(${index})">
❌
</button>

</div>

`;

});


document.getElementById("cart-total").innerHTML = total;


localStorage.setItem("cart", JSON.stringify(cart));

}



function removeCart(index){

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCart();

}



function removeCart(index){

cart.splice(index,1);

localStorage.setItem("cart", JSON.stringify(cart));

updateCart();

}


function closeCart(){

document.getElementById("cart-window").style.display="none";

}




// TRYB CIEMNY


const button = document.getElementById("theme-toggle");

button.addEventListener("click", function(){

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        button.textContent = "☀️ Tryb jasny";
    } else {
        button.textContent = "🌙 Tryb ciemny";
    }

});
updateCart();
