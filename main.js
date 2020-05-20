//add product to cart
function addProductToCart(buttonID) {
    let cart = document.getElementById("rightDiv");
    switch (buttonID) {
        case "addPedigree":
            qty = document.getElementById("PedigreeQty").value;
            addHTML = document.createElement("p");
            addHTML.className="orderedProducts";
            addHTML.innerHTML = "Pedigree: "+qty+" Price: <strong class='price'>" +(2*Number(qty)) +"</strong>";
            console.log(addHTML);
            cart.insertBefore(addHTML, document.getElementById("checkOut"));
            break;
        case "addFamily":
            qty = document.getElementById("FamilyQty").value;
            addHTML = document.createElement("p");
            addHTML.className="orderedProducts";
            addHTML.innerHTML = "Family: "+qty+" Price: <strong class='price'>"+(3*Number(qty)) +"</strong>";
            console.log(addHTML);
            cart.insertBefore(addHTML, document.getElementById("checkOut"));
            break;
        case "addTux":
            qty = document.getElementById("TuxQty").value;
            addHTML = document.createElement("p");
            addHTML.className="orderedProducts";
            addHTML.innerHTML = "Tux: "+qty+" Price: <strong class='price'>"+(3*Number(qty)) +"</strong>";
            console.log(addHTML);
            cart.insertBefore(addHTML, document.getElementById("checkOut"));
            break;
    }
}

//add product to cart
function addProductToCart(buttonID) {
    let cart = document.getElementById("rightDiv");
    switch (buttonID) {
        case "addSeedmix":
            qty = document.getElementById("SeedmixQty").value;
            addHTML = document.createElement("p");
            addHTML.className="orderedProducts";
            addHTML.innerHTML = "Seedmix: "+qty+" Price: <strong class='price'>" +(2*Number(qty)) +"</strong>";
            console.log(addHTML);
            cart.insertBefore(addHTML, document.getElementById("checkOut"));
            break;
        case "addEnergypellet":
            qty = document.getElementById("EnergypelletQty").value;
            addHTML = document.createElement("p");
            addHTML.className="orderedProducts";
            addHTML.innerHTML = "Energypellet: "+qty+" Price: <strong class='price'>"+(3*Number(qty)) +"</strong>";
            console.log(addHTML);
            cart.insertBefore(addHTML, document.getElementById("checkOut"));
            break;
        case "addTux":
            qty = document.getElementById("TuxQty").value;
            addHTML = document.createElement("p");
            addHTML.className="orderedProducts";
            addHTML.innerHTML = "Tux: "+qty+" Price: <strong class='price'>"+(3*Number(qty)) +"</strong>";
            console.log(addHTML);
            cart.insertBefore(addHTML, document.getElementById("checkOut"));
            break;
    }
}

//Popup Invoice

function invoice() {

    let modal = document.getElementById("myModal");
    modal.style.display = "block";

    // Get the <span> element that closes the modal
    let cross = document.getElementsByClassName("close")[0];
    console.log(cross);


    cross.onclick = function() {
        modal.style.display = "none";
    }


// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }


    //Take everything from shopping cart
    cart = document.getElementById("rightDiv");
    items = document.getElementsByClassName("orderedProducts");
    //invoicePlace is the place we add items in
    invoicePlace = document.getElementById("invoicePlace");
    i = 0;
    text = "<h2>Invoice</h2>";
    while (i<items.length){
        text += "<p>"+items[i].innerHTML+"</p>";
        i++;
    }

    //calculate total
    total = 0;
    i = 0;
    prices = document.getElementsByClassName("price");
    while (i<prices.length){
        console.log(prices[i].innerText);
        total += Number(prices[i].innerText);
        i++;
    }
    text += "<p>Total: $"+total+"</p>";
    invoicePlace.innerHTML = text;
}