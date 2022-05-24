function setInnerTextByElementId(elementId, innerTextToSet) {
    var element = document.getElementById(elementId);
    if (element != null)
        element.innerText = innerTextToSet;
}
function veganfunction() {
    setInnerTextByElementId("beefmince","Vegan Mince");
    setInnerTextByElementId("beefstock","Vegetable Stock");
    setInnerTextByElementId("parmesan","Vegan Cheese");
    setInnerTextByElementId("chicken","Tofu");
    setInnerTextByElementId("eggs"," ");
    setInnerTextByElementId("fishsauce","More Soy Sauce");
}

function glutenfunction() {
    setInnerTextByElementId("spaghetti","Gluten Free Pasta");
    setInnerTextByElementId("noodles","Rice Noodles");
}

function resetfunction() {
    setInnerTextByElementId("beefmince","Beef Mince");
    setInnerTextByElementId("beefstock","Beef Stock");
    setInnerTextByElementId("parmesan","Parmesan");
    setInnerTextByElementId("spaghetti","Spaghetti");
    setInnerTextByElementId("chicken","Chicken");
    setInnerTextByElementId("eggs","Eggs");
    setInnerTextByElementId("fishsauce","Fish Sauce");
    setInnerTextByElementId("noodles","Noodles");
}

function calculateNewVolume(elementId, singleVolume) {
    var element = document.getElementById(elementId);
    var servings = document.getElementById("servings").value;
    var volume = singleVolume;
    if (element != null)
        element.innerText = servings * volume;
}

function calculate() {
    calculateNewVolume("spaghettiamount", 125);
    calculateNewVolume("oilamount", 0.5);
    calculateNewVolume("minceamount", 100);
    calculateNewVolume("onionamount", 0.25);
    calculateNewVolume("garlicamount", 1);
    calculateNewVolume("tomatoamount", 200);
    calculateNewVolume("stockamount", 100);
    calculateNewVolume("cheeseamount", 50);
    calculateNewVolume("noodlesamount", 60);
    calculateNewVolume("padthaioilamount", 0.5);
    calculateNewVolume("chickenamount", 100);
    calculateNewVolume("greenonionamount", 0.5);
    calculateNewVolume("padthaigarlicamount", 1);
    calculateNewVolume("carrotamount", 0.125);
    calculateNewVolume("eggsamount", 0.5);
    calculateNewVolume("sugaramount", 1.5);
    calculateNewVolume("tamarindamount", 0.5);
    calculateNewVolume("soyamount", 0.25);
    calculateNewVolume("fishamount", 0.75);
    calculateNewVolume("limeaount", 0.25);
}

