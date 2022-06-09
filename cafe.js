"use strict"
const $ = selector => document.querySelector(selector);

//preload images_info
if (document.images) {
    var espressoImgPreload = new Image();
    espressoImgPreload.src = "images/espresso_info.jpg";
    var latteImgPreload = new Image();
    latteImgPreload.src = "images/latte_info.jpg";
    var cappucinoImgPreload = new Image();
    cappucinoImgPreload.src = "images/cappuccino_info.jpg";
    var coffeeImgPreload = new Image();
    coffeeImgPreload.src = "images/coffee_info.jpg";
    var biscottiImgPreload = new Image();
    biscottiImgPreload.src = "images/biscotti_info.jpg";
    var sconeImgPreload = new Image();
    sconeImgPreload.src = "images/scone_info.jpg";
}

//hovers the mouse over one of the images in the menu, another image display
document.addEventListener("DOMContentLoaded", () => {
    //espresso
    $("#espresso_info").onmouseover = (event) => {
        event.target.src = "images/espresso_info.jpg"
    };

    $("#espresso_info").onmouseout = (event) => {
        event.target.src = "images/espresso.jpg"
    };
    // latte
    $("#latte_info").onmouseover = (event) => {
        event.target.src = "images/latte_info.jpg"
    };

    $("#latte_info").onmouseout = (event) => {
        event.target.src = "images/latte.jpg"
    };
    //cappucino
    $("#cappuccino_info").onmouseover = (event) => {
        event.target.src = "images/cappuccino_info.jpg"
    };

    $("#cappuccino_info").onmouseout = (event) => {
        event.target.src = "images/cappuccino.jpg"
    };
    //coffee
    $("#coffee_info").onmouseover = (event) => {
        event.target.src = "images/coffee_info.jpg"
    };

    $("#coffee_info").onmouseout = (event) => {
        event.target.src = "images/coffee.jpg"
    };
    //biscotti
    $("#biscotti_info").onmouseover = (event) => {
        event.target.src = "images/biscotti_info.jpg"
    };

    $("#biscotti_info").onmouseout = (event) => {
        event.target.src = "images/biscotti.jpg"
    };
    //scone
    $("#scone_info").onmouseover = (event) => {
        event.target.src = "images/scone_info.jpg"
    };

    $("#scone_info").onmouseout = (event) => {
        event.target.src = "images/scone.jpg"
    };

    //total sale price
    var total = 0;

    // Add espresso onclick event
    $("#espresso_info").onclick = function () {
        total += 1.95;

        var option = document.createElement("option");
        option.innerHTML = `$1.95 - Espresso`;
        $("#order").appendChild(option);
        $("#total").innerHTML = `$ ${total.toFixed(2)}`;
    };
    // Add Latte onclick event
    $("#latte_info").onclick = function () {
        total += 2.95;
        var option = document.createElement("option");
        option.innerHTML = `$2.95 - Latte`;
        $("#order").appendChild(option);
        $("#total").innerHTML = `$ ${total.toFixed(2)}`;
    };
    //Add cappuccino onclick event
    $("#cappuccino_info").onclick = function () {
        total += 3.45;
        var option = document.createElement("option");
        option.innerHTML = `$3.45 - Cappuccino`;
        $("#order").appendChild(option);
        $("#total").innerHTML = `$ ${total.toFixed(2)}`;
    };
    //Add coffee onclick event
    $("#coffee_info").onclick = function () {
        total += 1.75;
        var option = document.createElement("option");
        option.innerHTML = `$1.75 - Coffee`;
        $("#order").appendChild(option);
        $("#total").innerHTML = `$ ${total.toFixed(2)}`;
    };
    //Add biscotti onclick event
    $("#biscotti_info").onclick = function () {
        total += 1.95;
        var option = document.createElement("option");
        option.innerHTML = `$1.95 - Biscotti`;
        $("#order").appendChild(option);
        $("#total").innerHTML = `$ ${total.toFixed(2)}`;
    };

    //Add scone onclick event
    $("#scone_info").onclick = function () {
        total += 1.95;
        var option = document.createElement("option");
        option.innerHTML = `$2.95 - Scone`;
        $("#order").appendChild(option);
        $("#total").innerHTML = `$ ${total.toFixed(2)}`;
    };

    //Add clear_order onclick event
    $("#clear_order").onclick = function () {
        total = 0;

        $("#order").innerHTML = "";;

        $("#total").innerHTML = "";
    };

    //Add place_order onclick event
    $("#place_order").onclick = function () {
        if (total == 0)
            alert("Click on a menu item");
        else
            location.href = "checkout.html";
    };
}); 