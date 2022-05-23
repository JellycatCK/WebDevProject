// Function to display a list of recipes for the given region
function showRecipesByRegion(inputRegion) {

    // Reads XML data 
    parser = new DOMParser();
    xmlDoc = parser.parseFromString(xml, "text/xml");

    var divRecipes = document.getElementById('recipes');      // THE PARENT DIV.
    var recipes = xmlDoc.getElementsByTagName('recipe');       // THE XML TAG NAME.

    for (var i = 0; i < recipes.length; i++) {

        //Retrieve region for this recipe
        regionValue = recipes[i].getElementsByTagName("region")[0].childNodes[0].nodeValue;

        // Only display this recipe if it is matches the given region
        if (regionValue == inputRegion || inputRegion == "ALL") {

            // Create 'a' tag for each recipe
            var aRecipe = document.createElement('a');
            aRecipe.href = "../recipes/" + recipes[i].getElementsByTagName("recipeURL")[0].childNodes[0].nodeValue;
            aRecipe.className = "list-group-item list-group-item-action d-flex gap-3 py-3";

            // Display picture for each recipe
            var imgRecipe = document.createElement('img');
            imgRecipe.src = "../img/" + recipes[i].getElementsByTagName("pictureURL")[0].childNodes[0].nodeValue;
            imgRecipe.alt = "Pic 1";
            imgRecipe.width = "64";
            imgRecipe.height = "64";
            aRecipe.appendChild(imgRecipe);

            // Display recipe name
            var divRecipeDetails = document.createElement("div");
            divRecipeDetails.class = "d-flex gap-2 w-100 justify-content-between";
            aRecipe.appendChild(divRecipeDetails);

            var divNameRecipeDetails = document.createElement("div");
            divRecipeDetails.appendChild(divNameRecipeDetails);

            var recipeName = document.createElement("h8");
            recipeName.class = "mb-0";
            recipeName.innerText = recipes[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
            divNameRecipeDetails.appendChild(recipeName);

            // Display recipe servings
            var recipeServings = document.createElement("h6");
            recipeServings.class = "opacity-50";
            recipeServings.innerText = "Serves " + recipes[i].getElementsByTagName("servings")[0].childNodes[0].nodeValue;
            divRecipeDetails.appendChild(recipeServings);

            // Append to list
            divRecipes.appendChild(aRecipe);
        }
    }
}

function showAllRecipes() {
    showRecipesByRegion("ALL");
}

var xml =
"<recipes>" +
    "<recipe>" +
        "<name>Butter Chicken Curry</name>" +
        "<recipeURL>recipe.html</recipeURL>" +
        "<pictureURL>curry.jpg</pictureURL>" +
        "<region>south asia</region>" +
        "<servings>4</servings>" +
    "</recipe>" +

    "<recipe>" +
        "<name>Doner Kebab</name>" +
        "<recipeURL>recipe.html</recipeURL>" +
        "<pictureURL>doner_kebab.jpg</pictureURL>" +
        "<region>south asia</region>" +
        "<servings>4</servings>" +
    "</recipe>" +

    "<recipe>" +
        "<name>Beef Stir Fry</name>" +
        "<recipeURL>recipe.html</recipeURL>" +
        "<pictureURL>beef_stir_fry.jpg</pictureURL>" +
        "<region>north asia</region>" +
        "<servings>4</servings>" +
    "</recipe>" +

    "<recipe>" +
        "<name>Vietnamese Pork Banh Mi Burgers</name>" +
        "<recipeURL>recipe.html</recipeURL>" +
        "<pictureURL>vietnamese_pork_banh_mi_burgers.jpg</pictureURL>" +
        "<region>north asia</region>" +
        "<servings>4</servings>" +
    "</recipe>" +

    "<recipe>" +
        "<name>Australian Seared Kanagroo Meat</name>" +
        "<recipeURL>recipe.html</recipeURL>" +
        "<pictureURL>seared_kangaroo_meat.jpg</pictureURL>" +
        "<region>oceania</region>" +
        "<servings>4</servings>" +
    "</recipe>" +

    "<recipe>" +
        "<name>Lamingtons</name>" +
        "<recipeURL>recipe.html</recipeURL>" +
        "<pictureURL>lamington.jpg</pictureURL>" +
        "<region>oceania</region>" +
        "<servings>4</servings>" +
    "</recipe>" +

    "<recipe>" +
        "<name>Spaghetti</name>" +
        "<recipeURL>spaghetti.html</recipeURL>" +
        "<pictureURL>spaghetti.jpeg</pictureURL>" +
        "<region>europe</region>" +
        "<servings>4</servings>" +
    "</recipe>" +

    "<recipe>" +
        "<name>French Onion Soup</name>" +
        "<recipeURL>recipe.html</recipeURL>" +
        "<pictureURL>french_onion_soup.jpg</pictureURL>" +
        "<region>europe</region>" +
        "<servings>4</servings>" +
    "</recipe>" +    

    "<recipe>" +
        "<name>Chilli Con Carne</name>" +
        "<recipeURL>recipe.html</recipeURL>" +
        "<pictureURL>chilli.jpg</pictureURL>" +
        "<region>south america</region>" +
        "<servings>4</servings>" +
    "</recipe>" +   

    "<recipe>" +
        "<name>Brazilian Fish Stew</name>" +
        "<recipeURL>recipe.html</recipeURL>" +
        "<pictureURL>brazilian_fish_stew.jpg</pictureURL>" +
        "<region>south america</region>" +
        "<servings>4</servings>" +
    "</recipe>" +   

    "<recipe>" +
        "<name>Lebanese Tabbouleh Salad</name>" +
        "<recipeURL>recipe.html</recipeURL>" +
        "<pictureURL>tabbouleh_salad.jpg</pictureURL>" +
        "<region>middle east</region>" +
        "<servings>4</servings>" +
    "</recipe>" +   

    "<recipe>" +
        "<name>Persian Kuku Sabzi</name>" +
        "<recipeURL>recipe.html</recipeURL>" +
        "<pictureURL>kuku_sabzi.jpg</pictureURL>" +
        "<region>middle east</region>" +
        "<servings>4</servings>" +
    "</recipe>" +  

    "<recipe>" +
        "<name>Harira (Lamb, Tomato and Lentil Soup)</name>" +
        "<recipeURL>recipe.html</recipeURL>" +
        "<pictureURL>harira.jpg</pictureURL>" +
        "<region>africa</region>" +
        "<servings>4</servings>" +
    "</recipe>" +   

    "<recipe>" +
        "<name>Lamb Tagine</name>" +
        "<recipeURL>recipe.html</recipeURL>" +
        "<pictureURL>moroccan_lamb_tagine.jpg</pictureURL>" +
        "<region>africa</region>" +
        "<servings>4</servings>" +
    "</recipe>" +   

    "<recipe>" +
        "<name>Blueberry Waffles</name>" +
        "<recipeURL>blueberry_waffles.html</recipeURL>" +
        "<pictureURL>blueberry_waffles.jpg</pictureURL>" +
        "<region>north america</region>" +
        "<servings>4</servings>" +
    "</recipe>" +   

    "<recipe>" +
        "<name>Classic Cheesburger</name>" +
        "<recipeURL>recipe.html</recipeURL>" +
        "<pictureURL>cheeseburger.jpg</pictureURL>" +
        "<region>north america</region>" +
        "<servings>4</servings>" +
    "</recipe>" + 

"</recipes>";