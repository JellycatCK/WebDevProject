function veganfunction() {
    document.getElementById("beefmince").innerText = "Vegan Mince";
    document.getElementById("beefstock").innerText = "Vegetable Stock";
    document.getElementById("parmesan").innerText = "Vegan Cheese"
}

function glutenfunction() {
    document.getElementById("spaghetti").innerText = "Gluten Free Pasta"
}

function resetfunction() {
    document.getElementById("beefmince").innerText = "Beef Mince";
    document.getElementById("beefstock").innerText = "Beef Stock";
    document.getElementById("parmesan").innerText = "Parmesan";
    document.getElementById("spaghetti").innerText = "Spaghetti";
}


function calculate() {
    var num1 = document.getElementById("servings").value;
    var num2 = 125
    var finalnum = num1 * num2;
    document.getElementById("spaghettiamount").innerText = finalnum;

    var num1 = document.getElementById("servings").value;
    var num2 = 0.5
    var finalnum = num1 * num2;
    document.getElementById("oilamount").innerText = finalnum;

    var num1 = document.getElementById("servings").value;
    var num2 = 100
    var finalnum = num1 * num2;
    document.getElementById("minceamount").innerText = finalnum;

    var num1 = document.getElementById("servings").value;
    var num2 = 0.25
    var finalnum = num1 * num2;
    document.getElementById("onionamount").innerText = finalnum;

    var num1 = document.getElementById("servings").value;
    var num2 = 1
    var finalnum = num1 * num2;
    document.getElementById("garlicamount").innerText = finalnum;

    var num1 = document.getElementById("servings").value;
    var num2 = 200
    var finalnum = num1 * num2;
    document.getElementById("tomatoamount").innerText = finalnum;

    var num1 = document.getElementById("servings").value;
    var num2 = 100
    var finalnum = num1 * num2;
    document.getElementById("stockamount").innerText = finalnum;

    var num1 = document.getElementById("servings").value;
    var num2 = 50
    var finalnum = num1 * num2;
    document.getElementById("cheeseamount").innerText = finalnum;
}

