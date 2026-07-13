console.log("app.js działa");


let cart = JSON.parse(localStorage.getItem("cart")) || [];


// DODAWANIE DO KOSZYKA

function addToCart(name, price){

    cart.push({
        name: name,
        price: price
    });

    saveCart();
    updateCart();

    alert("Dodano do koszyka: " + name);
}



// ZAPIS KOSZYKA

function saveCart(){

    localStorage.setItem("cart", JSON.stringify(cart));

}



// AKTUALIZACJA KOSZYKA

function updateCart(){

    const count = document.getElementById("cart-count");
    const items = document.getElementById("cart-items");
    const totalBox = document.getElementById("cart-total");


    if(count){
        count.textContent = cart.length;
    }


    if(items){

        items.innerHTML = "";

        let total = 0;


        cart.forEach((item,index)=>{

            total += item.price;


            items.innerHTML += `
            <div class="cart-item">

                <span>
                ${item.name}<br>
                ${item.price} zł
                </span>

                <button onclick="removeCart(${index})">
                ❌
                </button>

            </div>
            `;

        });


        totalBox.textContent = total;

    }

}



// USUWANIE

function removeCart(index){

    cart.splice(index,1);

    saveCart();

    updateCart();

}



// OTWIERANIE KOSZYKA

function openCart(){

    document.getElementById("cart-window").style.display = "block";

}


function closeCart(){

    document.getElementById("cart-window").style.display = "none";

}



// ZAMYKANIE KOSZYKA

function closeCart(){

    document.getElementById("cart-window").style.display = "none";

}



// TRYB CIEMNY

document.addEventListener("DOMContentLoaded",function(){

    updateCart();


    const button = document.getElementById("theme-toggle");


    if(button){

        button.addEventListener("click",function(){

            document.body.classList.toggle("dark-mode");


            if(document.body.classList.contains("dark-mode")){

                button.textContent="☀️ Tryb jasny";

            }else{

                button.textContent="🌙 Tryb ciemny";

            }

        });

    }

});
<script src="js/app.js"></script>
