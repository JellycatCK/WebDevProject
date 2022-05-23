function veganfunction() {
    document.getElementById("beefmince").innerText = "Vegan Mince";
    document.getElementById("beefstock").innerText = "Vegetable Stock";
    document.getElementById("parmesan").innerText = "Vegan Cheese";
    document.getElementById("chicken").innerText = "Tofu";
    document.getElementById("eggs").innerText = "Omit";
    document.getElementById("fishsauce").innerText = "More Soy Sauce";
}

function glutenfunction() {
    document.getElementById("spaghetti").innerText = "Gluten Free Pasta";
    document.getElementById("noodles").innerText = "Rice Noodles";
}

function resetfunction() {
    document.getElementById("beefmince").innerText = "Beef Mince";
    document.getElementById("beefstock").innerText = "Beef Stock";
    document.getElementById("parmesan").innerText = "Parmesan";
    document.getElementById("spaghetti").innerText = "Spaghetti";
    document.getElementById("chicken").innerText = "Chicken";
    document.getElementById("eggs").innerText = "Eggs";
    document.getElementById("fishsauce").innerText = "Fish Sauce";
    document.getElementById("noodles").innerText = "Noodles";
}


function calculate() {
    var num1 = document.getElementById("servings").value;

    var num2 = 125
    var finalnum = num1 * num2;
    document.getElementById("spaghettiamount").innerText = finalnum;

    var num2 = 0.5
    var finalnum = num1 * num2;
    document.getElementById("oilamount").innerText = finalnum;

    var num2 = 100
    var finalnum = num1 * num2;
    document.getElementById("minceamount").innerText = finalnum;

    var num2 = 0.25
    var finalnum = num1 * num2;
    document.getElementById("onionamount").innerText = finalnum;

    var num2 = 1
    var finalnum = num1 * num2;
    document.getElementById("garlicamount").innerText = finalnum;

    var num2 = 200
    var finalnum = num1 * num2;
    document.getElementById("tomatoamount").innerText = finalnum;

    var num2 = 100
    var finalnum = num1 * num2;
    document.getElementById("stockamount").innerText = finalnum;

    var num2 = 50
    var finalnum = num1 * num2;
    document.getElementById("cheeseamount").innerText = finalnum;

    var num2 = 60
    var finalnum = num1 * num2;
    document.getElementById("noodlesamount").innerText = finalnum;

    var num2 = 0.5
    var finalnum = num1 * num2;
    document.getElementById("padthaioilamount").innerText = finalnum;

    var num2 = 100
    var finalnum = num1 * num2;
    document.getElementById("chickenamount").innerText = finalnum;

    var num2 = 0.5
    var finalnum = num1 * num2;
    document.getElementById("greenonionamount").innerText = finalnum;

    var num2 = 1
    var finalnum = num1 * num2;
    document.getElementById("padthaigarlicamount").innerText = finalnum;

    var num2 = 0.125
    var finalnum = num1 * num2;
    document.getElementById("carrotamount").innerText = finalnum;

    var num2 = 0.5
    var finalnum = num1 * num2;
    document.getElementById("eggsamount").innerText = finalnum;

    var num2 = 1.5
    var finalnum = num1 * num2;
    document.getElementById("sugaramount").innerText = finalnum;

    var num2 = 0.5
    var finalnum = num1 * num2;
    document.getElementById("tamarindamount").innerText = finalnum;

    var num2 = 0.25
    var finalnum = num1 * num2;
    document.getElementById("soyamount").innerText = finalnum;

    var num2 = 0.75
    var finalnum = num1 * num2;
    document.getElementById("fishamount").innerText = finalnum;

    var num2 = 0.25
    var finalnum = num1 * num2;
    document.getElementById("limeamount").innerText = finalnum;
}

